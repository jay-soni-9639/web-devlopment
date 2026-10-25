//iife
// immediatly invoke function expression
(function abc(){
    console.log("helloooo")
})();

//hofs 
//higher order function 
// ak avu function ke je retur
// n kare function and accept kare parameter
function abcd(){//aa return kare function anu che 
    return function(){
        console.log("jay soni")
    };
}
abcd()();

function a(par){//aa accept kare parameter
    par();
}
a(function(){
    console.log("this is higher order function");
    
})

//callback function
// jo uper a che to e higher order function chr km k e ak function ne except kare che ne a pass kare che function e call back function

//closer 
// closer ak concept che jema function  return kare function ne ane return function ma tame use karo parent function no data
//global means public tame game tya game e function ma vapro local means private e ana function ni bar use na kari sako 