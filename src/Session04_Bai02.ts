(()=>{
    let score: number[]=[8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3]
    let result: number=0;
    for(const number of score){
        result +=number;
    }
    result=result/score.length;
    console.log(`Diem trung binh: ${result.toFixed(2)}`);
})();