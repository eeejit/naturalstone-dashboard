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
                label: 'Avg Price (£/m²)',
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

// Create pie/doughnut chart
function createPieChart(ctx, labels, data, colors, title) {
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#1a1a2e'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { padding: 15, usePointStyle: true }
                },
                title: { display: !!title, text: title }
            }
        }
    });
}

// Populate overview price comparison table (by category, not product)
function populateOverviewComparison() {
    const tbody = document.getElementById('overviewComparisonTable');
    if (!tbody || !dashboardData.overview.priceComparison) return;

    tbody.innerHTML = dashboardData.overview.priceComparison.map(c => {
        return '<tr>' +
            '<td><strong>' + c.category + '</strong></td>' +
            '<td colspan="2" class="our-price">' + c.ourRange + '</td>' +
            '<td>' + c.competitorLow + '</td>' +
            '<td>' + c.competitorHigh + '</td>' +
            '<td colspan="2" class="sales-angle">' + c.ourPosition + '</td>' +
        '</tr>';
    }).join('');
}

// Populate marble products tables (separate our products from competitors)
function populateMarbleComparison() {
    const tbody = document.getElementById('marbleComparisonTable');
    if (!tbody) return;

    // Show our products first
    let html = '<tr class="section-header"><td colspan="5"><strong>Our Marble Products</strong></td></tr>';
    
    if (dashboardData.marble.ourProducts) {
        html += dashboardData.marble.ourProducts.map(p => {
            return '<tr class="highlight">' +
                '<td><strong>' + p.name + '</strong></td>' +
                '<td class="price our-price">£' + p.price.toFixed(2) + '</td>' +
                '<td colspan="3">Natural Stone Online</td>' +
            '</tr>';
        }).join('');
    }

    // Then competitor products
    html += '<tr class="section-header"><td colspan="5"><strong>Competitor Marble Products</strong></td></tr>';
    
    if (dashboardData.marble.competitorProducts) {
        html += dashboardData.marble.competitorProducts.map(p => {
            return '<tr>' +
                '<td>' + p.name + '</td>' +
                '<td class="price">£' + p.price.toFixed(2) + '</td>' +
                '<td colspan="3">' + p.competitor + '</td>' +
            '</tr>';
        }).join('');
    }

    tbody.innerHTML = html;
}

// Populate limestone products tables
function populateLimestoneComparison() {
    const tbody = document.getElementById('limestoneComparisonTable');
    if (!tbody) return;

    let html = '<tr class="section-header"><td colspan="5"><strong>Our Limestone Products</strong></td></tr>';
    
    if (dashboardData.limestone.ourProducts) {
        html += dashboardData.limestone.ourProducts.map(p => {
            return '<tr class="highlight">' +
                '<td><strong>' + p.name + '</strong></td>' +
                '<td class="price our-price">£' + p.price.toFixed(2) + '</td>' +
                '<td colspan="3">Natural Stone Online</td>' +
            '</tr>';
        }).join('');
    }

    html += '<tr class="section-header"><td colspan="5"><strong>Competitor Limestone Products</strong></td></tr>';
    
    if (dashboardData.limestone.competitorProducts) {
        html += dashboardData.limestone.competitorProducts.map(p => {
            return '<tr>' +
                '<td>' + p.name + '</td>' +
                '<td class="price">£' + p.price.toFixed(2) + '</td>' +
                '<td colspan="3">' + p.competitor + '</td>' +
            '</tr>';
        }).join('');
    }

    tbody.innerHTML = html;
}

// Populate travertine table (competitor products only - we don't stock)
function populateTravertineTable() {
    const tbody = document.getElementById('travertineTable');
    if (!tbody) return;

    tbody.innerHTML = dashboardData.travertine.products.map(p => {
        const posClass = p.position === 'Budget' ? 'budget' : (p.position === 'Premium' ? 'premium' : 'mid');
        return '<tr>' +
            '<td>' + p.competitor + '</td>' +
            '<td>' + p.name + '</td>' +
            '<td class="price">£' + p.price.toFixed(2) + '</td>' +
            '<td><span class="position-tag ' + posClass + '">' + p.position + '</span></td>' +
        '</tr>';
    }).join('');
}

// Initialize all charts
function initCharts() {
    createBarChart(
        document.getElementById('overviewChart'),
        dashboardData.overview.labels,
        dashboardData.overview.prices,
        dashboardData.overview.colors
    );

    createPieChart(
        document.getElementById('pieChart'),
        dashboardData.pieChart.labels,
        dashboardData.pieChart.data,
        dashboardData.pieChart.colors,
        'Market Segments'
    );

    createBarChart(
        document.getElementById('marbleChart'),
        dashboardData.marble.labels,
        dashboardData.marble.prices,
        dashboardData.marble.colors
    );

    createPieChart(
        document.getElementById('marblePieChart'),
        dashboardData.marble.pieData.labels,
        dashboardData.marble.pieData.data,
        dashboardData.marble.colors,
        'Products by Supplier'
    );

    createBarChart(
        document.getElementById('travertineChart'),
        dashboardData.travertine.labels,
        dashboardData.travertine.prices,
        dashboardData.travertine.colors
    );

    createPieChart(
        document.getElementById('travertinePieChart'),
        dashboardData.travertine.pieData.labels,
        dashboardData.travertine.pieData.data,
        dashboardData.travertine.colors,
        'Products by Supplier'
    );

    createBarChart(
        document.getElementById('limestoneChart'),
        dashboardData.limestone.labels,
        dashboardData.limestone.prices,
        dashboardData.limestone.colors
    );

    createPieChart(
        document.getElementById('limestonePieChart'),
        dashboardData.limestone.pieData.labels,
        dashboardData.limestone.pieData.data,
        dashboardData.limestone.colors,
        'Products by Supplier'
    );
}

// Initialize tables
function initTables() {
    populateOverviewComparison();
    populateMarbleComparison();
    populateLimestoneComparison();
    populateTravertineTable();
}

// Run on load
initCharts();
initTables();
