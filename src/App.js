import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import ParicleParameters from './components/particles';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={ParicleParameters}/>
      <div className='spread pa2 pt4'>
        <Logo />
        <Navigation />        
      </div>
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
