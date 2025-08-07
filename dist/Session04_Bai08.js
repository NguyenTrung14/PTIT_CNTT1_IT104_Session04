"use strict";
(() => {
    function calculateOrderTotal(order) {
        return order.items.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    }
    function printOrder(order) {
        console.log(`Don hang: ${order.orderId}`);
        console.log(`Khach hang: ${order.customerName}`);
        console.log(`San pham: `);
        order.items.forEach(item => {
            console.log(`${item.product.name} x ${item.quantity} → ${item.product.price} VND`);
        });
        console.log(`Tong cong: ${calculateOrderTotal(order)} VND`);
        if (order.note) {
            console.log(`Ghi chu: ${order.note}`);
        }
    }
    const order = {
        orderId: "ORD123",
        customerName: "Nguyễn Văn A",
        note: "Giao hàng trong giờ hành chính",
        items: [
            {
                product: { readonlyId: "P01", name: "Áo sơ mi", price: 300000 },
                quantity: 2
            },
            {
                product: { readonlyId: "P02", name: "Quần tây", price: 500000 },
                quantity: 1
            }
        ]
    };
    printOrder(order);
})();
