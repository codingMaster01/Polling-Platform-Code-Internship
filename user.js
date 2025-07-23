let button1 = document.querySelector("#option_button1");
let button2 = document.querySelector("#option_button2");

let quesDiv1 = document.querySelector("#ques_div1");

button1.onclick = function(){
    button1.remove();
    button2.remove();

    let para = document.createElement("p");
    para.innerHTML = "Your response has been recorded!";
    quesDiv1.appendChild(para);
}

button2.onclick = function(){
    button2.remove();
    button1.remove();

    let para = document.createElement("p");
    para.innerHTML = "Your response has been recorded!";
    quesDiv1.appendChild(para);
}
