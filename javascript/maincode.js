function shopEase(event){
    alert("HI i am function");
    const decreaseValue = getShearedInnerText("decrease-value");
    const increaseValue = getShearedInnerText("increase-value");
    const firstDiv = document.getElementById("first-div").innerText;
    const historySection = document.getElementById("history-section");
    const historyContainer = document.getElementById("history-container");
    
    const btn = document.getElementById("shopeasen-btn");
    
    let substractionValue = decreaseValue - 1;
    setInnerTextValue("decrease-value", substractionValue);
    
    let additionValue = increaseValue + 1;
    setInnerTextValue("increase-value", additionValue);

   


    let time = new Date();
    let formatTime = time.toLocaleTimeString();

    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("allDiv");
    div.classList.add("mt-4");
    div.classList.add("mb-3");
    div.classList.add("bg-[#F4F7FF]");
    p.classList.add("px-3");
    p.classList.add("py-3");
    p.classList.add("text-sm");
    p.classList.add("font-semibold");

    p.innerText = `
        You have Complete The Task ${firstDiv}  at ${formatTime} 
    `;
    div.appendChild(p);
    historyContainer.appendChild(div);

    // btn.setAttribute("disabled", "true")
    btn.disabled = true;
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";

    
}
   
    
function cloudSync(event){




    alert("HI i am function");
    const decreaseValue = getShearedInnerText("decrease-value");
    const increaseValue = getShearedInnerText("increase-value");
    const firstDiv = document.getElementById("second-div").innerText;
    const historySection = document.getElementById("history-section");
    const btn = document.getElementById("cloudsync-btn");
    let substractionValue = decreaseValue - 1;
    setInnerTextValue("decrease-value", substractionValue);

    let additionValue = increaseValue + 1;
    setInnerTextValue("increase-value", additionValue);

    let time = new Date();
    let formatTime = time.toLocaleTimeString();

    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("allDiv");
    div.classList.add("mt-4");
    div.classList.add("mb-3");
    div.classList.add("bg-[#F4F7FF]");
    div.classList.add("px-3");
    div.classList.add("py-2");
    p.classList.add("text-sm");
    p.classList.add("font-semibold");

    p.innerText = `
        You have Complete The Task ${firstDiv}  at ${formatTime} 
    `;
    historySection.appendChild(div);
    div.appendChild(p);

    btn.disabled = true;
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";

}
   




function swiftPay(event){
    alert("HI i am function");
    const decreaseValue = getShearedInnerText("decrease-value");
    const increaseValue = getShearedInnerText("increase-value");
    const firstDiv = document.getElementById("third-div").innerText;
    const historySection = document.getElementById("history-section");
    const btn = document.getElementById("swiftpay-btn");
    let substractionValue = decreaseValue - 1;
    setInnerTextValue("decrease-value", substractionValue);

    let additionValue = increaseValue + 1;
    setInnerTextValue("increase-value", additionValue);

    let time = new Date();
    let formatTime = time.toLocaleTimeString();

    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("allDiv");
    div.classList.add("mt-4");
    div.classList.add("mb-3");
    div.classList.add("bg-[#F4F7FF]");
    div.classList.add("px-3");
    div.classList.add("py-2");
    p.classList.add("text-sm");
    p.classList.add("font-semibold");

    p.innerText = `
        You have Complete The Task ${firstDiv}  at ${formatTime} 
    `;
    historySection.appendChild(div);
    div.appendChild(p);
    btn.disabled = true;
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";



}

function meta(event){
    alert("HI i am function");
    const decreaseValue = getShearedInnerText("decrease-value");
    const increaseValue = getShearedInnerText("increase-value");
    const firstDiv = document.getElementById("fourth-div").innerText;
    const historySection = document.getElementById("history-section");
    const btn = document.getElementById("meta-btn");
    let substractionValue = decreaseValue - 1;
    setInnerTextValue("decrease-value", substractionValue);

    let additionValue = increaseValue + 1;
    setInnerTextValue("increase-value", additionValue);

    let time = new Date();
    let formatTime = time.toLocaleTimeString();

    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("allDiv");
    div.classList.add("mt-4");
    div.classList.add("mb-3");
    div.classList.add("bg-[#F4F7FF]");
    div.classList.add("px-3");
    div.classList.add("py-2");
    p.classList.add("text-sm");
    p.classList.add("font-semibold");

    p.innerText = `
        You have Complete The Task ${firstDiv}  at ${formatTime} 
    `;
    historySection.appendChild(div);
    div.appendChild(p);

    btn.disabled = true;
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";



}

function googleLlc(event){
    alert("HI i am function");
    const decreaseValue = getShearedInnerText("decrease-value");
    const increaseValue = getShearedInnerText("increase-value");
    const firstDiv = document.getElementById("fifth-div").innerText;
    const historySection = document.getElementById("history-section");
    const btn = document.getElementById("googlellc-btn");
    let substractionValue = decreaseValue - 1;
    setInnerTextValue("decrease-value", substractionValue);

    let additionValue = increaseValue + 1;
    setInnerTextValue("increase-value", additionValue);

    let time = new Date();
    let formatTime = time.toLocaleTimeString();

    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("allDiv");
    div.classList.add("mt-4");
    div.classList.add("mb-3");
    div.classList.add("bg-[#F4F7FF]");
    div.classList.add("px-3");
    div.classList.add("py-2");
    p.classList.add("text-sm");
    p.classList.add("font-semibold");

    p.innerText = `
        You have Complete The Task ${firstDiv}  at ${formatTime} 
    `;
    historySection.appendChild(div);
    div.appendChild(p);

    btn.disabled = true;
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";



}

function glassDoor(event){
    alert("HI i am function");
    const decreaseValue = getShearedInnerText("decrease-value");
    const increaseValue = getShearedInnerText("increase-value");
    const firstDiv = document.getElementById("six-div").innerText;
    const historySection = document.getElementById("history-section");
    const btn = document.getElementById("glassdoar-btn");
    let substractionValue = decreaseValue - 1;
    setInnerTextValue("decrease-value", substractionValue);

    let additionValue = increaseValue + 1;
    setInnerTextValue("increase-value", additionValue);

    let time = new Date();
    let formatTime = time.toLocaleTimeString();

    const div = document.createElement("div");
    const p = document.createElement("p");
    div.classList.add("allDiv");
    div.classList.add("mt-4");
    div.classList.add("mb-3");
    div.classList.add("bg-[#F4F7FF]");
    div.classList.add("px-3");
    div.classList.add("py-2");
    p.classList.add("text-sm");
    p.classList.add("font-semibold");

    p.innerText = `
        You have Complete The Task ${firstDiv}  at ${formatTime} 
    `;
    historySection.appendChild(div);
    div.appendChild(p);

    btn.disabled = true;
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";



}

