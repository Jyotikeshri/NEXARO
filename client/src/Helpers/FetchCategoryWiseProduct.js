import allApi from "../Api/Api";

const fetchCategoryWiseProduct = async (category) => {
  const response = await fetch(allApi.categoryWiseProduct.url, {
    method: allApi.categoryWiseProduct.method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      category: category,
    }),
  });

  const dataResponse = await response.json();

  return dataResponse;
};

export default fetchCategoryWiseProduct;
