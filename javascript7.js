// question practice for js
//1 log "hello" to the consol in 3 different ways

console.log("hellloo");
console.warn("hellooo");
console.error("helllooo");
console.table({name:"jay",age:19});

//perform 35*2-(10/2)+7 and log the result

var res=35*2-(10/2)+7;
console.log(res);

//log the datatype of "123" 123 true and null using typeof
console.log(typeof "123");
console.log(typeof 123);

console.log(typeof true);
console.log(typeof null);// interview question null means object 

//write a program that swaps the values of two variables 
var a=12;
var b=13;
var c;
c=a;
a=b;
b=c;

var c="jay";
var d="soni";

[c,d]=[d,c];
console.log(c,d)

//use console.groupcollapsed() toorganize logs into a group

console.groupCollapsed("aaj ka hisab");
console.log("coffe 300");
console.log("nasto 100");
console.log("fuel 500");
console.groupEnd();

//declare a const object modify its property and log the updated object
const obj={
    name:"jay",
    age:19
}

obj.age=20;

//convert "50" string into number into 3 different method



var g=parseInt("25");

var f=Number("10");

var s="36"  // aane run kerti vakhte jo s pela + muko to e num ma aavi jai  

//find character from string 
var str="jaysoni"
if(str.search("soni")==-1){
    console.log(false);
    
}else{
    console.log(true);
    

}









