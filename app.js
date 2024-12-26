const endDate = "29 December 2024 01:54:40 PM";
const p = document.querySelectorAll("p");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    // console.log(diff);
    if(diff < 0) return;

    p[0].innerText = Math.floor(diff / 3600 / 24);
    p[1].innerText = Math.floor(diff / 3600) % 24;
    p[2].innerText = Math.floor(diff / 60) % 60;
    p[3].innerText = Math.floor(diff) % 60;
    
}
clock();

setInterval(()=>{
    clock();
},1000);