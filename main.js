// let num = prompt("sonni kiriting");

// for (let i = 1; i < 10; i++) {
//     num *= i
//     console.log(num);
// }









let son = parseInt(prompt("Birinchi sonni kiriting"));

let amal = prompt("Amalni kiriting");

let son2 = parseInt(prompt("Ikinchi sonni kiriting"));


if (isNaN(son) || isNaN(son2)) {
    console.log("Raqam kiritilmagan");
}else{

    if (amal == "+") {
        console.log("Natijangiz " + (son+son2) );

    }else if (amal == "/") {
        console.log("Natijangiz " + (son/son2));

    }else if(amal == "*") {
        console.log("Natijangiz " + (son*son2));

    }else if(amal == "-") {
        console.log("Natijangiz " + (son-son2));
        
    }else {
        console.log("Xatolik bor boshqatdan urinib koring !");
    }
}