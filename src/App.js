import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Header from './components/header/header';
import Rank from './components/rank/rank';
import InfoBox from './components/rank/infobox';
import NoRank from './components/rank/numberank';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticleParameters from './components/particles';
import Particles from 'react-particles-js';
import Popup from './components/popup/popup';

const initialState = {
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

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState
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
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signout' || route === 'signin') {
      this.setState(initialState)
    }
    this.setState({route: route})
  }

  onPictureSumit = () => {
    this.setState({imageUrl: this.state.input});
      fetch('https://desolate-harbor-55159.herokuapp.com/imageurl', {
          method: 'post',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
          input: this.state.input
          })
      })
        .then(response => response.json())
        .then (response => {
          if (response) {
            fetch('https://desolate-harbor-55159.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
              })
            }).then(response => response.json())
              .then(entryID => {
                this.setState(Object.assign(this.state.user, { entries: entryID}))
              })
          }
       this.displayFaceBox(this.calculateFaceLocation(response))})    
      .catch (error => console.log(error))    
  }

  render() { 
    const {box, imageUrl, route} = this.state; // this is to get rid of the this.state in whole render statement for cleaner code for parameters in the {}.
    return (
      <div className="App">
        <Particles className='particles' params={ParticleParameters}/>
        <Header className='header' />
        { route === 'home'  // condition - if the route state is 'signin', will show sign in form. If the state of route is different, will show the rest after :. ? is for IF and : is for ELSE
          ? <div className=''>
              <Navigation className='spread pa2' onRouteChange={this.onRouteChange}/> 
              <div className='cont-grid br3 ba w-70 center'>
                 <InfoBox />
                 <Rank className='item-a' name={this.state.user.name}/>
                 <NoRank entries={this.state.user.entries}/>
                 <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onPictureSumit={this.onPictureSumit}/>
                 <FaceRecognition className='item-e' box={box} imageUrl={imageUrl} />       
              </div>
             
            </div>          
          : (route === 'signin' 
            ? <div>               
                <SignIn className='signin' onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
              </div>
            : <div>
                <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              </div>
            )
        }
      </div>
    )
  };
}

export default App;
