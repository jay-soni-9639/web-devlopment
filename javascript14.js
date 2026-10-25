var arr=[{
    name:'csk',
    primary:'yellow',
    secondary:'green'
},
{
    name:'rcb',
    primary:'red',
    secondary:'blue'
},
{
    name:'mi',
    primary:'blue',
    secondary:'yellow'
}
,
{
    name:'gt',
    primary:'blue',
    secondary:'pink'
}


];
var btn=document.querySelector('button');
var h1=document.querySelector('h1');
btn.addEventListener('click',function(){
   var num=Math.floor(Math.random()*arr.length)
   var winner=arr[num];
   h1.innerHTML=winner.name
   h1.style.backgroundColor=winner.primary;
   h1.style.color=winner.secondary


   
})