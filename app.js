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
                    labels: {
                        padding: 15,
                        usePointStyle: true
                    }
                },
                title: {
                    display: !!title,
                    text: title
                }
            }
        }
    });
}

// Populate overview comparison table
function populateOverviewComparison() {
    const tbody = document.getElementById('overviewComparisonTable');
    if (!tbody) return;

    tbody.innerHTML = dashboardData.overview.comparisons.map(c => {
        const diff = c.ourPrice - c.theirPrice;
        const diffClass = diff < 0 ? 'price-win' : 'price-lose';
        const diffText = diff < 0
            ? '<span class="' + diffClass + '">£' + Math.abs(diff).toFixed(2) + ' cheaper</span>'
            : '<span class="' + diffClass + '">£' + diff.toFixed(2) + ' more</span>';

        return '<tr>' +
            '<td><strong>' + c.category + '</strong></td>' +
            '<td>' + c.ourProduct + '</td>' +
            '<td class="price our-price">£' + c.ourPrice.toFixed(2) + '</td>' +
            '<td>' + c.theirProduct + '<br><small class="competitor-name">' + c.competitor + '</small></td>' +
            '<td class="price">£' + c.theirPrice.toFixed(2) + '</td>' +
            '<td>' + diffText + '</td>' +
            '<td class="sales-angle">' + c.salesAngle + '</td>' +
        '</tr>';
    }).join('');
}

// Populate marble comparison table
function populateMarbleComparison() {
    const tbody = document.getElementById('marbleComparisonTable');
    if (!tbody) return;

    tbody.innerHTML = dashboardData.marble.comparisons.map(c => {
        const isWin = c.diff.includes('less') || c.diff.includes('-');
        const diffClass = isWin ? 'price-win' : 'price-lose';

        return '<tr>' +
            '<td><strong>' + c.ourProduct + '</strong></td>' +
            '<td class="price our-price">£' + c.ourPrice.toFixed(2) + '</td>' +
            '<td>' + c.theirProduct + '</td>' +
            '<td class="price">£' + c.theirPrice.toFixed(2) + '</td>' +
            '<td class="' + diffClass + '">' + c.diff + '</td>' +
        '</tr>';
    }).join('');
}

// Populate limestone comparison table
function populateLimestoneComparison() {
    const tbody = document.getElementById('limestoneComparisonTable');
    if (!tbody) return;

    tbody.innerHTML = dashboardData.limestone.comparisons.map(c => {
        const isWin = c.diff.includes('less') || c.diff.includes('-');
        const diffClass = isWin ? 'price-win' : (c.diff.includes('Same') ? '' : 'price-lose');

        return '<tr>' +
            '<td><strong>' + c.ourProduct + '</strong></td>' +
            '<td class="price our-price">£' + c.ourPrice.toFixed(2) + '</td>' +
            '<td>' + c.theirProduct + '</td>' +
            '<td class="price">£' + c.theirPrice.toFixed(2) + '</td>' +
            '<td class="' + diffClass + '">' + c.diff + '</td>' +
        '</tr>';
    }).join('');
}

// Populate travertine table (competitor products only)
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
