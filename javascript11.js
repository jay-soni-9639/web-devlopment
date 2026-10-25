//create a function that takes a callback and executes it after every 'n' second indefitenly
// function abc(val,time){
    
//     setInterval(val,time)
// }abc(function a(){
//     console.log("hellooooo guys ");
    

// },2000)

//implement a function that returns a function with a present getting (closer)
// function abcd(value){
//     return function(name){
//         console.log(`${value} ${name}`);
        


//     }
// }
// var ans=abcd("hellooo ingland")
// ans("my self jay")


// implement a function that takes a callback and only executes it once (hof+closer)

// function abcd(val){
//     var executed=false;
//     return function(){
//         if(!executed){
//             executed=true;
//             val();
//         }else{
//             console.error("already executed ");
            
//         }
        
//     }
// }
// var ans=abcd(function(){
//     console.log("helloo guys ");
    
// })
// ans()
// ans()
// ans()


//find largest num of an array
// var array=[1,1,7,8,9,52,45]
// var max=array[0]
// if(array.length===0){
//     console.log("sorry u need to enter an value first");
    
// }
// for(var i=0;i<=array.length-1;i++){
//     if(array[i]>max){
//         max=array[i]
//     }
// }
// console.log(max);

//check pelindrom using js 
var name="nan"
var name1="";
for(var i=name.length-1;i>=0;i--){
    name1=name1+name[i];
   
    
    

}
console.log(name1);

if(name1===name){
    console.log("yahhh this is pelindrom");
    
}else{
    console.log("no this is not an pelindrom");
    
}


