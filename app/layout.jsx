import "./globals.css";
import localFont from 'next/font/local'

const RoosStRegis = localFont({ 
  src: './styles/fonts/RoosStRegisText-Regular.woff2',
  display: 'swap'
})
const ArialFont = localFont({ 
  src: './styles/fonts/arial/ArialMT.woff2',
  display: 'swap',
  variable: '--font-arial', 
})

export { RoosStRegis,  }

export const metadata = {
  title: 'St.Regis| Luxury Experience | Elegance, and Comfort in Punta Mita',
  description: "Elegance, Exclusivity, and Comfort in Punta Mita",
  openGraph: {
    title: 'St.Regis| Experiencia de Lujo| Elegancia y confort en Punta Mita',
    description: 'Elegancia, Exclusividad y Confort en Punta Mita',
    url: 'https://explore-strpuntamita.com/',
    siteName: 'STREGIS',
    keywords: [
      "Hotel de lujo", 
      "Experiencia exclusiva", 
      "Elegancia", 
      "Confort excepcional", 
      "Destinos exclusivos", 
      "Experiencias inolvidables", 
      "Reserva de hotel de lujo", 
      "Estadía de lujo", 
      "Servicios excepcionales", 
      "Experiencia de cinco estrellas", 
      "Sofisticación", 
      "Detalles exclusivos", 
      "Estilo refinado", 
      "Atención personalizada", 
      "Experiencia premium", 
      "Ambiente exclusivo", 
      "Experiencia de hospedaje de lujo", 
      "Lujo sin igual", 
      "Estancia de lujo", 
      "Trato VIP", 
      "Punta Mita", 
      "Playa", 
      "Exclusividad", 
      "Destino de lujo", 
      "Golf", 
      "Surf", 
      "Belleza natural", 
      "Gastronomía", 
      "Relajación", 
      "Residencias de lujo", 
      "México",
      "Luxury Hotel", 
      "Exclusive Experience", 
      "Elegance", 
      "Exceptional Comfort", 
      "Exclusive Destinations", 
      "Unforgettable Experiences", 
      "Luxury Hotel Booking", 
      "Deluxe Stay", 
      "Exceptional Services", 
      "Five-Star Experience", 
      "Sophistication", 
      "Exclusive Details", 
      "Refined Style", 
      "Personalized Attention", 
      "Premium Experience", 
      "Exclusive Atmosphere", 
      "Luxury Accommodation Experience", 
      "Unparalleled Luxury", 
      "Deluxe Stay", 
      "VIP Treatment", 
      "Punta Mita", 
      "Beach", 
      "Exclusivity", 
      "Luxury Destination", 
      "Golf", 
      "Surfing", 
      "Natural Beauty", 
      "Gastronomy", 
      "Relaxation", 
      "Luxury Residences", 
      "Mexico"
  ],
    images: [
      {
        url: 'https://explore-strpuntamita.com/images/opengraph.png',
        width: 600,
        height: 600,
      },
    ],
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${RoosStRegis.className} ${ArialFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
