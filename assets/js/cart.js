import { getCart } from "/services/cartApi.js";

document.addEventListener("DOMContentLoaded", async () => {
    const cartBody = document.querySelector(".cart-body");
    const totalPriceElement = document.querySelector(".total__price");

    try {
        const res = await getCart();
        const items = res.data.items || [];

        cartBody.innerHTML = ""; // xoá mẫu cũ

        let totalPrice = 0;

        items.forEach((item, index) => {
            const thanhTien = item.price * item.quantity;
            totalPrice += thanhTien;

            const rowHTML = `
            <div class="row cart-body-row" style="align-items: center;">
                <div class="col-md-1 col-2 text-right">
                    <input type="checkbox" class="cart-item-check" data-id="${item._id}">
                </div>

                <div class="col-md-11 col-10" style="text-align: center;">
                    <div class="row card-info" style="align-items: center;">

                        <div class="card-info-img">
                            <a href="">
                                <img class="cart-img" src="${item.url}" alt="">
                            </a>
                        </div>

                        <div class="col-md-3">
                            <a href="" class="cart-name">
                                <h5>${item.name}</h5>
                            </a>
                        </div>

                        <div class="col-md-2 col-12" style="font-size: 16px;">
                            <span>${item.price.toLocaleString()}₫</span>
                        </div>

                        <div class="col-md-3 col-12">
                            <div class="cart-quantity">
                                <input type="button" value="-" class="control" onclick="tru('${item._id}')">
                                <input type="text" value="${item.quantity}" class="text-input" id="text_so_luong-${item._id}">
                                <input type="button" value="+" class="control" onclick="cong('${item._id}')">
                            </div>
                        </div>

                        <div class="col-md-2 col-12 hidden-xs" style="font-size: 16px;">
                            <span>${thanhTien.toLocaleString()}₫</span>
                        </div>

                        <div class="col-md-1 text-right">
                            <a onclick="xoa('${item._id}')">
                                <i class="fas fa-trash"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            `;

            cartBody.insertAdjacentHTML("beforeend", rowHTML);
        });

        totalPriceElement.innerText = `${totalPrice.toLocaleString()}₫`;

    } catch (err) {
        console.error("Lỗi load giỏ hàng:", err);
    }
});
