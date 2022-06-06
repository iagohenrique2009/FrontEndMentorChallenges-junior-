let bill = document.querySelector("#bill");
let npeople = document.getElementById("npeople");
let errornum = document.getElementById("zero");


let amount = document.getElementById("amount");
let totalbill = document.getElementById("totalbill");

let percentagebt = document.querySelectorAll(".btnporc");
let custom = document.getElementById("custom");


let resetbtn = document.getElementById("resetbtn");

//st values
let billValue =0;
let nvalue =1;
let customValue=0;
let tbill =0;
let tipVal =0;

//get bill vl
bill.addEventListener("input", () => {

    billValue= bill.value;


    fbill(billValue);
    tipPersonCustom();

    resetstyle();

    
})

//get num people
npeople.addEventListener("input", ()=>{

    nvalue =npeople.value;


    resetstyle();
    

    if(npeople.value == 0 )


    {
        npeople.style.borderColor = "red";
        errornum.style.visibility = "visible";
      
    }

    else

    {
        errornum.style.visibility = "hidden";
        npeople.style.borderColor = "hsl(172, 67%, 45%)";
        fbill(nvalue);
        tipPersonCustom();
        
    }
  
})

//get pect from btn
percentagebt.forEach(button =>{

    button.addEventListener("click",() => {

        
        
        tipVal = button.innerHTML.replace("%","");
        custom.value ="";
 
        console.log(tipVal);

        tipPersonCustom();
        fbill();
        resetstyle();
        

    })

} )

//get pect from mcustom inout
custom.addEventListener("input", ()=> {

     tipVal = custom.value;
    

    tipPersonCustom();
    fbill();
    resetstyle();

})

//calc the total bll
function fbill(){

        if( (billValue ==0) || (nvalue ==0)){

            totalbill.innerHTML="$0.00"
        }

        else if (custom!="") {

            totalbill.innerHTML ="$"+  (((billValue*(tipVal/100))/nvalue) +(billValue/nvalue)).toFixed(2);
        
        }

}
//calc tip/person
function tipPersonCustom(){

    if((billValue==0) || (nvalue==0)){
            amount.innerHTML ="$0.00"
    }

    else if(custom !=""){
        amount.innerHTML = "$"+ ((billValue*(tipVal/100))/nvalue).toFixed(2);
    }

}
//reset ever val
function reset(){

    bill.value="";
    npeople.value ="";
    custom.value ="";
    amount.innerHTML ="$0.00";
    totalbill.innerHTML ="$0.00";
    resetbtn.style.opacity ="0.3";
    resetbtn.style.cursor ="initial";
    resetbtn.classList.remove("btnreset");

}

//btn reset style activate
function resetstyle(){

    resetbtn.style.opacity ="1";
    resetbtn.style.cursor = "pointer";
           

}

