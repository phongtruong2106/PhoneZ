function displayImage() {
    var url = document.getElementById("productImage").value;
    document.getElementById("imageDisplay").innerHTML = "<img src='" + url + "' height='100px' width='100px' th:src='@{${product.imageName}}' style='margin-top: 20px' alt=' ' />";
};

// Lấy tham chiếu đến phần tử input
var priceInput = document.getElementById("price");

// Lấy giá trị của trường input
var priceValue = priceInput.value;

// Chuyển đổi giá trị thành chuẩn số
var formattedPrice = Number(priceValue).toString();

priceInput.value = formattedPrice