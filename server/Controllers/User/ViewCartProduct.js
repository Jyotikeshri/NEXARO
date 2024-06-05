import addToCartModel from "../../Models/CartModel.js";

const ViewCartProduct = async (req, res) => {
  try {
    const currentUser = req.userId;

    const allProduct = await addToCartModel
      .find({
        userId: currentUser,
      })
      .populate("productId");

    res.json({
      data: allProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

export default ViewCartProduct;
