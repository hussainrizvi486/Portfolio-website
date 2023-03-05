import { Header, Home, About, Skills, Contact, Footer } from './components/index'
import './styles/App.scss';
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
