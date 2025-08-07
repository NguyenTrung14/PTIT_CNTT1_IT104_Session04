(()=>{
    interface Student{
        name: string;
        age: number;
        email: string;
    }

    const student: Student={
        name: "Nguyen Trung",
        age: 18,
        email:"nguyentrung27092006@gmail.com",
    };
    
    function introduce(student: Student): void{
        console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}`);
    }

    console.log(introduce(student));
})();