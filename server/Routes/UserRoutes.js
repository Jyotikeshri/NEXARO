import express from "express";
import userSignUpController from "../Controllers/User/UserSignUpController.js";
import userLogInController from "../Controllers/User/UserLogInController.js";
import authToken from "../Middleware/AuthToken.js";
import userDetailsController from "../Controllers/User/UserDetails.js";
import userLogout from "../Controllers/User/UserLogout.js";
import allUsers from "../Controllers/User/AllUsers.js";
import updateUser from "../Controllers/User/UpdateUser.js";
import UploadProductController from "../Controllers/Products/UploadProduct.js";
import getProductController from "../Controllers/Products/GetProduct.js";
import updateProductController from "../Controllers/Products/UpdateProduct.js";
import getCategoryProduct from "../Controllers/Products/GetOneProductCategory.js";
import getCategoryWiseProduct from "../Controllers/Products/GetCategoryWiseProduct.js";
import getProductDetails from "../Controllers/Products/GetProductDetails.js";
import addToCartController from "../Controllers/User/AddToCart.js";
import countAddToCartProduct from "../Controllers/User/CountCartProduct.js";
import ViewCartProduct from "../Controllers/User/ViewCartProduct.js";
import updateAddToCartProduct from "../Controllers/User/UpdateCartProduct.js";
import deleteAddToCartProduct from "../Controllers/User/DeleteCartProduct.js";
import filterProductController from "../Controllers/Products/FilterProduct.js";
import searchProduct from "../Controllers/Products/SearchProduct.js";
import paymentController from "../Controllers/PayOrder/PaymentController.js";
import webhooks from "../Controllers/PayOrder/WebHook.js";
import orderController from "../Controllers/PayOrder/OrderController.js";
import allOrderController from "../Controllers/PayOrder/AllOrderController.js";

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/login", userLogInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/logout", userLogout);
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

/// product ]

router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);

/// cart

router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/view-card-product", authToken, ViewCartProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

// pay order
router.post("/checkout", authToken, paymentController);
router.post("/webhook", webhooks);
router.get("/order-list", authToken, orderController);
router.get("/all-order", authToken, allOrderController);

export default router;
