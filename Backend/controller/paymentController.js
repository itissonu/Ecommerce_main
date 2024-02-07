const Razorpay=require("razorpay")

const instance=new Razorpay(
    {
        key_id:"rzp_test_xhuYGNI6uqSbts",
        key_secret:"homyhn4NiDFnjEENyZiUenSr"
    }
)
const checkout=async(req,res)=>{
    const { amount } = req.body;
    const total= amount.toFixed(0)
    const options = {
        amount: total*100,
        currency:  "INR"
    };

    try {
        const order = await instance.orders.create(options);
        res.json({
            success: true,
            order
        });
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
}
const paymentverification=async(req,res)=>{
    const{razorpayOrderId,razorpayPaymentId}=req.body
    res.json({
        razorpayOrderId,razorpayPaymentId
    })
}
module.exports={checkout,paymentverification}