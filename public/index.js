$(function () {
  let productList = $("#product-list");

  fetchProducts(function (products) {
    productList.empty();
    for (var product of products) {
      productList.append(createProductCard(product));
    }
  });
});
