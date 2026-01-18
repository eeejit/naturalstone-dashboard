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

// Create doughnut/pie chart
function createPieChart(ctx, labels, data, colors) {
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { padding: 15, usePointStyle: true }
                }
            }
        }
    });
}

// Create radar chart for SEO scores
function createRadarChart(ctx, labels, data, colors) {
    return new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'SEO Score',
                data: data,
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 2,
                pointBackgroundColor: colors
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { stepSize: 20 },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    angleLines: { color: 'rgba(255,255,255,0.1)' }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// Initialize charts
const overviewCtx = document.getElementById('overviewChart');
if (overviewCtx) {
    createBarChart(overviewCtx, dashboardData.overview.labels, dashboardData.overview.prices, dashboardData.overview.colors);
}

const pieCtx = document.getElementById('pieChart');
if (pieCtx) {
    createPieChart(pieCtx, dashboardData.pieChart.labels, dashboardData.pieChart.data, dashboardData.pieChart.colors);
}

const marbleCtx = document.getElementById('marbleChart');
if (marbleCtx) {
    createBarChart(marbleCtx, dashboardData.marble.labels, dashboardData.marble.prices, dashboardData.marble.colors);
}

const marblePieCtx = document.getElementById('marblePieChart');
if (marblePieCtx) {
    createPieChart(marblePieCtx, dashboardData.marble.pieData.labels, dashboardData.marble.pieData.data, dashboardData.marble.colors);
}

const travertineCtx = document.getElementById('travertineChart');
if (travertineCtx) {
    createBarChart(travertineCtx, dashboardData.travertine.labels, dashboardData.travertine.prices, dashboardData.travertine.colors);
}

const travertinePieCtx = document.getElementById('travertinePieChart');
if (travertinePieCtx) {
    createPieChart(travertinePieCtx, dashboardData.travertine.pieData.labels, dashboardData.travertine.pieData.data, dashboardData.travertine.colors);
}

const limestoneCtx = document.getElementById('limestoneChart');
if (limestoneCtx) {
    createBarChart(limestoneCtx, dashboardData.limestone.labels, dashboardData.limestone.prices, dashboardData.limestone.colors);
}

const limestonePieCtx = document.getElementById('limestonePieChart');
if (limestonePieCtx) {
    createPieChart(limestonePieCtx, dashboardData.limestone.pieData.labels, dashboardData.limestone.pieData.data, dashboardData.limestone.colors);
}

// SEO Charts
const seoScoreCtx = document.getElementById('seoScoreChart');
if (seoScoreCtx && dashboardData.seo) {
    createRadarChart(seoScoreCtx, dashboardData.seo.scores.labels, dashboardData.seo.scores.data, dashboardData.seo.scores.colors);
}

const seoIssuesCtx = document.getElementById('seoIssuesChart');
if (seoIssuesCtx && dashboardData.seo) {
    createPieChart(seoIssuesCtx, dashboardData.seo.issues.labels, dashboardData.seo.issues.data, dashboardData.seo.issues.colors);
}

// Populate overview comparison table
function populateOverviewTable() {
    const tbody = document.getElementById('overviewComparisonTable');
    if (!tbody || !dashboardData.overview.priceComparison) return;
    
    tbody.innerHTML = dashboardData.overview.priceComparison.map(row => {
        return '<tr>' +
            '<td>' + row.category + '</td>' +
            '<td class="price our-price">' + row.ourRange + '</td>' +
            '<td class="price">' + row.competitorLow + '</td>' +
            '<td class="price">' + row.competitorHigh + '</td>' +
            '<td>' + row.ourPosition + '</td>' +
        '</tr>';
    }).join('');
}

// Populate marble comparison table
function populateMarbleComparison() {
    const tbody = document.getElementById('marbleComparisonTable');
    if (!tbody) return;

    let html = '<tr class="section-header"><td colspan="5"><strong>Our Marble Products</strong></td></tr>';
    
    if (dashboardData.marble.ourProducts) {
        html += dashboardData.marble.ourProducts.map(p => {
            return '<tr class="highlight">' +
                '<td><strong>' + p.name + '</strong></td>' +
                '<td class="price our-price">£' + p.price.toFixed(2) + '</td>' +
                '<td>Natural Stone Online</td>' +
                '<td>Various</td>' +
                '<td>Various</td>' +
            '</tr>';
        }).join('');
    }

    html += '<tr class="section-header"><td colspan="5"><strong>Competitor Marble Products</strong></td></tr>';
    
    if (dashboardData.marble.competitorProducts) {
        html += dashboardData.marble.competitorProducts.map(p => {
            return '<tr>' +
                '<td>' + p.name + '</td>' +
                '<td class="price">£' + p.price.toFixed(2) + '</td>' +
                '<td>' + p.competitor + '</td>' +
                '<td>Various</td>' +
                '<td>Various</td>' +
            '</tr>';
        }).join('');
    }
    
    tbody.innerHTML = html;
}

// Populate travertine comparison table
function populateTravertineComparison() {
    const tbody = document.getElementById('travertineComparisonTable');
    if (!tbody || !dashboardData.travertine.products) return;
    
    tbody.innerHTML = dashboardData.travertine.products.map(p => {
        return '<tr>' +
            '<td>' + p.name + '</td>' +
            '<td class="price">£' + p.price.toFixed(2) + '</td>' +
            '<td>' + p.competitor + '</td>' +
            '<td>Various</td>' +
            '<td>' + p.position + '</td>' +
        '</tr>';
    }).join('');
}

// Populate limestone comparison table
function populateLimestoneComparison() {
    const tbody = document.getElementById('limestoneComparisonTable');
    if (!tbody) return;

    let html = '<tr class="section-header"><td colspan="5"><strong>Our Limestone Products</strong></td></tr>';
    
    if (dashboardData.limestone.ourProducts) {
        html += dashboardData.limestone.ourProducts.map(p => {
            return '<tr class="highlight">' +
                '<td><strong>' + p.name + '</strong></td>' +
                '<td class="price our-price">£' + p.price.toFixed(2) + '</td>' +
                '<td>Natural Stone Online</td>' +
                '<td>Various</td>' +
                '<td>Various</td>' +
            '</tr>';
        }).join('');
    }

    html += '<tr class="section-header"><td colspan="5"><strong>Competitor Limestone Products</strong></td></tr>';
    
    if (dashboardData.limestone.competitorProducts) {
        html += dashboardData.limestone.competitorProducts.map(p => {
            return '<tr>' +
                '<td>' + p.name + '</td>' +
                '<td class="price">£' + p.price.toFixed(2) + '</td>' +
                '<td>' + p.competitor + '</td>' +
                '<td>Various</td>' +
                '<td>Various</td>' +
            '</tr>';
        }).join('');
    }
    
    tbody.innerHTML = html;
}

// Populate SEO Technical Table
function populateSeoTechnicalTable() {
    const tbody = document.getElementById('seoTechnicalTable');
    if (!tbody || !dashboardData.seo || !dashboardData.seo.technical) return;
    
    tbody.innerHTML = dashboardData.seo.technical.map(row => {
        const statusClass = row.status === 'Good' ? 'status-good' : (row.status === 'Warning' ? 'status-warning' : 'status-error');
        return '<tr>' +
            '<td>' + row.element + '</td>' +
            '<td><span class="status-badge ' + statusClass + '">' + row.status + '</span></td>' +
            '<td>' + row.current + '</td>' +
            '<td>' + row.recommendation + '</td>' +
        '</tr>';
    }).join('');
}

// Populate SEO On-Page Table
function populateSeoOnPageTable() {
    const tbody = document.getElementById('seoOnPageTable');
    if (!tbody || !dashboardData.seo || !dashboardData.seo.onPage) return;
    
    tbody.innerHTML = dashboardData.seo.onPage.map(row => {
        const impactClass = row.impact === 'Critical' ? 'impact-critical' : (row.impact === 'High' ? 'impact-high' : 'impact-medium');
        return '<tr>' +
            '<td>' + row.pageType + '</td>' +
            '<td>' + row.issue + '</td>' +
            '<td><span class="impact-badge ' + impactClass + '">' + row.impact + '</span></td>' +
            '<td>' + row.fix + '</td>' +
        '</tr>';
    }).join('');
}

// Populate SEO Content Table
function populateSeoContentTable() {
    const tbody = document.getElementById('seoContentTable');
    if (!tbody || !dashboardData.seo || !dashboardData.seo.content) return;
    
    tbody.innerHTML = dashboardData.seo.content.map(row => {
        const priorityClass = row.priority === 'High' ? 'priority-high' : (row.priority === 'Medium' ? 'priority-medium' : 'priority-low');
        return '<tr>' +
            '<td>' + row.issue + '</td>' +
            '<td>' + row.location + '</td>' +
            '<td><span class="priority-badge ' + priorityClass + '">' + row.priority + '</span></td>' +
            '<td>' + row.action + '</td>' +
        '</tr>';
    }).join('');
}

// Initialize all tables
populateOverviewTable();
populateMarbleComparison();
populateTravertineComparison();
populateLimestoneComparison();
populateSeoTechnicalTable();
populateSeoOnPageTable();
populateSeoContentTable();
