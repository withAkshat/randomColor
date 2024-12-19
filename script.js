

let btn = document.querySelector('button');

btn.addEventListener("click", ()=>{
    let h3 = document.querySelector('h3');
    let randomColor = getrandomColor();
    h3.innerText = randomColor ;

    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
    console.log("Color Updated");
    
})

function getrandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`
    return color;
};

