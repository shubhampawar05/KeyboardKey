let body = document.getElementsByTagName("body")[0];
// console.log(body);


// body.addEventListener('keypress', (e)=>{
//     console.log(e);

//     let para = document.querySelector(".para");
//     para.innerHTML=`Your pressed <span class="green">${e.key}</span>`
//     let num = document.querySelector(".number");
//     num.innerHTML= `${e.charCode}`
//     console.log(e.charCode);
//     console.log(e.key);
// })



let audio = new Audio("a.mp3")
let div = document.createElement("div");
body.addEventListener('keydown', (e)=>{
   
   // Reset the audio playback position to start from the beginning
   audio.currentTime = 0;
   audio.play();

    // console.log(e);

    let para = document.querySelector(".para");
    para.innerHTML=`Your pressed <span class="green">${e.key}</span>`
    div.innerHTML= ` KeyCode => ${e.keyCode}`
    div.classList.add("number")
    body.appendChild(div);
    audio.play();
    // audio.duration("0.1s")

    changeBackgroundColor();
    // let r = Math.floor(Math.random()*255);
    // let g = Math.floor(Math.random()*255);
    // let b = Math.floor(Math.random()*255);
    // let color =`rgb(${r},${g},${b})`
    // // console.log(color);
    // // body.style.backgroundColor = color;
    // body.style.background = `linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)`;
   
})


function changeBackgroundColor() {
    const randomColor = getRandomColor();
    div.style.background = `linear-gradient(135deg, ${randomColor}, #00cfdf)`;
   body.style.background = `linear-gradient(45deg, ${randomColor}, #3498db)`;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}