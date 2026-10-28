//task: create a function orderfood that return a promise it should resolve after 
// 2 sec with "pizza delivered "

//bonus: add a chance to reject with "delivery failed "

function orderfood(){
    return new Promise(function(res,rej){
        setTimeout(() => {
            let chance=Math.random() <0.5;
            if(chance) res();
            else rej();

           
        }, 2000);
    })
}
orderfood().then(function(){
    console.log("pizza delivered");
    
}).catch(function(){
    console.log("Delivery failed");
    
})