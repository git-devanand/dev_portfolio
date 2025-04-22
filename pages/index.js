// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Devanand Yadav | Portfolio</title>
        <meta name="description" content="Devanand's personal portfolio website" />
      </Head>
      <Header />
      <main className="px-4 sm:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}