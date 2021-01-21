import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <Particles className='particles'/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
