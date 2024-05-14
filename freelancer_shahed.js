

const monthlySavings  =(array,num) =>{

    if (!Array.isArray(array)){
        console.log('Invalid input');
        return;
    }
    if (typeof num !== 'number'){
        console.log('Invalid input');
        return;
    }

    let total_income = 0;
    let tax = 0;

    for(let i=0;i<array.length;i++){
        total_income += array[i];
        if (array[i] >= 3000){
            tax = array[i]*.2;

        }
    }
    const savings = total_income -tax-num;
    if (savings < 0){
        console.log('earn more');
    }
    else{
        console.log(savings);
    }
    
}

const num = 10000;  
const numbers = [900,2700,3400];   

monthlySavings(num,numbers);

