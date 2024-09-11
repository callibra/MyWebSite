import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header  title="Welcome to my React App!"  titleClass="header-title"  />
        <img 
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240207113731/Portfolio-Website-Project-Banner.webp" 
          alt="Description of image" 
          className="main-image" 
        />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <Footer />
    </div>
  )
}
