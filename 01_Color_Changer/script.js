const btn = document.querySelectorAll(".buttons")
const bod = document.querySelector("body")


btn.forEach(function(btn){
    console.log(btn);
    btn.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        
        bod.style.backgroundColor = e.target.id;


        // if (e.target.id == 'grey') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'black') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'green') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'blue') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'red') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'yellow') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'orange') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'purple') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'pink') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'brown') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'white') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'cyan') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'magenta') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'lime') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'maroon') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'navy') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'olive') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'teal') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'violet') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'indigo') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'gold') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'silver') {
        //     bod.style.backgroundColor = e.target.id;
        // } else if (e.target.id == 'bronze') {
        //     bod.style.backgroundColor = e.target.id;
        // }
    })
})