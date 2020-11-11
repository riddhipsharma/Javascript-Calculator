let display = document.querySelector(".inner_display");
let button = document.querySelectorAll(".button");
let mode = document.querySelectorAll("img");
display.innerText = 0;

button.forEach(function(ele){
    ele.addEventListener('click', function(e){
        let t = e.target.innerText;
        if(t=='C'){
            display.innerHTML = 0;
        }else if(t=='='){
            display.innerHTML = eval(display.innerHTML);
        }else{
            if(display.innerHTML=='0'){
                display.innerHTML = '';
            }
            display.innerHTML += t;
        }
    });
});