import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div className="md:w-11/12 w-full px-10 mx-auto overflow-x-hidden">
      <Navbar></Navbar>
      <Hero></Hero>
      <News></News>
    </div>
  );
}

export default App;
