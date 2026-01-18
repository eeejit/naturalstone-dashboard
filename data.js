// Competitor pricing data with Natural Stone Online included
const dashboardData = {
    overview: {
        labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Topps Tiles', 'Travertine Store', 'Quorn Stone'],
        prices: [55, 39, 56, 96, 30, 50],
        colors: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(249, 115, 22, 0.8)',
            'rgba(239, 68, 68, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(20, 184, 166, 0.8)'
        ],
        comparisons: [
            { category: 'Marble', ourProduct: 'Citadel Bianco Polished', ourPrice: 59, competitor: 'Topps Tiles', theirProduct: 'Marble Luxe Ivory', theirPrice: 147.26, salesAngle: 'Same look, 60% less - easy win' },
            { category: 'Marble', ourProduct: 'Lilac Premium Honed', ourPrice: 71, competitor: 'Mandarin Stone', theirProduct: 'Bianco Carrara', theirPrice: 82.83, salesAngle: 'Premium quality, better price' },
            { category: 'Limestone', ourProduct: 'Garrowby Dijon Tumbled', ourPrice: 33, competitor: 'Stone Deals', theirProduct: 'Dijon Tumbled', theirPrice: 38.50, salesAngle: 'We beat the budget leader!' },
            { category: 'Limestone', ourProduct: 'Malham Grey Tumbled', ourPrice: 53, competitor: 'Quorn Stone', theirProduct: 'Cotswold Limestone', theirPrice: 52.50, salesAngle: 'Similar price, better service' }
        ]
    },
    pieChart: {
        labels: ['Budget (< 40)', 'Mid-Range (40-60)', 'Premium (60-100)', 'Luxury (> 100)'],
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
            { name: 'Mezzanotte Honed', price: 60 },
            { name: 'Citadel Bianco Honed', price: 70 }
        ],
        comparisons: [
            { ourProduct: 'Citadel Bianco Polished', ourPrice: 59, theirProduct: 'Bianco Ibiza Polished (Stone Deals)', theirPrice: 43.50, diff: '+15.50 (36% more)' },
            { ourProduct: 'Citadel Bianco Polished', ourPrice: 59, theirProduct: 'Marble Luxe Ivory (Topps Tiles)', theirPrice: 147.26, diff: '-88.26 (60% less!)' },
            { ourProduct: 'Lilac Premium Honed', ourPrice: 71, theirProduct: 'Bianco Carrara (Mandarin Stone)', theirPrice: 82.83, diff: '-11.83 (14% less)' },
            { ourProduct: 'Mezzanotte Honed', ourPrice: 60, theirProduct: 'Crema Marfil First Choice (Authentic Stone)', theirPrice: 61.70, diff: '-1.70 (3% less)' },
            { ourProduct: 'Citadel Bianco Tumbled', ourPrice: 64, theirProduct: 'Botticino Classico (Authentic Stone)', theirPrice: 55.70, diff: '+8.30 (15% more)' }
        ],
        pieData: { labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Topps Tiles', 'Authentic Stone'], data: [5, 4, 2, 3, 2] }
    },
    travertine: {
        labels: ['Stone Deals', 'Mandarin Stone', 'Travertine Store', 'Quorn Stone'],
        prices: [33.50, 56.00, 30.00, 47.00],
        colors: ['rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(168, 85, 247, 0.8)', 'rgba(20, 184, 166, 0.8)'],
        products: [
            { competitor: 'Travertine Store', name: 'Light Tumbled Travertine', price: 27.00, position: 'Budget' },
            { competitor: 'Stone Deals', name: 'Classic Light Tumbled', price: 31.99, position: 'Budget' },
            { competitor: 'Travertine Store', name: 'Premium Select Travertine', price: 33.00, position: 'Budget' },
            { competitor: 'Stone Deals', name: 'Walnut Tumbled Travertine', price: 33.50, position: 'Mid' },
            { competitor: 'Stone Deals', name: 'Ivory Tumbled Travertine', price: 35.00, position: 'Mid' },
            { competitor: 'Quorn Stone', name: 'Classic Travertine Tiles', price: 47.00, position: 'Mid-Premium' },
            { competitor: 'Quorn Stone', name: 'Ivory Travertine Unfilled', price: 47.00, position: 'Mid-Premium' },
            { competitor: 'Mandarin Stone', name: 'Silver Grey Honed', price: 51.00, position: 'Premium' },
            { competitor: 'Mandarin Stone', name: 'Classic Cross Cut', price: 61.00, position: 'Premium' }
        ],
        pieData: { labels: ['Stone Deals', 'Mandarin Stone', 'Travertine Store', 'Quorn Stone'], data: [3, 2, 2, 2] },
        note: 'Natural Stone Online does not currently stock travertine tiles'
    },
    limestone: {
        labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Quorn Stone'],
        prices: [45, 40.99, 36.60, 50.27],
        colors: ['rgba(34, 197, 94, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(20, 184, 166, 0.8)'],
        ourProducts: [
            { name: 'Garrowby Premium Tumbled', price: 41 },
            { name: 'Garrowby Dijon Tumbled', price: 33 },
            { name: 'Minster Antiqued', price: 50 },
            { name: 'Malham Grey Tumbled', price: 53 },
            { name: 'Castle Aged Tumbled', price: 43 }
        ],
        comparisons: [
            { ourProduct: 'Garrowby Dijon Tumbled', ourPrice: 33, theirProduct: 'Dijon Tumbled (Stone Deals)', theirPrice: 38.50, diff: '-5.50 (14% less!)' },
            { ourProduct: 'Garrowby Premium Tumbled', ourPrice: 41, theirProduct: 'Moleanos Blue Honed (Stone Deals)', theirPrice: 40.99, diff: '+0.01 (Same price)' },
            { ourProduct: 'Castle Aged Tumbled', ourPrice: 43, theirProduct: 'Jerusalem Grey Gold (Stone Deals)', theirPrice: 43.50, diff: '-0.50 (1% less)' },
            { ourProduct: 'Minster Antiqued', ourPrice: 50, theirProduct: 'Jaipur Brushed (Quorn Stone)', theirPrice: 50.27, diff: '-0.27 (Same price)' },
            { ourProduct: 'Malham Grey Tumbled', ourPrice: 53, theirProduct: 'Cotswold Limestone (Quorn Stone)', theirPrice: 52.50, diff: '+0.50 (1% more)' }
        ],
        pieData: { labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Quorn Stone'], data: [5, 3, 2, 2] }
    }
};
