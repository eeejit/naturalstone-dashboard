// Competitor pricing data with Natural Stone Online included
// NOTE: Product comparisons show prices within same category - NOT claiming products look similar
const dashboardData = {
    overview: {
        labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Topps Tiles', 'Travertine Store', 'Quorn Stone'],
        prices: [55, 39, 56, 96, 38, 50],
        colors: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(249, 115, 22, 0.8)',
            'rgba(239, 68, 68, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(20, 184, 166, 0.8)'
        ],
        // Price comparison by category - NOT product similarity
        priceComparison: [
            { category: 'Marble', ourRange: '£59-71', competitorLow: '£43 (Stone Deals)', competitorHigh: '£147 (Topps Tiles)', ourPosition: 'Mid-market value' },
            { category: 'Limestone', ourRange: '£33-53', competitorLow: '£37 (Mandarin Stone)', competitorHigh: '£53 (Quorn Stone)', ourPosition: 'Competitive across range' },
            { category: 'Travertine', ourRange: 'Not stocked', competitorLow: '£27 (Travertine Store)', competitorHigh: '£61 (Mandarin Stone)', ourPosition: 'Market opportunity' }
        ]
    },
    pieChart: {
        labels: ['Budget (< £40)', 'Mid-Range (£40-60)', 'Premium (£60-100)', 'Luxury (> £100)'],
        data: [2, 3, 4, 1],
        colors: ['rgba(34, 197, 94, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(239, 68, 68, 0.8)'],
        ourPosition: 'Mid-Range'
    },
    marble: {
        labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Topps Tiles', 'Authentic Stone'],
        prices: [65, 43.50, 80.41, 147.26, 58.70],
        colors: ['rgba(34, 197, 94, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(239, 68, 68, 0.8)', 'rgba(168, 85, 247, 0.8)'],
        ourProducts: [
            { name: 'Citadel Bianco Tumbled', price: 64 },
            { name: 'Citadel Bianco Polished', price: 59 },
            { name: 'Lilac Premium Honed', price: 71 },
            { name: 'Mezzanotte Honed', price: 68 },
            { name: 'Citadel Bianco Honed', price: 70 }
        ],
        competitorProducts: [
            { competitor: 'Stone Deals', name: 'Bianco Ibiza Polished', price: 43.50 },
            { competitor: 'Stone Deals', name: 'Carrara C Polished', price: 48.00 },
            { competitor: 'Topps Tiles', name: 'Marble Luxe Ivory', price: 147.26 },
            { competitor: 'Mandarin Stone', name: 'Bianco Carrara', price: 82.83 },
            { competitor: 'Authentic Stone', name: 'Crema Marfil First Choice', price: 58.70 }
        ],
        pieData: {
            labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Topps Tiles', 'Authentic Stone'],
            data: [5, 8, 6, 4, 5]
        }
    },
    travertine: {
        labels: ['Travertine Store', 'Stone Deals', 'Mandarin Stone', 'Quorn Stone'],
        prices: [32, 33.50, 52, 47],
        colors: ['rgba(168, 85, 247, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(20, 184, 166, 0.8)'],
        products: [
            { competitor: 'Travertine Store', name: 'Classic Light Tumbled', price: 27, position: 'Budget' },
            { competitor: 'Travertine Store', name: 'Ivory Filled Honed', price: 35, position: 'Mid' },
            { competitor: 'Stone Deals', name: 'Ivory Classic Tumbled', price: 32, position: 'Budget' },
            { competitor: 'Stone Deals', name: 'Noce Tumbled', price: 35, position: 'Mid' },
            { competitor: 'Mandarin Stone', name: 'Classico Unfilled', price: 43.33, position: 'Mid' },
            { competitor: 'Mandarin Stone', name: 'Platinum Tumbled', price: 61, position: 'Premium' },
            { competitor: 'Quorn Stone', name: 'Ivory Tumbled', price: 47, position: 'Mid' }
        ],
        pieData: {
            labels: ['Travertine Store', 'Stone Deals', 'Mandarin Stone', 'Quorn Stone'],
            data: [6, 4, 5, 3]
        }
    },
    limestone: {
        labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Quorn Stone'],
        prices: [43, 38.50, 45, 49],
        colors: ['rgba(34, 197, 94, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(20, 184, 166, 0.8)'],
        ourProducts: [
            { name: 'Garrowby Dijon Tumbled', price: 33 },
            { name: 'Malham Beige Tumbled', price: 39 },
            { name: 'Helmsley Grey Tumbled', price: 45 },
            { name: 'Malham Grey Tumbled', price: 53 },
            { name: 'Kirkby Beige Honed', price: 45 }
        ],
        competitorProducts: [
            { competitor: 'Stone Deals', name: 'Dijon Tumbled', price: 38.50 },
            { competitor: 'Stone Deals', name: 'Jerusalem Gold Honed', price: 45 },
            { competitor: 'Mandarin Stone', name: 'Neranjo Limestone', price: 36.60 },
            { competitor: 'Mandarin Stone', name: 'Jura Grey Honed', price: 53.33 },
            { competitor: 'Quorn Stone', name: 'Cotswold Limestone', price: 52.50 }
        ],
        pieData: {
            labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Quorn Stone'],
            data: [5, 6, 4, 4]
        }
    }
};
