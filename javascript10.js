//callback
// function abc(val){
//     val();
// }
// abc(function a(){//this is call back 
//     console.log("hello")
// })

//higher order function 
// function a(){
//     return function abcd(){
//         console.log("hiiiiii");
        
//     }
// }a()();

// function b(value){
//    console.log(value);
   
    
// }
// b(12)

//closerr 

// function k(kinu){
//     var a=10;
//     return function j(){
//         console.log(a);
        
//     }

// }k()()

//create a function that takes another function as an argument and calls it after 3 sec (hof+callback)
// function abc(val){
//     setTimeout(val,3000)// 3000 mili sec  means 3 sec 

// }
// abc(function a(){
//     console.log("heyyyyyyyy");
    
// })

//implement your own version of .map() as a higher order function 
// var arr=[1,2,3,4,5,6]
// function hap(arr,fn){
//     var newarr=[]
//     for(var i=0;i<arr.length;i++){
//         newarr.push(fn(arr[i]));
        
//     }
//     return newarr

// }
// var ans=hap(arr,function(va){
//     return va+2
// })

//write a function that use closer to creater a counter 

// function a(){
//     var count=0;
//     return function(){
//         count++;
//         console.log(count);
        
//     }
// }
// var c=a();
// c();
// c()
// c()

//implement a function that limits how many times another function can be called 
function fnlimit(fn,limit){
    var total=0;
    return function(){
        if(total<limit){
            total++;
            fn();
        }
        else{
            console.log(("limit reached "));
            
        }
    }


}
var ans=fnlimit(function(){
    console.log("hiiiiii");
    
},3);
ans()
ans()
ans()
ans()
