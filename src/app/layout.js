import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedPage from './AnimatedPage';
import BackToTopButton from '@/components/BackToTopButton';
import { siteConfig } from '@/config/site';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.ogSiteName,
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.ogSiteName} Preview`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <body>

        <Header />
        <AnimatedPage>{children}</AnimatedPage> {/* ✅ wrapped in client component */}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
