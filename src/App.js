import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticleParameters from './components/particles';
import Particles from 'react-particles-js';
import Clarifai from "clarifai";

let app = new Clarifai.App({apiKey: '0d1a8485d84b452cb18e6d822cfc78e2'});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
    console.log(box);
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)

  onButtonSubmit = () => {
    console.log('click');
    this.setState({imageUrl: this.state.input})
     app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
      .then (response => this.displayFaceBox(this.calculateFaceLocation(response)))    
      .catch (error => console.log(error))    
  };

  onLoginIn = () => {
    console.log('logging In')
  };

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={ParticleParameters}/>
        <div className='spread pa2'>
          <Logo/>
          <Navigation onLoginIn={this.onLoginIn}/>        
        </div>
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    )
  };
}

export default App;
