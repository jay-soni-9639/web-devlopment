// what is function: block of code
// why function: jab code immediate nahi chalana ho tab uska use kerna 
function abc(){
    console.log("helloooooooo guys welcome to saket tours and travels")
}
abc();

//how to passs parameter and aargument of an function
function abc1(p) //parameter
{
    console.log(p)
}
abc1("jay soni")//aargument
abc1("helloooo")

//tyes of function
//type 1
function abc(){
    //function statement
}

// type 2

var abc=function() {
    //function exresssion
}

//type 3

// function(){
    //anonymas function atale name vagar nu
//}

//return
function abcd(){
    return 12;
}
var ans =abcd();

//fat arrow function with implicit functionn atale ani mele calll thai avu ne explicit atale aapde calll karia  a
var a=()=>13
 var ans1=a();

//rest parameter e jaja varible badle aapde 3 var dot kari ne lakhia a to value array ma store thia jai ne aapde rest ni badle game e lakhi sakia
//rest operator puche to 3 var dot karo e rest operator
function hellooo(a,b,c,...rest){
    console.log(a,b,c,rest)
}
var ans2=hellooo(1,2,3,4,5,6,7,89)


//hoisting 
//e variable ne pela declaration kari de


console.log(j);
var j=10;
 
