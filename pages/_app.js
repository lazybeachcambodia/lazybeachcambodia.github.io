import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
      <main className="flex flex-col pb-20">
        <Navbar />
        <Component {...pageProps} />
      </main>
      <Footer />
  </>
}

export default MyApp
