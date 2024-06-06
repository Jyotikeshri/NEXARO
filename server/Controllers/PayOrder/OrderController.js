import orderModel from "../../Models/OrderModel.js";

const orderController = async (request, response) => {
  try {
    const currentUserId = request.userId;

    const orderList = await orderModel
      .find({ userId: currentUserId })
      .sort({ createdAt: -1 });

    console.log("orderList", orderList);

    response.json({
      data: orderList,
      message: "Order list",
      success: true,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};

export default orderController;
