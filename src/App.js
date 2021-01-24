import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticleParameters from './components/particles';
import Particles from 'react-particles-js';
// import {ClarifaiStub, grpc} from "clarifai-nodejs-grpc";


// let app = new Clarifai.App({apiKey: '0d1a8485d84b452cb18e6d822cfc78e2'});
// const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");

// const stub = ClarifaiStub.grpc();

// const metadata = new grpc.Metadata();
// metadata.set("authorization", "0d1a8485d84b452cb18e6d822cfc78e2");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  };

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    // console.log('click');
    this.setState({imageUrl: this.state.input})
    // stub.PostModelOutputs( {
    //       model_id: "aaa03c23b3724a16a56b629203edc62c",
    //       inputs: [{data: {image: {url: "https://samples.clarifai.com/dog2.jpeg"}}}]
    //   },
    //   metadata,
    //   (err, response) => {
    //       if (err) {
    //           console.log("Error: " + err);
    //           return;
    //       }

    //       if (response.status.code !== 10000) {
    //           console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
    //           return;
    //       }

    //       console.log("Predicted concepts, with confidence values:")
    //       for (const c of response.outputs[0].data.concepts) {
    //           console.log(c.name + ": " + c.value);
    //       }
    //   }
    // );
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    )
  };
}

export default App;
