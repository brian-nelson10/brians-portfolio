import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Art from './pages/Art';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 1, delayChildren: isFirstMount ? 1 : 2.5 },
  },
});
const title = {
  initial: { y: -25, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 3.5],
    },
  },
};

const App = ({isFirstMount}) => {
  const history = useHistory();
  return (
    <>
      <Router>
      <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
        >
          <motion.div variants={title}>
        <NavMenu />
        </motion.div>
        </motion.div>
        <ScrollToTop />
        <AnimatePresence>
        <Switch history={history} key={history.pathname}>
           <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/art">
            <Art />
          </Route> 
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </AnimatePresence>
        <Footer />
      </Router>
    </>
  );
}

export default App;
