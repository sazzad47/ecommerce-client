export const BASE_API = "http://localhost:5000";
export const PAGINATION_LIMIT = 5;
export const colorsPalette = {
  1: "#FFFFFF",
  2: "#F9F6F7",
  3: "#b7d1eb",
  4: "#003366",
  5: "#002347",
  6: "rgb(0, 51, 102)",
};
export const SiteMargin = "94";

export const colorsRandomly = [
  "#001219",
  "#005f73",
  "#0a9396",
  "#94d2bd",
  "#e9d8a6",
  "#ee9b00",
  "#ca6702",
  "#bb3e03",
  "#ae2012",
  "#94d2bd",
];

export const cities = ["Liverpool", "Manchester", "Newcastle", "Chester"];

// Add a product to the list of last viewed products in local storage
export const AddToLastViews = (product) => {
  // Get the list of last viewed products from local storage
  const products = JSON.parse(localStorage.getItem("lastViews"));

  // Check if the current product is already in the list
  const thisProduct = products.products.filter((pr) => pr?.id == product?.id);
  if (thisProduct.length) return; // If the product is already in the list, return

  // If the list has reached the maximum capacity, remove the oldest product
  if (products.products.length == 6) {
    products.products.pop();
  }

  // Add the current product to the list of last viewed products
  products.products.push(product);

  // Update the list of last viewed products in local storage
  localStorage.setItem("lastViews", JSON.stringify(products));
};

// Get the list of last viewed products from local storage
export const getLasViews = () => {
  const products = JSON.parse(localStorage.getItem("lastViews"));

  // Remove any null values from the list
  products?.products[0] == null && products?.products.shift();

  // Return the list of last viewed products
  return products?.products;
};

export const currencySymbol = "GBP";
