document.addEventListener('DOMContentLoaded', () =>{
    /*---------------VARIABLES---------------*/  
    const alertBanner = document.querySelector('#alert');
    const trafficCanvas = document.querySelector('#traffic-chart');
    const dailyCanvas = document.querySelector('#daily-chart');
    const mobileCanvas = document.querySelector('#mobile-chart');
    const userField = document.querySelector('#userField');
    const messageField = document.querySelector('#messageField');
    const send = document.querySelector('#send');
    const badge = document.querySelector('.badge'); 

    /*---------------ALERT---------------*/
    alertBanner.innerHTML = `<div class="alert-banner">
    <p>Alert You have 1 task to complete</p><strong><p class="alert-banner-close">X</p>
    </div>`; 

  /*---------------DATA STRUCTURES---------------*/ 
  /*---------------TRAFFIC LINE GRAPH---------------*/
      let trafficData = {     
      labels: ["0-5", "6-10", "11-14", "15-20", "21-25", "26-30", "31-32", "33-34", "35-36", "37-38", "39-40"],     
      datasets: [
        {
          data: [650, 1000, 1000, 950, 900, 1450, 1500, 1580, 1700, 1710, 1350],       
          backgroundColor: 'rgba(116, 119, 191, .3)',       
          borderWidth: 1,     
        }
      ]   
    }; 
    
    let trafficOptions = {
      aspectRatio: 2.5,
      animation: {
        duration: 0
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      }
    }; 
    
    let trafficChart = new Chart (trafficCanvas, {
      type: 'line',
      data: trafficData,
      options: trafficOptions
    }); 
    
/*---------------TRAFFIC BAR CHART---------------*/
    const dailyData =  {     
      labels: ["S", "M", "T", "W", "T", "F", "S"],     
      datasets: [{
          label: '# of Hits',         
          data: [55, 185, 196, 175, 182, 165, 75],         
          backgroundColor: '#42f542',         
          borderWidth: 1     
        }
      ]   
    }; 

    const dailyOptions = {     
      scales: {      
        yAxes: [{
            ticks: {
              beginAtZero:true
            }       
          }]     
      },     
      legend : {
        display: false
      }
    }
    
     let dailyChart = new Chart(dailyCanvas, {     
       type: 'bar',     
       data: dailyData,     
       options: dailyOptions
});

/*---------------MOBILE USERS---------------*/
const mobileData = {     
 labels: ["Desktop", "Tablet", "Phones"],     
 datasets: [{       
   label: '# of Users',       
   data: [1857, 1235, 896],       
   borderWidth: 0,       
   backgroundColor: ['#ebf70a', '#16c213', '#0a9cf7']     
 }]   
};

const mobileOptions = {     
  legend: {       
    position: 'right',       
    labels: {         
      boxWidth: 20,         
      fontStyle: 'bold'       
    }     
  }   
}

  let mobileChart = new Chart(mobileCanvas, {     
    type: 'doughnut',     
    data: mobileData,     
    options: mobileOptions   
  });
    
  /*---------------FUNCTIONS---------------*/   
    
    
  /*---------------EVENT LISTENERS---------------*/
  alertBanner.addEventListener('click', event =>{
      const close = event.target;
      const notification = document.querySelector('#notifications'); 
      if(close.className === 'alert-banner-close'){
         alertBanner.style.display = 'none';
         badge.style.display = 'none';
         }
    }); 
      /*------MESSAGING-----*/
  send.addEventListener('click', event => { 
    event.preventDefault(); 
      if(userField.id === '' && messageField.id ===''){
        alert('Please fill out the user field and message field'); 
      } else if(userField.value === ''){
        alert('Please fill out the user field'); 
      }else if(messageField.value === ''){
       alert('Please fill out the message field'); 
      } else{
        alert(`Message sent to ${userField.value}`)
    } 
  });     
     
    })