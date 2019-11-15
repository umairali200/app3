import React, { Component } from 'react'


class Navbar extends Component {
   
   static defaultProps = {
       title : 'Cosmetics',
       icon : 'fas fa-store',
       back : 'Home'
       
   }
   
   
    render() {
        const {onHome} = this.props.onHome
        return (
          
            <nav >
            
            <h1 className='bg-light-blue black pa2'>
                   <i className = {this.props.icon}/> 
                   {this.props.title}
                   <a 
                   onClick={this.props.onHome}
                   className="dtc f6 link dim ba ph3 pv2 mb2 dib fr-l pa2 ma2 black" href="#0">Home</a>
            
               </h1>
            
             
          </nav>
          
        )
        }
        
    }

export default Navbar
