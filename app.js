// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById(btn.dataset.tab).classList.add('active');
      });
});

// Chart defaults
Chart.defaults.color = '#a0aec0';
Chart.defaults.borderColor = 'rgba(255,255,255,0.1)';

// Create bar chart
function createBarChart(ctx, labels, data, colors) {
      return new Chart(ctx, {
                type: 'bar',
                data: {
                              labels: labels,
                              datasets: [{
                                                label: 'Avg Price (GBP/m2)',
                                                data: data,
                                                backgroundColor: colors,
                                                borderRadius: 8
                              }]
                },
                options: {
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: { legend: { display: false } },
                              scales: {
                                                y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
                                                x: { grid: { display: false } }
                              }
                }
      });
}

// Populate product table
function populateTable(tableId, products) {
      const tbody = document.querySelector('#' + tableId + ' tbody');
      if (!tbody) return;
      tbody.innerHTML = products.map(p => {
                const isOurs = p.competitor === 'Natural Stone Online';
                return '<tr class="' + (isOurs ? 'our-price' : '') + '">' +
                              '<td>' + p.name + '</td>' +
                              '<td>' + p.competitor + '</td>' +
                              '<td class="price">GBP' + p.price.toFixed(2) + '/m2</td>' +
                          '</tr>';
      }).join('');
}

// Initialize charts
createBarChart(
      document.getElementById('overviewChart'),
      dashboardData.overview.labels,
      dashboardData.overview.prices,
      dashboardData.overview.colors
  );

createBarChart(
      document.getElementById('marbleChart'),
      dashboardData.marble.labels,
      dashboardData.marble.prices,
      dashboardData.marble.colors
  );

createBarChart(
      document.getElementById('travertineChart'),
      dashboardData.travertine.labels,
      dashboardData.travertine.prices,
      dashboardData.travertine.colors
  );

createBarChart(
      document.getElementById('limestoneChart'),
      dashboardData.limestone.labels,
      dashboardData.limestone.prices,
      dashboardData.limestone.colors
  );

// Populate tables
populateTable('marbleTable', dashboardData.marble.products);
populateTable('travertineTable', dashboardData.travertine.products);
populateTable('limestoneTable', dashboardData.limestone.products);
