"use strict";
(() => {
    function processInput(input) {
        if (typeof input === "string") {
            const isNumber = !isNaN(Number(input));
            if (isNumber) {
                return Number(input) * Number(input);
            }
            else {
                const letter = input.match(/[a-zA-Z]/g);
                const count = letter ? letter.length : 0;
                return `${count} ky tu chu cai`;
            }
        }
        else if (typeof input === "number") {
            if (input < 2 || !Number.isInteger(input)) {
                return `Khong phai la so nguyen to`;
            }
            else {
                for (let i = 2; i <= Math.sqrt(input); i++) {
                    if (input % i === 0) {
                        return `Khong phai la so nguyen to`;
                    }
                }
                return `Day la so nguyen to`;
            }
        }
        else {
            if (input === true) {
                return `Gia tri la true - dang tien hanh xu ly`;
            }
            else {
                return `Gia tri la false - dung xu ly`;
            }
        }
    }
})();
