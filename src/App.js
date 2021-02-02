import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
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
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password:'',
        entries: 0,
        joined: '' 
      }
    }
  };

  loadUser = (data) => {
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined 
    }})
  }

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
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }


        //  you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)

  onButtonSubmit = () => {
    console.log('click');
    this.setState({imageUrl: this.state.input})
     app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
      .then (response => this.displayFaceBox(this.calculateFaceLocation(response)))    
      .catch (error => console.log(error))    
  }

  // onLoginOut = () => {
  //   console.log('logging Out')
  //   this.setState({route: 'signin'})
  // };

  render() { 
    const {box, imageUrl, route} = this.state; // this is to get rid of the this.state in whole render statement for cleaner code for parameters in the {}.
    return (
      <div className="App">
        <Particles className='particles' params={ParticleParameters}/>
        { route === 'home'  // condition - if the route state is 'signin', will show sign in form. If the state of route is different, will show the rest after :. ? is for IF and : is for ELSE
          ? <div>
              <div className='spread pa2'>
                <Logo/>
                <Navigation onRouteChange={this.onRouteChange}/>        
              </div>
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}/>
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </div>          
          : (route === 'signin' 
            ? <div>
                <Logo />
                <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
              </div>
            : <div>
                <Logo />
                <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              </div>
            )
        }
      </div>
    )
  };
}

export default App;
