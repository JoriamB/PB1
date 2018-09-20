// Opdracht 1 ------------------------------------------------------

const mark = 7;

function checkMark (){
    if (mark < 6){
        console.log('onvoldoende');
     } else if (6 < mark < 7){
            console.log('voldoende');
     } else if (7 < mark < 9){
            console.log('goed');
     } else if (mark > 9){
            console.log('uitmuntend');
 }   
}
checkMark();

// Opdracht 2 ------------------------------------------------------

// Check if mark is good, very good etc with switch statement
const Mark = 7;

function checkValue(){
switch (true){

    case (Mark<6):
    console.log('onvoldoende');
    break;
    case (Mark<7):
    console.log('voldoende');
    break;
    case (Mark<9): 
    console.log('goed');
    break;
    case (Mark>=9):
    console.log('uitmuntend');
    break;
}
}
checkValue();

// Opdracht 3 ------------------------------------------------------

const purchasedBook = true,
job = 'teacher',
inTrain = false;


function checkBoolean(){
if (purchasedBook == true && inTrain == true && job == 'teacher'){
    console.log('finally i can enjoy my book!');
} else if (purchasedBook == true && inTrain == false && job == 'teacher'){
    console.log('finally i hate my book!');
} else if (purchasedBook == false && inTrain == true && job == 'teacher'){
    console.log('anything');
}
}
checkBoolean();