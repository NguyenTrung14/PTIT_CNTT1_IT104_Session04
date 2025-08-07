"use strict";
(() => {
    const student = {
        name: "Nguyen Trung",
        age: 18,
        email: "nguyentrung27092006@gmail.com",
    };
    function introduce(student) {
        console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}`);
    }
    console.log(introduce(student));
})();
