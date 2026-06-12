import { Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedPage from './AnimatedPage';
import BackToTopButton from '@/components/BackToTopButton';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
});

export const metadata = {
  title: 'Hanzala | Web Developer Portfolio',
  description: 'Crafting modern web apps with Next.js and React.',
  metadataBase: new URL('https://your-portfolio-domain.com'),
  openGraph: {
    title: 'Hanzala | Web Developer Portfolio',
    description: 'Crafting modern web apps with Next.js and React.',
    url: 'https://your-portfolio-domain.com', // replace with your actual domain
    siteName: 'Hanzala Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Hanzala Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanzala | Web Developer Portfolio',
    description: 'Crafting modern web apps with Next.js and React.',
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
