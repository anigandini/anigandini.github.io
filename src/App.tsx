import Header from './components/Header';
import Mission from './components/Mission';
import About from './components/About/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styles from './styles/App.module.css';
import hero from './assets/hero.png'


function App() {
  return (
    <div className={styles.App}>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <img className={styles.hero} src={hero} alt='Make your dream page today' />
        </section>
        <section>
          <Mission />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Journey />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
