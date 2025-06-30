import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Banner />
        <img 
          className='yellow-bg' 
          src={require('./assets/yellow-bg.png')} 
          alt="Decorative background"
        />
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
