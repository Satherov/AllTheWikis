import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released</Banner>
const navbar = (
  <Navbar
    logo={<b>All the Wikis</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
    <Head /* Head Optins */ >
      {/* children */}
    </Head>
    <body>
    <Layout
      //banner={banner}
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/Satherov/AllTheWikis/tree/master/"
      footer={footer}
      feedback={{ content: null }}
    >
      {children}
    </Layout>
    </body>
    </html>
  )
}