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
            { name: 'Mezzanotte Honed', price: 59 },
            { name: 'Carrara Venato Polished', price: 71 },
            { name: 'Bianco Ibiza Tumbled', price: 65 }
        ],
        competitorProducts: [
            { competitor: 'Stone Deals', name: 'Carrara C Polished', price: 43.50 },
            { competitor: 'Stone Deals', name: 'White Carrara Honed', price: 52 },
            { competitor: 'Mandarin Stone', name: 'Bianco Carrara Honed', price: 80.41 },
            { competitor: 'Topps Tiles', name: 'Carrara Marble Matt', price: 147.26 },
            { competitor: 'Authentic Stone', name: 'Carrara Marble Tumbled', price: 58.70 }
        ],
        pieData: {
            labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Topps Tiles', 'Authentic Stone'],
            data: [4, 2, 1, 1, 1]
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
    },
    seo: {
        scores: {
            labels: ['Technical SEO', 'On-Page SEO', 'Content', 'Mobile', 'Performance'],
            data: [75, 55, 70, 75, 50],
            colors: ['rgba(34, 197, 94, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(239, 68, 68, 0.8)']
        },
        issues: {
            labels: ['Critical', 'High', 'Medium', 'Low'],
            data: [2, 5, 8, 5],
            colors: ['rgba(239, 68, 68, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(250, 204, 21, 0.8)', 'rgba(34, 197, 94, 0.8)']
        },
        technical: [
            { element: 'Title Tag (Homepage)', status: 'Good', current: 'Natural Stone Online | Premium Natural Stone Floor and Wall Tiles', recommendation: 'Good length (67 chars). Consider adding location (UK)' },
            { element: 'Title Tag (Products)', status: 'Good', current: 'Dijon Tumbled Limestone - Garrowby Limestone Flooring', recommendation: 'Well optimized with product and category keywords' },
            { element: 'Meta Description', status: 'Warning', current: 'Missing on most pages', recommendation: 'Add unique 150-160 char descriptions to all pages' },
            { element: 'Canonical Tags', status: 'Good', current: 'Present on pages', recommendation: 'Properly implemented by Shopify' },
            { element: 'Robots.txt', status: 'Good', current: 'Standard Shopify config', recommendation: 'No changes needed' },
            { element: 'XML Sitemap', status: 'Good', current: 'Auto-generated by Shopify', recommendation: 'Submit to Google Search Console if not done' },
            { element: 'HTTPS', status: 'Good', current: 'SSL Certificate Active', recommendation: 'No changes needed' },
            { element: 'Schema Markup', status: 'Warning', current: 'Basic WebPage only', recommendation: 'Add Product, Organization, and BreadcrumbList schema' },
            { element: 'Geo-Targeting', status: 'Good', current: 'Currency adapts to visitor location (GBP/AED)', recommendation: 'Smart implementation - shows local currency to international visitors' }
        ],
        onPage: [
            { pageType: 'Homepage', issue: 'No H1 tag visible', impact: 'High', fix: 'Add descriptive H1 in hero section' },
            { pageType: 'Collection Pages', issue: 'Thin content descriptions', impact: 'Medium', fix: 'Expand category descriptions to 200+ words with keywords' },
            { pageType: 'Product Pages', issue: 'Duplicate product descriptions', impact: 'Medium', fix: 'Write unique descriptions for each product' },
            { pageType: 'All Pages', issue: 'Missing alt text on some images', impact: 'Medium', fix: 'Add descriptive alt text to all product images' },
            { pageType: 'All Pages', issue: 'JavaScript error visible in content', impact: 'High', fix: 'Fix translator.updateLangSwitcher() script error' }
        ],
        content: [
            { issue: 'Duplicate marquee text', location: 'Header banner', priority: 'High', action: 'Remove 20+ repetitions of promo text in HTML source' },
            { issue: 'Blog exists but needs consistency', location: '/blogs/tips-and-articles', priority: 'Medium', action: 'Maintain regular posting schedule (stone care, installation, design tips)' },
            { issue: 'No FAQ section', location: 'Product/Collection pages', priority: 'Medium', action: 'Add FAQ schema with common questions about stone tiles' },
            { issue: 'Limited internal linking', location: 'Product pages', priority: 'Medium', action: 'Add related products and category breadcrumbs' },
            { issue: 'No customer reviews on products', location: 'Product pages', priority: 'High', action: 'Enable and encourage product reviews for social proof and SEO' },
            { issue: 'Footer year outdated', location: 'Footer', priority: 'Low', action: 'Update copyright to 2025' }
        ],
        backlinks: {
            note: 'Backlink analysis requires external tools (Ahrefs, SEMrush, Moz)',
            recommendations: [
                'Check Domain Authority/Rating using Ahrefs or Moz',
                'Analyze competitor backlink profiles',
                'Identify link building opportunities in home improvement/interior design niches',
                'Consider guest posting on architecture and home renovation blogs'
            ]
        }
    },
    ppc: {
        overview: {
            avgCpcUk: '£2-5',
            industryBenchmark: '£5-7 (Home Improvement)',
            recommendedBudget: '£1,500-3,000/month',
            expectedCtr: '2-4%'
        },
        keywordAnalysis: [
            { keyword: 'natural stone tiles', searchVolume: '2,400/mo', competition: 'High', estimatedCpc: '£3.50-5.00', priority: 'High', notes: 'Core term - high intent' },
            { keyword: 'limestone floor tiles', searchVolume: '1,600/mo', competition: 'Medium', estimatedCpc: '£2.80-4.20', priority: 'High', notes: 'Strong product match' },
            { keyword: 'travertine tiles uk', searchVolume: '880/mo', competition: 'Medium', estimatedCpc: '£2.50-3.80', priority: 'Medium', notes: 'Opportunity - you dont stock travertine' },
            { keyword: 'marble floor tiles', searchVolume: '1,900/mo', competition: 'High', estimatedCpc: '£3.20-4.80', priority: 'High', notes: 'Good product range available' },
            { keyword: 'stone tiles for bathroom', searchVolume: '720/mo', competition: 'Medium', estimatedCpc: '£2.20-3.50', priority: 'Medium', notes: 'Room-specific targeting' },
            { keyword: 'kitchen stone flooring', searchVolume: '590/mo', competition: 'Medium', estimatedCpc: '£2.40-3.60', priority: 'Medium', notes: 'Room-specific targeting' },
            { keyword: 'outdoor stone tiles', searchVolume: '1,100/mo', competition: 'Medium', estimatedCpc: '£2.00-3.20', priority: 'High', notes: 'Seasonal opportunity' },
            { keyword: 'natural stone suppliers uk', searchVolume: '390/mo', competition: 'Low', estimatedCpc: '£1.80-2.80', priority: 'High', notes: 'High intent B2B/trade' },
            { keyword: 'cheap natural stone tiles', searchVolume: '480/mo', competition: 'Medium', estimatedCpc: '£1.50-2.50', priority: 'Low', notes: 'Price-sensitive - lower margins' },
            { keyword: 'luxury stone flooring', searchVolume: '210/mo', competition: 'Low', estimatedCpc: '£3.00-4.50', priority: 'Medium', notes: 'Premium segment targeting' }
        ],
        competitors: [
            { name: 'Topps Tiles', adSpend: '£50,000+/mo (est)', adCoverage: 'Very High', keyStrength: 'Brand recognition, massive budget', threat: 'High' },
            { name: 'Mandarin Stone', adSpend: '£15,000-25,000/mo (est)', adCoverage: 'High', keyStrength: 'Premium positioning, showrooms', threat: 'High' },
            { name: 'Stone Deals', adSpend: '£5,000-10,000/mo (est)', adCoverage: 'Medium', keyStrength: 'Price-focused messaging', threat: 'Medium' },
            { name: 'Tile Mountain', adSpend: '£30,000+/mo (est)', adCoverage: 'High', keyStrength: 'Aggressive discounting', threat: 'Medium' },
            { name: 'Walls and Floors', adSpend: '£20,000-30,000/mo (est)', adCoverage: 'High', keyStrength: 'Wide range, fast delivery', threat: 'Medium' },
            { name: 'Porcelanosa', adSpend: '£25,000+/mo (est)', adCoverage: 'High', keyStrength: 'Luxury brand positioning', threat: 'Low' }
        ],
        recommendations: [
            { priority: 'High', action: 'Start with long-tail keywords', details: 'Target specific stone types + room combinations to reduce CPC and improve conversion' },
            { priority: 'High', action: 'Implement negative keywords', details: 'Exclude "free", "DIY", "how to" to avoid wasted spend on non-buyers' },
            { priority: 'High', action: 'Create location-specific campaigns', details: 'Target UK regions with delivery messaging, consider Yorkshire focus initially' },
            { priority: 'Medium', action: 'Use Shopping Ads', details: 'Product listing ads typically have higher CTR and lower CPC for e-commerce' },
            { priority: 'Medium', action: 'Remarketing campaigns', details: 'Target cart abandoners and past visitors with display ads' },
            { priority: 'Medium', action: 'Competitor targeting', details: 'Bid on competitor brand terms where allowed (except trademarks)' },
            { priority: 'Low', action: 'YouTube pre-roll ads', details: 'Consider video ads for brand awareness in home improvement content' }
        ],
        budgetScenarios: [
            { budget: '£1,000/mo', expectedClicks: '200-400', expectedConversions: '4-12', bestFor: 'Testing and learning phase' },
            { budget: '£2,500/mo', expectedClicks: '500-1,000', expectedConversions: '10-30', bestFor: 'Steady growth, cover core keywords' },
            { budget: '£5,000/mo', expectedClicks: '1,000-2,000', expectedConversions: '20-60', bestFor: 'Competitive presence, multiple campaigns' },
            { budget: '£10,000/mo', expectedClicks: '2,000-4,000', expectedConversions: '40-120', bestFor: 'Market leadership push' }
        ]
    }
};
