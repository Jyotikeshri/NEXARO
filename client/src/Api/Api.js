const Domain = `import.meta.env.VITE_BACKEND_URL`;

const allApi = {
  signUp: {
    url: `${Domain}/signup`,
    method: "post",
  },
  signIn: {
    url: `${Domain}/login`,
    method: "post",
  },
  currUser: {
    url: `${Domain}/user-details`,
    method: "get",
  },
  logOut: {
    url: `${Domain}/logout`,
    method: "get",
  },
  allUser: {
    url: `${Domain}/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${Domain}/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${Domain}/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${Domain}/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${Domain}/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${Domain}/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${Domain}/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${Domain}/product-details`,
    method: "post",
  },
  addToCartProduct: {
    url: `${Domain}/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${Domain}/countAddToCartProduct`,
    method: "get",
  },

  addToCartProductView: {
    url: `${Domain}/view-card-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${Domain}/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${Domain}/delete-cart-product`,
    method: "post",
  },
  searchProduct: {
    url: `${Domain}/search`,
    method: "get",
  },
  filterProduct: {
    url: `${Domain}/filter-product`,
    method: "post",
  },
  payment: {
    url: `${Domain}/checkout`,
    method: "post",
  },
  getOrder: {
    url: `${Domain}/order-list`,
    method: "get",
  },
  allOrder: {
    url: `${Domain}/all-order`,
    method: "get",
  },
};

export default allApi;
