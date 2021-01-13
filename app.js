const btn = document.getElementById("btn");
const title = document.getElementById("title");
const body = document.body;

btn.addEventListener("click", function(){
    body.classList.toggle("darkTheme")
    var dark = body.className.indexOf("darkTheme");

    if(dark == -1){ //Eğer dark theme bulunmazsa -1 değeri döndürür.
        btn.innerText="Dark Theme";
        title.innerText="Light Theme";        
    }
    else 
    {
        btn.innerText="Light Theme";
        title.innerText="Dark Theme";
    }
});