import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import 'tachyons';
import PageItems from './Components/PageItems'
import Nail from './Components/Nail'
import './App.css';
import ShopNow from './Components/ShopNow'
import Background from './Components/Background';
import Eye from './Components/Eye';
import Shade from './Components/Shade'


import Nav from './Components/Nav'
import Foot from './Components/Foot';
class App extends Component {
 
  constructor (props) {
    super (props);
    this.state = {
      route: 'main',
      
    }
  } 

  onHome = () => {
    this.setState({route: 'main'})
  }

  onNail = () => {
    this.setState ({route : 'Nail'})
  }


 onEye = () => {
   this.setState ({route: 'Eye'})
 }
  
 onShade = () => {
   this.setState({route: 'Shade'})
 }

  render (props) {
  
  return (
     
    <div className="App">
    
    {this.state.route === 'main' 
   ? <div> 
     <Navbar/>
     <Background/>
   
   <ShopNow/>
   <PageItems onNail={this.onNail} onEye={this.onEye} onShade={this.onShade}/> 
   <Foot/>
   
  </div>
  :
  <div>
    {this.state.route === 'Nail'    
  ?
  <div>
  <Nav onHome={this.onHome}/>
  <Nail/>
  
  </div>
:
<div>
  {this.state.route === 'Eye' 
?
<div>
<Nav onHome={this.onHome}/>
<Eye/>
</div>
:
<div>
  {this.state.route === 'Shade' 
?
<div>
  <Nav onHome={this.onHome}/>
<Shade/>
</div>
:
<Navbar/>
}
  </div>
}
</div>
    }
  </div> 
  }
    </div>
    
  
  );
}
}
export default App;
