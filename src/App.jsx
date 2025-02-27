import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Header from './components/Header';
import TopMenu from './components/TopMenu';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Technologies from './components/Technologies';

function App() {
  return (
    <>
      <TopMenu />
      <Header />
      <AboutMe />
      <Experience />
      <Technologies/>
      <Projects />
      <Footer />
    </>
  )
}

export default App;