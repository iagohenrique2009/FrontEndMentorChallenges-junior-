function features(){
    document.getElementById("dropdownfeatures").classList.toggle("show");
    document.getElementById("btnfeature").classList.toggle("active");
}

window.onclick = function(event){
    if (!event.target.matches(".dropbtn")) {
        let dropdown = document.getElementsByClassName("dropdown-content");
        for(let i = 0; i <dropdown.length; i++){
            var open = dropdown[i];
            if(open.classList.contains("show")){

                open.classList.remove("show");
            }
        }
    }
}
function featurescompany(){
    document.getElementById("dropdownfeaturescompany").classList.toggle("show");
    document.getElementById("btncontent").classList.toggle("active");
    
}

window.onclick = function(event){
    if (!event.target.matches(".dropbtn")) {
        let dropdown = document.getElementsByClassName("dropdown-content");
        for(let i = 0; i <dropdown.length; i++){
            var open = dropdown[i];
            if(open.classList.contains("show")){
                open.classList.remove("show");
            }
        }
    }
}
function openSide(){
    document.getElementById("sidenav").style.width ="250px";

    document.body.style.backgroundColor ="rgba(0,0,0,0.4)";
    
}
function closeSide(){
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
function accordion(){
    var coll = document.getElementsByClassName("accordion");
    for (let i = 0; i< coll.length;i++ ){
        coll[i].addEventListener("click", function(){
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.display ==="block"){
                panel.style.display ="none";
            }
            else{
                panel.style.display ="block";
            }
            
        })
    }
}