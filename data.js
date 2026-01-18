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
                          ]
      },
      marble: {
                labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Topps Tiles', 'Authentic Stone'],
                prices: [65, 43.50, 80.41, 147.26, 58.70],
                colors: [
                              'rgba(34, 197, 94, 0.8)',
                              'rgba(59, 130, 246, 0.8)',
                              'rgba(249, 115, 22, 0.8)',
                              'rgba(239, 68, 68, 0.8)',
                              'rgba(168, 85, 247, 0.8)'
                          ],
                products: [
                  { name: 'Citadel Bianco Tumbled', price: 64, competitor: 'Natural Stone Online' },
                  { name: 'Citadel Bianco Polished', price: 59, competitor: 'Natural Stone Online' },
                  { name: 'Lilac Premium Honed', price: 71, competitor: 'Natural Stone Online' },
                  { name: 'Mezzanotte Honed', price: 60, competitor: 'Natural Stone Online' },
                  { name: 'Citadel Bianco Honed', price: 70, competitor: 'Natural Stone Online' },
                  { name: 'Bianco Ibiza Polished Marble', price: 43.50, competitor: 'Stone Deals' },
                  { name: 'Calacatta Lincoln Honed', price: 67.50, competitor: 'Stone Deals' },
                  { name: 'Bianco Pinta Honed Marble', price: 38.50, competitor: 'Stone Deals' },
                  { name: 'Carrara Polished Marble', price: 43.50, competitor: 'Stone Deals' },
                  { name: 'Crema Marfil Marble Floor Tiles', price: 78.00, competitor: 'Mandarin Stone' },
                  { name: 'Bianco Carrara Marble Tiles', price: 82.83, competitor: 'Mandarin Stone' },
                  { name: 'Ephesus Antiqued Marble Tiles', price: 113.00, competitor: 'Topps Tiles' },
                  { name: 'Marble Luxe Grey Floor Tile', price: 147.26, competitor: 'Topps Tiles' },
                  { name: 'Marble Luxe Ivory Floor Tile', price: 147.26, competitor: 'Topps Tiles' },
                  { name: 'Botticino Classico Marble Tile', price: 55.70, competitor: 'Authentic Stone' },
                  { name: 'Crema Marfil First Choice Marble', price: 61.70, competitor: 'Authentic Stone' }
                          ]
      },
      travertine: {
                labels: ['Stone Deals', 'Mandarin Stone', 'Travertine Store', 'Quorn Stone'],
                prices: [33.50, 56.00, 30.00, 47.00],
                colors: [
                              'rgba(59, 130, 246, 0.8)',
                              'rgba(249, 115, 22, 0.8)',
                              'rgba(168, 85, 247, 0.8)',
                              'rgba(20, 184, 166, 0.8)'
                          ],
                products: [
                  { name: 'Classic Light Tumbled Travertine', price: 31.99, competitor: 'Stone Deals' },
                  { name: 'Ivory Tumbled Travertine', price: 35.00, competitor: 'Stone Deals' },
                  { name: 'Walnut Tumbled Travertine', price: 33.50, competitor: 'Stone Deals' },
                  { name: 'Silver Grey Honed Travertine', price: 51.00, competitor: 'Mandarin Stone' },
                  { name: 'Classic Cross Cut Travertine', price: 61.00, competitor: 'Mandarin Stone' },
                  { name: 'Light Tumbled Travertine', price: 27.00, competitor: 'Travertine Store' },
                  { name: 'Premium Select Travertine', price: 33.00, competitor: 'Travertine Store' },
                  { name: 'Classic Travertine Tiles', price: 47.00, competitor: 'Quorn Stone' },
                  { name: 'Ivory Travertine Unfilled', price: 47.00, competitor: 'Quorn Stone' }
                          ],
                note: 'Natural Stone Online does not currently stock travertine tiles'
      },
      limestone: {
                labels: ['Natural Stone Online', 'Stone Deals', 'Mandarin Stone', 'Quorn Stone'],
                prices: [45, 40.99, 36.60, 50.27],
                colors: [
                              'rgba(34, 197, 94, 0.8)',
                              'rgba(59, 130, 246, 0.8)',
                              'rgba(249, 115, 22, 0.8)',
                              'rgba(20, 184, 166, 0.8)'
                          ],
                products: [
                  { name: 'Garrowby Premium Tumbled', price: 41, competitor: 'Natural Stone Online' },
                  { name: 'Garrowby Dijon Tumbled', price: 33, competitor: 'Natural Stone Online' },
                  { name: 'Minster Antiqued', price: 50, competitor: 'Natural Stone Online' },
                  { name: 'Malham Grey Tumbled', price: 53, competitor: 'Natural Stone Online' },
                  { name: 'Castle Aged Tumbled', price: 43, competitor: 'Natural Stone Online' },
                  { name: 'Moleanos Blue Honed Limestone', price: 40.99, competitor: 'Stone Deals' },
                  { name: 'Dijon Tumbled Limestone', price: 38.50, competitor: 'Stone Deals' },
                  { name: 'Jerusalem Grey Gold Limestone', price: 43.50, competitor: 'Stone Deals' },
                  { name: 'Montpellier Antiqued Limestone', price: 36.60, competitor: 'Mandarin Stone' },
                  { name: 'Burgundy Antiqued Limestone', price: 36.60, competitor: 'Mandarin Stone' },
                  { name: 'Jaipur Brushed Limestone', price: 50.27, competitor: 'Quorn Stone' },
                  { name: 'Cotswold Limestone Tiles', price: 52.50, competitor: 'Quorn Stone' }
                          ]
      }
};
