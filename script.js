const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    if (inputBox.value === '') {
        alert("Write something");
    } else {
        // create the element li and append with container child
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"; // u00d7 is code for cross symbol in javascript
        li.appendChild(span);
    }
    inputBox.value = ""; // list me add krne ke bad input box ko khali krne ke liye..
    // har br add pe click krega toh yeh function call hoga joh data save karega local storage me
    saveData();
});

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==="LI"){ // jab li pe click kare toh 
        e.target.classList.toggle("checked") // toggle cheak or non cheak dono me kmm karna chaiye ishliye
        saveData();
    }else if(e.target.tagName==="SPAN"){ // jab span pe click kare mtlv cross wale pe
        e.target.parentElement.remove(); // crose pe click krr de toh remove krr dega..
        saveData();
    }
},false);


// know we want to store the list data after refress also 
// we use local storage of browser

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
} 

// ab ek function likhenge jisse website refress kren ke bdd bhi data show hoga

function showData(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showData();











// document.querySelector('#btn').addEventListener('click',()=>{
//     alert("hey you clicked");
// })
