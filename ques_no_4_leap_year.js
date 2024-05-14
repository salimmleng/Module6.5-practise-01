

const leapYear = (year)=>{

    if ((year % 4 == 0 && year % 100 !== 0) || year % 4 == 0){
        console.log('Leap year')
    }
    else{
        console.log('Not leap year')
    }
}

leapYear(2024);