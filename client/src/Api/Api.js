const Domain = import.meta.env.VITE_BACKEND_URL;

const allApi = {
  signUp: {
    url: `${Domain}/api/signup`,
    method: "post",
  },

  signIn: {
    url: `${Domain}/api/login`,
    method: "post",
  },
  currUser: {
    url: `${Domain}/api/user-details`,
    method: "get",
  },
  logOut: {
    url: `${Domain}/api/logout`,
    method: "get",
  },
  allUser: {
    url: `${Domain}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${Domain}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${Domain}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${Domain}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${Domain}/api/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${Domain}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${Domain}/api/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${Domain}/api/product-details`,
    method: "post",
  },
  addToCartProduct: {
    url: `${Domain}/api/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${Domain}/api/countAddToCartProduct`,
    method: "get",
  },

  addToCartProductView: {
    url: `${Domain}/api/view-card-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${Domain}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${Domain}/api/delete-cart-product`,
    method: "post",
  },
  searchProduct: {
    url: `${Domain}/api/search`,
    method: "get",
  },
  filterProduct: {
    url: `${Domain}/api/filter-product`,
    method: "post",
  },
  payment: {
    url: `${Domain}/api/checkout`,
    method: "post",
  },
  getOrder: {
    url: `${Domain}/api/order-list`,
    method: "get",
  },
  allOrder: {
    url: `${Domain}/api/all-order`,
    method: "get",
  },
};

export default allApi;
