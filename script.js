$(document).ready(function () {
    // Fetch data on page load
    fetchData();

    // Form submission
    $("#productForm").on("submit", function (e) {
        e.preventDefault();
        const formData = $(this).serialize();

        $.post("submit.php", formData, function () {
            fetchData();
            $("#productForm")[0].reset();
        });
    });

    // Fetch and display data
    function fetchData() {
        $.get("fetch.php", function (data) {
            const products = JSON.parse(data);
            let rows = "";
            let totalSum = 0;

            products.forEach((product, index) => {
                const totalValue = product.quantity * product.price;
                totalSum += totalValue;
                rows += `
                    <tr>
                        <td>${product.productName}</td>
                        <td>${product.quantity}</td>
                        <td>${product.price}</td>
                        <td>${product.datetime}</td>
                        <td>${totalValue.toFixed(2)}</td>
                        <td>
                            <button class="btn btn-sm btn-warning edit-btn" data-index="${index}">Edit</button>
                        </td>
                    </tr>
                `;
            });

            $("#productRows").html(rows);
            $("#sumTotal").text(totalSum.toFixed(2));
        });
    }
});
