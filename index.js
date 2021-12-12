let r = fetch('https://meme-api.herokuapp.com/gimme')
let s = r.then(function (responce){
    return responce.json();
});
s.then(function(data){
   console.log(data.url);
  
});

