let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

let actual = document.querySelectorAll(".actual");

let last = document.querySelectorAll(".last");

//function get hour from data.json
function dailyhour(){

    fetch("data.json")

        .then(response => response.json())
        
        .then(data => {

            actual.forEach((e, i) => {
                 actual[i].innerHTML = data[i].timeframes.daily.current + "hrs";
                 last[i].innerHTML = "Yesterday - " + data[i].timeframes.daily.previous +"hrs";
 
            })

        })
        
};



// daily function
daily.addEventListener("click", () => {

dailyhour();

//day active status
daily.style.color = "#fff";
daily.style.opacity = "1";

// remove prev active status
weekly.style.color = "hsl(236, 100%, 87%)";
weekly.style.opacity = "0.5";

// remove prev active status
monthly.style.color = "hsl(236, 100%, 87%)";
monthly.style.opacity = "0.5";

});

//week function

function weeklyhour(){

    fetch("data.json")
    
        .then(response => response.json())
        .then(data => {

            actual.forEach((f, i) =>
             {

                actual[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
                last[i].innerHTML = "Last Week - " + data[i].timeframes.weekly.previous + "hrs";

            })
            
        })

};

//weekly btn function
weekly.addEventListener("click", () =>{

//active status
weekly.style.color = "#fff";
weekly.style.opacity = "1";

//remove prev active status
daily.style.color = "hsl(236, 100%, 87%)";
daily.style.opacity = "0.5";

// remove prev active status
monthly.style.color = "hsl(236, 100%, 87%)";
monthly.style.opacity = "0.5";

weeklyhour();

});

//month function

function monthlyhour(){

    fetch("data.json")
    
        .then(response => response.json())
        .then(data =>{
            actual.forEach((g, i) => {

                actual[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
                last[i].innerHTML = "Last Month - " + data[i].timeframes.monthly.previous + "hrs";

            })


        })


};


//function month btn
monthly.addEventListener("click", () => {

//active status
monthly.style.color = "#fff";
monthly.style.opacity = "1";

//remove prev active status
daily.style.color = "hsl(236, 100%, 87%)";
daily.style.opacity = "0.5";

// remove prev active status
weekly.style.color = "hsl(236, 100%, 87%)";
weekly.style.opacity = "0.5";

    monthlyhour();

});