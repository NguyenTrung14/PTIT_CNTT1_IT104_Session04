(()=>{
    type Person={
        name: string;
        age: number;
    }

    type Employee={
        employeeId: string;
        department: string;
    }

    type StaffMember= Person & Employee;

    function printStaffInfo(staff: StaffMember): void{
        console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
    }
    
    const staff1: StaffMember={
        name:"Nguyen Van A",
        age:28,
        employeeId: "EMP001",
        department: "Ke toan"
    }

    printStaffInfo(staff1);

})();