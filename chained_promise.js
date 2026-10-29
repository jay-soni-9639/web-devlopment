//1.create getuser()- resolve with {id: 1,name:"jay"}
//2. getpost(userid)-resolve with list of titles 
//3. getcomments(postid)-resolve with comments
// chian then together using .then and log with final output

function getuser(){
    return new Promise(function(res,rej){
        setTimeout(() => {
            res({id: 1,name:"jay"});
            
        }, 1000);
    })
}
function getpost(userid){
    return new Promise(function(res,rej){
      setTimeout(() => {
          res(["title1","title2"]);
      }, 2000);

    })

}
function getcomments(postid){
    return new Promise(function(res,rej){
        setTimeout(() => {
            res(["nice ","amazing post"]);

        }, 3000);
    })

}
getuser().then(function(data){
    console.log(data);
    return getpost(data.id)
    

}).then(function(title){
    console.log(title);
    return getcomments("like");
    
}).then(function(comment){
    console.log(comment);
    

}).finally(function(){
    console.log("all data fetched ");
    
})