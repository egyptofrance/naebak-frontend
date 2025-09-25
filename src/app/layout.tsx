import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsBar from '@/components/NewsBar';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'نائبك - منصة التواصل مع النواب والمرشحين',
    template: '%s | نائبك'
  },
  description: 'منصة نائبك هي الجسر الرقمي الذي يربط بين المواطنين ونوابهم في البرلمان المصري، لتعزيز التواصل والشفافية والمشاركة المجتمعية الفعالة.',
  keywords: [
    'نائبك',
    'البرلمان المصري',
    'مجلس النواب',
    'النواب',
    'المرشحين',
    'الشكاوى',
    'التواصل مع النواب',
    'الديمقراطية',
    'المشاركة المجتمعية',
    'الشفافية',
    'مصر'
  ],
  authors: [{ name: 'فريق نائبك' }],
  creator: 'فريق نائبك',
  publisher: 'منصة نائبك',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://naebak.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-EG': '/ar',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: 'https://naebak.com',
    title: 'نائبك - منصة التواصل مع النواب والمرشحين',
    description: 'منصة نائبك هي الجسر الرقمي الذي يربط بين المواطنين ونوابهم في البرلمان المصري، لتعزيز التواصل والشفافية والمشاركة المجتمعية الفعالة.',
    siteName: 'نائبك',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'نائبك - منصة التواصل مع النواب والمرشحين',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نائبك - منصة التواصل مع النواب والمرشحين',
    description: 'منصة نائبك هي الجسر الرقمي الذي يربط بين المواطنين ونوابهم في البرلمان المصري',
    images: ['/images/twitter-image.jpg'],
    creator: '@naebak',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'government',
  classification: 'Government & Politics',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'نائبك',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2E7D32',
    'theme-color': '#2E7D32',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2E7D32" />
        <meta name="msapplication-TileColor" content="#2E7D32" />
        <meta name="theme-color" content="#2E7D32" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//api.naebak.com" />
        <link rel="dns-prefetch" href="//cdn.naebak.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'نائبك',
              alternateName: 'Naebak',
              url: 'https://naebak.com',
              description: 'منصة نائبك هي الجسر الرقمي الذي يربط بين المواطنين ونوابهم في البرلمان المصري',
              inLanguage: 'ar-EG',
              isAccessibleForFree: true,
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://naebak.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
              publisher: {
                '@type': 'Organization',
                name: 'منصة نائبك',
                url: 'https://naebak.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://naebak.com/images/logo-naebak-green.png',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+20-123-456-7890',
                  contactType: 'customer service',
                  areaServed: 'EG',
                  availableLanguage: ['Arabic', 'English'],
                },
                sameAs: [
                  'https://facebook.com/naebak',
                  'https://twitter.com/naebak',
                  'https://youtube.com/naebak',
                  'https://instagram.com/naebak',
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${cairo.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-700 text-white px-4 py-2 rounded-md z-50"
        >
          الانتقال إلى المحتوى الرئيسي
        </a>

        {/* News Bar */}
        <NewsBar />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Loading indicator for better UX */}
        <div id="loading-indicator" className="fixed top-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 transition-transform duration-300 z-50" />

        {/* Back to top button */}
        <button
          id="back-to-top"
          className="fixed bottom-8 left-8 bg-green-700 hover:bg-green-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 invisible z-40"
          aria-label="العودة إلى الأعلى"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>

        {/* Client-side scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Back to top functionality
              window.addEventListener('scroll', function() {
                const backToTop = document.getElementById('back-to-top');
                if (window.pageYOffset > 300) {
                  backToTop.classList.remove('opacity-0', 'invisible');
                } else {
                  backToTop.classList.add('opacity-0', 'invisible');
                }
              });

              document.getElementById('back-to-top').addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });

              // Loading indicator
              let loadingTimer;
              function showLoading() {
                const indicator = document.getElementById('loading-indicator');
                indicator.classList.remove('scale-x-0');
                indicator.classList.add('scale-x-100');
              }

              function hideLoading() {
                const indicator = document.getElementById('loading-indicator');
                indicator.classList.remove('scale-x-100');
                indicator.classList.add('scale-x-0');
              }

              // Show loading on navigation
              document.addEventListener('click', function(e) {
                const link = e.target.closest('a');
                if (link && link.href && !link.href.includes('#') && !link.target) {
                  showLoading();
                  loadingTimer = setTimeout(hideLoading, 5000); // Fallback
                }
              });

              // Hide loading when page loads
              window.addEventListener('load', function() {
                clearTimeout(loadingTimer);
                hideLoading();
              });

              // Accessibility improvements
              document.addEventListener('keydown', function(e) {
                // ESC key to close modals/dropdowns
                if (e.key === 'Escape') {
                  const openDropdowns = document.querySelectorAll('[data-dropdown-open="true"]');
                  openDropdowns.forEach(dropdown => {
                    dropdown.click();
                  });
                }
              });

              // Reduce motion for users who prefer it
              if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.documentElement.style.setProperty('--animation-duration', '0.01ms');
                document.documentElement.style.setProperty('--transition-duration', '0.01ms');
              }

              // Service Worker registration for PWA
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
