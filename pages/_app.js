import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from '../components/Head'
function MyApp({ Component, pageProps }) {
  return <>
      <Head />
      <main className="flex flex-col px-10 mx-auto">
        <Navbar/>
        <div className="mx-auto">
          <Component {...pageProps} />
        </div>
      </main>
    <Footer />
  </>
}

export default MyApp
