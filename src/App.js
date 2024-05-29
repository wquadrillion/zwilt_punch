import Hero from './homepage/components/heropage/hero';
import './style/global.scss';
import divisor from './assets/divisor.svg';
import Brandspage from './homepage/components/brandspage/brands';
import Prevideos from './homepage/components/PreVideos/prevideos';
import Videos from './homepage/components/Videos/videos';
import PreFAQ from './homepage/components/PreFAQ/PreFaq';
import FAQ from './homepage/components/Faq/Faq';
import Footer from './homepage/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='App--div'>
        <Hero />
      </div>
      <div style={{ width: '100%',  zIndex: '9',zIndex: '9', position: 'relative',}}>
        <img src={divisor} alt='divisor icon' style={{ width: '100%',}} />
      </div>
      <Brandspage />
      <Prevideos />
      <Videos />
      <PreFAQ />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
