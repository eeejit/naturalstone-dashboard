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
            { competitor: 'Stone Deals', product: 'Carrara C Polished Marble', price: 43.50 },
            { competitor: 'Mandarin Stone', product: 'Bianco Carrara Honed', price: 80.41 },
            { competitor: 'Topps Tiles', product: 'Marble White Satin', price: 147.26 },
            { competitor: 'Authentic Stone', product: 'Carrara Marble Polished', price: 58.70 }
        ]
    },
    limestone: {
        labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Quorn Stone', 'Tile Mountain'],
        prices: [43, 38.95, 51.50, 52.80, 29.95],
        colors: ['rgba(34, 197, 94, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(239, 68, 68, 0.8)', 'rgba(168, 85, 247, 0.8)'],
        ourProducts: [
            { name: 'Dijon Tumbled', price: 33 },
            { name: 'Jerusalem Grey Honed', price: 53 },
            { name: 'Moleanos Blue Honed', price: 47 },
            { name: 'Sinai Pearl Tumbled', price: 39 }
        ],
        competitorProducts: [
            { competitor: 'Stone Deals', product: 'Dijon Tumbled Limestone', price: 38.95 },
            { competitor: 'Mandarin Stone', product: 'Montpellier Antiqued', price: 51.50 },
            { competitor: 'Quorn Stone', product: 'Aged Dijon Limestone', price: 52.80 },
            { competitor: 'Tile Mountain', product: 'Jura Grey Limestone', price: 29.95 }
        ]
    },
    travertine: {
        labels: ['Travertine Store', 'Stone Deals', 'Mandarin Stone', 'Quorn Stone', 'Topps Tiles'],
        prices: [27, 34.95, 61.16, 45.60, 89],
        colors: ['rgba(168, 85, 247, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(249, 115, 22, 0.8)', 'rgba(239, 68, 68, 0.8)', 'rgba(20, 184, 166, 0.8)'],
        marketNote: 'Natural Stone Online does not currently stock travertine - potential market opportunity',
        competitorProducts: [
            { competitor: 'Travertine Store', product: 'Classic Tumbled Travertine', price: 27 },
            { competitor: 'Stone Deals', product: 'Ivory Tumbled Travertine', price: 34.95 },
            { competitor: 'Mandarin Stone', product: 'Classico Tumbled', price: 61.16 },
            { competitor: 'Quorn Stone', product: 'Ivory Travertine', price: 45.60 },
            { competitor: 'Topps Tiles', product: 'Travertine Ivory Matt', price: 89 }
        ]
    },
    seo: {
        technical: [
            { element: 'Page Speed', status: 'Warning', current: 'Mobile: 45, Desktop: 72', recommendation: 'Optimize images, enable lazy loading, minify CSS/JS' },
            { element: 'Mobile Responsiveness', status: 'Good', current: 'Fully responsive Shopify theme', recommendation: 'Continue monitoring with Google Mobile-Friendly Test' },
            { element: 'URL Structure', status: 'Good', current: 'Clean Shopify URLs', recommendation: 'No changes needed' },
            { element: 'Title Tags', status: 'Warning', current: 'Some pages missing or generic', recommendation: 'Add unique, keyword-rich titles (50-60 chars) to all pages' },
            { element: 'Meta Descriptions', status: 'Warning', current: 'Missing on most pages', recommendation: 'Add unique 150-160 char descriptions to all pages' },
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
        // VERIFIED DATA SECTION - Sources included
        verifiedMarketData: {
            ukTilesMarket: {
                totalValue: '£537m (2024)',
                naturalStoneSegment: '£86m',
                ceramicPorcelain: '£418m',
                source: 'Barbour ABI Floor and Wall Tiles Market Report 2024'
            },
            googleAdsBenchmarks: {
                homeServicesCPC: '£6-6.20 ($7.60-7.85)',
                homeServicesCTR: '6.1-6.37%',
                homeServicesCVR: '7.1-7.33%',
                ukAverageCPC: '£0.50-5.00 typical range',
                source: 'WordStream 2025 Google Ads Benchmarks, Vertical Leap UK'
            },
            competitorRevenue: {
                toppsTiles: { revenue: '£210.4m (FY2024)', stores: 301, source: 'Topps Group Annual Report 2024' },
                mandarinStone: { revenue: '£44.9m (2022)', showrooms: 14, source: 'Companies House / Insider Media' }
            },
            toppsTilesInsight: {
                fact: 'Achieved 57% increase in Shopping clicks with 16% reduction in CPC using CSS partner',
                source: 'Think with Google Case Study'
            }
        },
        // DATA REQUIRING TOOLS - Estimates marked
        overview: {
            avgCpcUk: '£2-6 (estimated based on home improvement benchmarks)',
            industryBenchmark: '£6-7 (Home Services - WordStream 2025)',
            recommendedBudget: '£1,500-3,000/month (industry standard)',
            expectedCtr: '2-4% (conservative estimate)',
            dataNote: 'Exact keyword CPCs require Google Keyword Planner access'
        },
        keywordAnalysis: [
            { keyword: 'natural stone tiles', searchVolume: 'Needs Google Keyword Planner', competition: 'High', estimatedCpc: '£3-5 (est)', priority: 'High', notes: 'Core term - verify with Keyword Planner' },
            { keyword: 'limestone floor tiles', searchVolume: 'Needs Google Keyword Planner', competition: 'Medium', estimatedCpc: '£2.50-4 (est)', priority: 'High', notes: 'Strong product match' },
            { keyword: 'marble floor tiles', searchVolume: 'Needs Google Keyword Planner', competition: 'High', estimatedCpc: '£3-5 (est)', priority: 'High', notes: 'Good product range available' },
            { keyword: 'stone tiles for bathroom', searchVolume: 'Needs Google Keyword Planner', competition: 'Medium', estimatedCpc: '£2-3.50 (est)', priority: 'Medium', notes: 'Room-specific targeting' },
            { keyword: 'natural stone suppliers uk', searchVolume: 'Needs Google Keyword Planner', competition: 'Low', estimatedCpc: '£1.50-2.50 (est)', priority: 'High', notes: 'High intent B2B/trade' }
        ],
        competitors: [
            { name: 'Topps Tiles', adSpend: 'Large (£210m revenue company)', adCoverage: 'Very High', keyStrength: 'Brand recognition, 301 stores, massive budget', threat: 'High', verified: 'Revenue verified - Topps Group 2024' },
            { name: 'Mandarin Stone', adSpend: 'Medium-Large (£45m revenue)', adCoverage: 'High', keyStrength: 'Premium positioning, 14 showrooms', threat: 'High', verified: 'Revenue verified - Companies House 2022' },
            { name: 'Stone Deals', adSpend: 'Unknown - needs SpyFu/SEMrush', adCoverage: 'Medium', keyStrength: 'Price-focused messaging', threat: 'Medium', verified: 'Not verified' },
            { name: 'Tile Mountain', adSpend: 'Unknown - needs SpyFu/SEMrush', adCoverage: 'High', keyStrength: 'Aggressive discounting', threat: 'Medium', verified: 'Not verified' },
            { name: 'Walls and Floors', adSpend: 'Unknown - needs SpyFu/SEMrush', adCoverage: 'High', keyStrength: 'Wide range, fast delivery', threat: 'Medium', verified: 'Not verified' },
            { name: 'Porcelanosa', adSpend: 'Unknown - needs SpyFu/SEMrush', adCoverage: 'High', keyStrength: 'Luxury brand positioning', threat: 'Low', verified: 'Not verified' }
        ],
        recommendations: [
            { priority: 'High', action: 'Get Google Ads access', details: 'Use Keyword Planner for accurate search volumes and CPC data for UK stone tiles market' },
            { priority: 'High', action: 'Start with long-tail keywords', details: 'Target specific stone types + room combinations to reduce CPC and improve conversion' },
            { priority: 'High', action: 'Implement negative keywords', details: 'Exclude "free", "DIY", "how to" to avoid wasted spend on non-buyers' },
            { priority: 'High', action: 'Create location-specific campaigns', details: 'Target UK regions with delivery messaging, consider Yorkshire focus initially' },
            { priority: 'Medium', action: 'Use Shopping Ads', details: 'Product listing ads typically have higher CTR and lower CPC for e-commerce' },
            { priority: 'Medium', action: 'Remarketing campaigns', details: 'Target cart abandoners and past visitors with display ads' },
            { priority: 'Medium', action: 'Competitor targeting', details: 'Bid on competitor brand terms where allowed (except trademarks)' },
            { priority: 'Low', action: 'YouTube pre-roll ads', details: 'Consider video ads for brand awareness in home improvement content' }
        ],
        budgetScenarios: [
            { budget: '£1,000/mo', expectedClicks: '150-400 (based on £2.50-6.50 CPC)', expectedConversions: '4-12 (at 2-3% CVR)', bestFor: 'Testing and learning phase' },
            { budget: '£2,500/mo', expectedClicks: '400-1,000', expectedConversions: '10-30', bestFor: 'Steady growth, cover core keywords' },
            { budget: '£5,000/mo', expectedClicks: '800-2,000', expectedConversions: '20-60', bestFor: 'Competitive presence, multiple campaigns' },
            { budget: '£10,000/mo', expectedClicks: '1,500-4,000', expectedConversions: '40-120', bestFor: 'Market leadership push' }
        ],
        toolsNeeded: [
            { tool: 'Google Keyword Planner', purpose: 'Accurate UK keyword search volumes and CPC estimates', access: 'Free with Google Ads account' },
            { tool: 'Google Ads Account', purpose: 'Run campaigns, access auction insights for competitor data', access: 'Free to set up' },
            { tool: 'SEMrush or SpyFu', purpose: 'Competitor ad spend estimates and keyword intelligence', access: 'Paid subscription ~£100-200/mo' },
            { tool: 'Google Analytics 4', purpose: 'Track conversions and attribute to PPC campaigns', access: 'Free' }
        ],
        quickWins: [
            'Log into Google Ads and use Keyword Planner to get real search volume data',
            'Check Auction Insights report to see actual competitors in your ad auctions',
            'Start with £500-1000 test budget on Shopping Ads for quick learnings',
            'Focus on Yorkshire/local delivery areas initially for better conversion rates'
        ]
    }
};
