import React , {Component}  from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Profile from './assets/profle.png';

class App extends Component {
   
   state = {
       displayBio : false
   }

   toggleDisplayBio = () =>{ 
       this.setState({ displayBio: !this.state.displayBio }) 
   }

   render(){
       return(
         <div>
            <img src={Profile} style={{height:200, width:200, borderRadius:'50%',border:"2px solid black"}}/>
            <h1>Hello!</h1>
            <p>My name is <span class="text-danger">Rohit Sharma</span> I'm a <span class="text-danger">Software engineer</span></p>
            <p>I am always looking forward to work on meaningful projects</p>
            {
                this.state.displayBio ? (
                    <div>
                       <p>I live in <span className="text-success">Chandigarh,India</span> and <span className="text-success">code everyday.</span></p>
                       <p>My favorite language is JavaScript, and I think ReactJs is awesome.</p>
                       <p>Besides coding I love Music.</p>
                       <button onClick={this.toggleDisplayBio} className="btn btn-primary">Show less</button>
                    </div>
                ): ( 
                <button onClick={this.toggleDisplayBio} className="btn btn-primary">Show More</button>
                )
            }
            <hr/>
            <h1>Highlighted Projects</h1>     
            <Projects/>
            <hr/>
            <SocialProfiles/>
         </div>
       )
    }
}

export default App;