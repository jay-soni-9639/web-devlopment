//for each  e ak arr na badha element pase jai ne print  karave value but e return na kare value ne ani mate aapde map no use kervo pade  
// var arr=[1,2,3,4];
// arr.forEach(function(value){
//     console.log(value);
// })

// map it is similer to for each yahhh but diffrence is it must return value map assume kare blank array and return value from array
// var arr1=[1,2,3,4,5,6];
// var ans= arr1.map(function(value){
//     return 1;
// })

//avi rite filter no use thai 

// var arr2=[1,2,3,4,6];
// var ans1=arr2.filter(function(value){
//     return value>2;
// })

// map atale naya array ma return value nakho 
// filter means naya array ma true return value nakho

//have reduce kervanu atale ak array mathi multiple value no return 1 value thai like add kari ne sub kari ne etc 
// var arr3=[1,2,3,4,5];
// var ans2=arr3.reduce(function(accumulator,key){
//     return accumulator*key; //retuen ni value accumulator ma set thai 
// },1)


// write a for loop to print 10 to 1 num in reverse 
// for(var i=10;i>0;i--){
//     console.log(i);
    
// }


//use a while loop of multiple of 3 from 3 to 30
// var i=3;
// while(i<31){
//     console.log(i);
    
//     i+=3;
// }




//write a program to sum num from 1to 100 using a loop 
// var sum=0;
// for(var i=1;i<=100;i++){
//     sum=sum+i;
    
    
// }
// console.log(sum);

// use a for of loop to iterate over a string "javascript"
var str="javascript";
for(var i of str){
    console.log(i);
    
}

//remove duplicate values an array
// var arr=[1,1,1,2,2,3,3,4];
// var ans=[...new set(arr)];
