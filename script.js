let body = document.getElementsByTagName("body")[0];
console.log(body);


// body.addEventListener('keypress', (e)=>{
//     console.log(e);

//     let para = document.querySelector(".para");
//     para.innerHTML=`Your pressed <span class="green">${e.key}</span>`
//     let num = document.querySelector(".number");
//     num.innerHTML= `${e.charCode}`
//     console.log(e.charCode);
//     console.log(e.key);
// })

let div = document.createElement("div");
body.addEventListener('keydown', (e)=>{
    console.log(e);

    let para = document.querySelector(".para");
    para.innerHTML=`Your pressed <span class="green">${e.key}</span>`
    div.innerHTML= `${e.keyCode}`
    div.classList.add("number","green")
    body.appendChild(div)

})