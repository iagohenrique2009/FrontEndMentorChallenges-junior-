// chart

var xvalues = ["mon","tue","wed","thu","fri","sat","sun"];
var yvalues = [17.45,34.91,52.36,31.07,23.39,43.28,25.48];
var radius =49;

var barcolors = ["hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(186, 34%, 60%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"];

new Chart("myChart", {

  

    type: "bar",

    data: {
        
        labels: xvalues,
        datasets: [{

            backgroundColor: barcolors,
            data:yvalues,
            borderRadius:5,
            borderSkipped:false,
            fontSize:1

        }],
    },
options:{
    scales:{
        xAxes:{
            grid:{
                display:false,
                drawBorder:false
            },
          
        },
        y:{
            grid:{
                display:false,
                drawBorder:false,
            },
            ticks:{
                display:false, 
            }
        }
        
    },
    plugins:{
        legend:{
            display:false
        },
        tooltip:{
            title:false,
            callbacks: {
                
                label: function (context) {
                  let label = context.dataset.label || '';
      
                  if (context.parsed.y !== null) {

                    label += new Intl.NumberFormat('en-US', {

                      style: 'currency',
                      currency: 'USD'

                    }).format(context.parsed.y);
                  }
                  return label;
                }
              }
        }
    },
    
    onHover: (event, chartElement) =>{
        event.native.target.style.cursor =chartElement[0] ? "pointer" : "default";
    },

}
  
  
    
})

Chart.defaults.font.size = 16;

