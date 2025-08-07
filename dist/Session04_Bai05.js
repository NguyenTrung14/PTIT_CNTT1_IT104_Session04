"use strict";
(() => {
    function printStaffInfo(staff) {
        console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
    }
    const staff1 = {
        name: "Nguyen Van A",
        age: 28,
        employeeId: "EMP001",
        department: "Ke toan"
    };
    printStaffInfo(staff1);
})();
