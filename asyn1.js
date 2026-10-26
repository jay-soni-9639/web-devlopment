// javascript has two parts 1 has sync and another is asyn
//now example of both 

//syn
console.log("helloooooo");

//asyn
setTimeout(function(){
    console.log("this is asyn");
    
},2000)

//syn
console.log("this is syn");

//js is single thtreded lenguage it use only one core to perform one operation at a time like u have octa core in your pc js use one core from that
//asyn means it call in specific time not immiddiate while sync immidiate call like asyn have promise settimeout setinterval 

//now some words we need to know 
//main thread: ama code aavee syn no 
//webapi : ano mean k je vastu aapnne browser taraf thi mali che je js ni nathi pan aapde js ma use karia chiye 
//ane kevai web api like clear interval,dom aa badha ne jova hoi to window object ma jai ne joi sako window lakhi ne console ma

//process 
//jo 
//step 1
//syn code main thread ma jase one by one 

//step 2
//asyn code web api ma jase ne ama thi aavse callback queue ma ama hadse event loop e check kerse main thread free che ke nai jo free hoi to e asyn code ne lai jase call back queue mathi 

