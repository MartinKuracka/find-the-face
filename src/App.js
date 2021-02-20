import React from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import Rank from './components/rank/rank';
import InfoBox from './components/rank/infobox';
import NoRank from './components/rank/numberank';
import Image from './components/rank/image';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticleParameters from './components/particles';
import Particles from 'react-particles-js';
import './animations.css';
import Popup from './components/popup/popup'

const initialState = {
      input: '',
      imageUrl: '',
      box: {},
      boxes: [],      
      route: 'signin',
      isSignedIn: false,
      popupstate: false,
      popupmessage: '',
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
    this.setState({boxes:[]})     
    const facesDataArray = data.outputs[0].data.regions;
    let i;
    for (i=0;i<facesDataArray.length;i++) {
      const clarifaiFace = facesDataArray[i].region_info.bounding_box;
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);      
      this.setState ({
        box: {
         leftCol: clarifaiFace.left_col * width,
         topRow: clarifaiFace.top_row * height,
         rightCol: width - (clarifaiFace.right_col * width),
         bottomRow: height - (clarifaiFace.bottom_row * height) 
        }             
      })
        // console.log('box value',this.state.box); 
        this.setState({boxes: this.state.boxes.concat(this.state.box)});        
        console.log('boxes', this.state.boxes)  
    }

  }

  displayFaceBox = (box) => {  
    this.setState({box: box});  
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  togglePop = () => {
    this.setState({popupstate: !this.state.popupstate});
  }

  onRouteChange = (route) => {
    if (route === 'signout' || route === 'signin') {
      this.setState(initialState)
    }
    this.setState({route: route})
  }

  onPictureSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
      popupstate:true,
      popupmessage: 'reading faces...'
    })
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
            }).then(response => response.json()).then(this.setState({popupstate:false}))
              .then(entryID => {
                this.setState(Object.assign(this.state.user, { entries: entryID}))
              })
          }
       this.displayFaceBox(this.calculateFaceLocation(response)) })    
      .catch (error => console.log(error))    
  }

  render() { 
    const {boxes, imageUrl, route} = this.state; 
    return (
      <div className="">
        <div className='center mt4'>    
           {this.state.popupstate ? <Popup className='center w-100 flex' toggle={this.togglePop} message={this.state.popupmessage}/> : null}    
        </div>

        <Header className='header' />
        { route === 'home'
          ? <div className=''>
              <Navigation className='spread pa2' onRouteChange={this.onRouteChange}/> 
              <div className='slide-in-elliptic-right-bck cont-grid ba b--solid'>
                 <InfoBox />
                 <Rank className='item-a' name={this.state.user.name}/>
                 <NoRank className='' entries={this.state.user.entries}/>
                 <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onPictureSubmit={this.onPictureSubmit}
                    togglePop={this.togglePop}/>
                 <FaceRecognition className='item-e' box={boxes} imageUrl={imageUrl} />  
                 <Image />  
              </div>             
            </div>          
          : (route === 'signin' 
            ? <div>               
                <SignIn className='' onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
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
