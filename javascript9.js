//remove duplicate values from an array
var arr=[1,1,1,2,3,4,5,5,5,7,8,7,7];
var ans=[...new Set(arr)]
console.log(ans);

//find second largest num in an array
var arr1=[3,1,2,1,2,3,4,5,5,4]; 
var ans1=[...new Set(arr1)];
var ans2=ans1.sort(function(a,b){
    return b-a;//b-a atale decending order ma sort kervanu baki a-b atale accending order ma sort kervanu
})
console.log(ans2[1]);

//how to reverse an array
var arr2=[1,2,3,4,5,8,9,7,2,5,8,1,656,8,415]
var arr3=[];
for(var i=arr2.length-1;i>=0;i--){
    arr3.push(arr2[i])//push atale nakhvu ak array mathi bija array ma 
    
   
}
//find most frequent element in an array

var arr4=[1,1,2,3,3,3,4,4,4,7,7,7];
var obj={};
arr4.forEach(function(value){
    if(obj[value]===undefined){
        obj[value]=1;
        
    }
    else{
        obj[value]++;
    }
});

