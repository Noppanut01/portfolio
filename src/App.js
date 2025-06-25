import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Body from './components/body';
import Footer from './components/footer';
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <img className='yellow-bg' src={require('./assets/yellow-bg.png')} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
