import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ivan Gjorcev WebSite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <img src="../../../../public/logo.netlify.svg" alt="" width="200px" height="200px">
      </main>

      <Footer />
    </div>
  )
}   