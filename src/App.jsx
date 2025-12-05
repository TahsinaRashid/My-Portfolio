import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Hobbies />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 dark:bg-background-dark group/design-root overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <div className="px-4 sm:px-8 flex flex-1 justify-center py-5">
            <div className="flex flex-col max-w-auto flex-1 w-full">
              <Header />
              <main className="w-full">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects/:id" element={<ProjectPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
