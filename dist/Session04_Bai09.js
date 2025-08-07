"use strict";
(() => {
    function calculateInvoiceTotal(invoice) {
        return invoice.orders.reduce((total, item) => {
            return total + item.orders.items.product.price * invoice.orders.items.quantity;
        }, 0);
    }
})();
