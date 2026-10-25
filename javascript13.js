// var num=Math.random()*10; aama aapde print karia tyare num jetlo guno ani kerta ocha aave 10 che to 9 sudhi na javaba aavse
// console.log(num);

// var num1=Math.floor(num);aama point kadhi nakhse  e 
// console.log(num1);

var btn= document.querySelector('button')
var bx=document.querySelector('#box')
btn.addEventListener('click',function(){
    var c1=Math.floor(Math.random()*256);
    var c2=Math.floor(Math.random()*256);
    var c3=Math.floor(Math.random()*256);
    bx.style.backgroundColor=`rgb(${c1},${c2},${c3})`
    console.log(c1,c2,c3);
    

    

})
