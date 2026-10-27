//syn - callstack -main thread
//asyn - webapi - callback queue -by event loop go to callstack - main thread

//callback hell  it is also called crismas tree problem 
// function step1(cb){
//     console.log("step 1 called");
//     cb();

    
// }
// function step2(cb){
//     console.log("step 2 called ");
//     cb();

    
// }
// step1(function(){
//     step2(function(){
//         console.log("all step completed");
        
//     })
// })


//promise 
//ano means ama 2 part hoi resolve and reject kyo code chalse chalse k nai kai nakki na hoi tyare use thai let suppose aapde insta 
// no data lai a jo data aapdi pase aave to resolve ma jai na aave to reject majato re aane kevai promise 

// var pr=new Promise(function(res,rej){
//     console.log("insta data aa raha he ");
//     console.log("ohhhh wow usme error nahi aaya");
//     res();
//     //jo res atale resolve karo to then baki catch aave reject ma 

    
// })
// pr.then(function(){
//     console.log("yahhh no any error");
    
// }).catch(function(){
//     console.log("there is error ");
    
// });


//callback hell with promise 

function step1(){
   return new Promise(function (res,rej){
    console.log("step 1");
    res();
    
   })
    

}
function step2(){
    return new Promise(function (res,rej){
    console.log("step 2");
    res();
    
   })
    
}
step1().then(step2).then(function(){
    console.log("all called ");
    
})
