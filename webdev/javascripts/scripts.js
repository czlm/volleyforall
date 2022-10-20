
words = ["こんにちは","Bonjour","Hello"]
images = ["yukicover2.jpg","jeniacover.jpg","micahcover.jpg"]

function timer(){
  var i = 0;
  setInterval(function(){
    document.getElementsByClassName("intro")[0].innerHTML = words[i]
    document.getElementById("bckground-img").style.backgroundImage = "url(../media/"+images[i]+")"
    if(i<words.length-1){
      i++;
    }
    else{
      i = 0;
    }
  }, 5000)
}
