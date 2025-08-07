"use strict";
(() => {
    function check(input) {
        if (typeof input === "string") {
            return `${input.length} ky tu`;
        }
        else {
            if (input % 2 === 0) {
                return `Day la so chan`;
            }
            else {
                return `Day la so le`;
            }
        }
    }
})();
