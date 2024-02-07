const asyncawaitError = require("../middlewear/asyncawaitError");
const createError = require("../utils/errorHendler");
const Product = require('../models/Product')

//create new product(admin)
const createNewproduct = asyncawaitError(async (req, res, next) => {

    const product = new Product(req.body);

    const newProduct = await product.save();

    if (!newProduct) {
        return next(new createError("error while creating product", 401));
    }
    res.status(201).json({
        success: true,
        newProduct,
        message: "product added successfully"
    })

});

const getallproducts = asyncawaitError(async (req, res, next) => {

    let query = {};


    // if (req.query.category) {
    //     const categoriesArray = req.query.category.split(',');
    //     const categoriesRegexArray = categoriesArray.map(category => new RegExp(category, 'i'));
    //     query.category = { $in: categoriesRegexArray };
        
    // }
    if (req.query.category) {
        const categoriesArray = req.query.category.split(',');
        const categoriesRegexArray = categoriesArray.map(category => new RegExp(`^${category}$`, 'i'));
        query.category = { $in: categoriesRegexArray };
    }
    

    if (req.query.size) {
        const sizesArray = req.query.size.split(',');
    const sizesRegexArray = sizesArray.map(size => new RegExp(size, 'i'));
    query.size = { $in: sizesRegexArray };

    }

    if (req.query.colors) {
        const colorsArray = req.query.colors.split(',');
        // Convert each color to a case-insensitive regex
        const colorsRegexArray = colorsArray.map(color => new RegExp(color, 'i'));
        // Use $in to match any of the specified colors
        query.colors = { $in: colorsRegexArray };
    }

    if (req.query.ageCategory) {
            
        const categoryRegex = new RegExp(req.query.ageCategory, 'i');
        query.ageCategory = { $regex: categoryRegex };
    }


    if (req.query.brand) {
        const brandsArray = req.query.brand.split(',');
        const brandsRegexArray = brandsArray.map(brand => new RegExp(brand, 'i'));
        query.brand = { $in: brandsRegexArray };
    }

    if (req.query.minPrice && req.query.maxPrice) {
        query.price = { $gte: parseFloat(req.query.minPrice), $lte: parseFloat(req.query.maxPrice) };
    }

    if (req.query.search) {
        const searchArray = req.query.search.split(',');
        const searchRegexArray = searchArray.map(search => new RegExp(search, 'i'));
       // query.search = { $in: searchRegexArray };
        const searchRegex = new RegExp(req.query.search, 'i'); 
        const categoryRegex = new RegExp(`^${req.query.search}$`, 'i'); //regexp - no need to filter/match texts i for case insens.
        query.$or = [           //or means either of this is true
        { name: { $in: searchRegexArray } },
        { tags: { $in: searchRegexArray } },
        { colors: { $in: searchRegexArray } },
        { brand: { $in: searchRegexArray } },
        { category: { $in: [categoryRegex] } }
        ];
    }
    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    
    const products = await Product.find(query).skip(skip)
        .limit(limit);;

    if (products.length === 0) {
       // return next(new createError("no such product found", 401))
    return   res.status(200).json({
        success:true,
        products
    });

    }

    res.status(200).json({
        success:true,
        products
    });

});

//for admin
const allproduct = asyncawaitError(async (req, res, next) => {
    const productlist = await Product.find();
    if (!productlist) {
        return next(new createError("no product found atall", 401));
    }
    res.status(201).json({
        success: true,
        productlist
    })

});

//for admin (image handeling to be done at frontend)
const updateProduct = asyncawaitError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new createError("product not found", 401));
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body);

    const savedproduct = await updatedProduct.save();

    if (!savedproduct) {
        return next(new createError("product updation failed", 401));
    }

    res.status(201).json({
        success: true,
        message: "product updated successfully"
    })
});

const deleteProduct = asyncawaitError(async (req, res, next) => {

    const result = await Product.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 0) {
        return next(new createError('No such user found', 401));
    }

    res.status(201).json({
        success: true,
        message: 'User deleted successfully',
    });


});
//product by id
const getProductDetails = asyncawaitError(async (req, res, next) => {
    let products = await Product.findById(req.params.id);

    if (!products) {
        return next(new createError("product not found", 401));
    }

    res.status(201).json({
        success: true,
        products,
        message: "product found successfully"
    })

});

//create or already created then update
const createReveiw = asyncawaitError(async (req, res, next) => {
    // console.log(req.user.id);
    if (!req.user.id) {
        return next(new createError("log in please", 401));
    }
    const { rating, comment, Id } = req.body;

    const newreview = {
        user: req.user.id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    }

    const product = await Product.findById(Id);

    //checking if the product has any review which this user wants to give 
    const Reviewd = await product.ratings.find(
        (review) => {
            console.log(review.user.toString(), "rev");
            return review.user.toString() === req.user.id.toString();
        }
    );

    if (Reviewd) {
        product.ratings.forEach((rat) => {
            if (rat.user.toString() === req.user.id.toString())
                (rat.rating = rating),
                    (rat.comment = comment);

        });
    } else {

        product.ratings.push(newreview);

        product.totalRatings = product.ratings.length;
    }
    let sumRating = 0;

    //add all the reviews rating
    product.ratings.forEach((revs) => {
        sumRating = sumRating + revs.rating;
    });

    product.avgRatings = sumRating / product.ratings.length;
    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });


});
const allreviews = asyncawaitError(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
    if (!product) {
        return next(new createError("product not found", 401));
    }
    res.status(200).json({
        success: true,
        reviews: product.ratings,
    });

});
const deleteReview = asyncawaitError(async (req, res, next) => {
    const product = await Product.findById(req.query.ProductId);
    if (!product) {
        return next(new createError("product not found", 401));
    }
    const filterReviews = product.ratings.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
    );
    let sum = 0;

    filterReviews.forEach((revs) => {
        sum += revs.rating;
    });

    let ratings = 0;

    if (filterReviews.length === 0) {
        ratings = 0;
    } else {
        ratings = sum / filterReviews.length;
    }

    const updatedReviewLength = filterReviews.length;

    await Product.findByIdAndUpdate(
        req.query.ProductId,
        {
            ratings: filterReviews,
            avgRatings: ratings,
            totalRatings: updatedReviewLength,
        },
        {
            new: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
    });

});
module.exports = {
    deleteProduct, allproduct, allreviews, createNewproduct, deleteReview, createReveiw, getProductDetails, getallproducts, updateProduct
}










