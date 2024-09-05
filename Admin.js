
  // Sidebar Toggle Function
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-responsive');
  }

  // Close sidebar when clicking outside
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
      sidebar.classList.remove('sidebar-responsive');
    }
  });

  // Bar Chart
  const xValues = ["Italy", "France", "Spain", "USA", "Argentina", "Pakistan", "London", "Oman"];
  const yValues = [55, 49, 44, 24, 15, 30, 55, 30];
  const barColors = ["#5932EA", "#5932EA", "#5932EA", "#5932EA", "#5932EA", "#5932EA", "#5932EA", "#5932EA"];

  new Chart("jobStatisticsChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 10
          }
        }
      },
      plugins: {
        tooltip: {
          enabled: true,
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.raw; // Show the exact value on hover
            }
          }
        }
      }
    }
  });

  // Doughnut Chart
  const ctx = document.getElementById('myDoughnutChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['IT', 'HR'],
      datasets: [{
        label: 'Department Distribution',
        data: [3, 1], // Adjust the data according to your employee distribution
        backgroundColor: ['#16C098', '#5932EA'],
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // Scroll Reveal 
  ScrollReveal().reveal('#first-item-list', {
    origin: 'left',
    distance: '100px',
    duration: 600,
    easing: 'ease-in-out',
    delay: 100
  });

  // Scroll Reveal 
  ScrollReveal().reveal('#first-item-list2', {
    origin: 'left',
   
    distance: '100px',
    duration: 800,
    easing: 'ease-in-out',
    delay: 100
  });
  // Scroll Reveal 
  ScrollReveal().reveal('#first-item-list3', {
   
    origin: 'left',
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 100
  });
  // Scroll Reveal 
  ScrollReveal().reveal('#first-item-list4', {
   
    origin: 'left',
    distance: '100px',
    duration: 1200,
    easing: 'ease-in-out',
    delay: 100
  });
  // Scroll Reveal 
  ScrollReveal().reveal('#first-item-list5', {
   
    origin: 'left',
    distance: '100px',
    duration: 1400,
    easing: 'ease-in-out',
    delay: 100
  });
  // Scroll Reveal 
  ScrollReveal().reveal('#first-item-list6', {
    origin: 'left',
   
    distance: '100px',
    duration: 1600,
    easing: 'ease-in-out',
    delay: 100
  });
  
  // Scroll Reveal 
  ScrollReveal().reveal('#first-item-list7', {
    origin: 'left',
   
    distance: '100px',
    duration: 1800,
    easing: 'ease-in-out',
    delay: 100
  });
  
  // Scroll Reveal 
  ScrollReveal().reveal('#first-item-list8', {
    origin: 'left',
   
    distance: '100px',
    duration: 2000,
    easing: 'ease-in-out',
    delay: 100
  });

  
  // Scroll Reveal 
  ScrollReveal().reveal('#card1', {
    origin: 'bottom',
   
    distance: '100px',
    duration: 600,
    easing: 'ease-in-out',
    delay: 100
  });
  
  // Scroll Reveal 
  ScrollReveal().reveal('#card2', {
    origin: 'bottom',
   
    distance: '100px',
    duration:800,
    easing: 'ease-in-out',
    delay: 100
  });
  
  // Scroll Reveal 
  ScrollReveal().reveal('#card3', {
    origin: 'bottom',
   
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 100
  });
  
  // Scroll Reveal 
  ScrollReveal().reveal('#card4', {
    origin: 'bottom',
   
    distance: '100px',
    duration: 1200,
    easing: 'ease-in-out',
    delay: 100
  });
  
  // Optional: Add any additional scroll event listeners if needed
  function scrollActive() {
    // Add your scroll event logic here if needed
  }
  window.addEventListener('scroll', scrollActive);
  const searchInput = document.getElementById('search');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();

      cards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
