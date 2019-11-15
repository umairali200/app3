import React, { Component } from 'react'


class Navbar extends Component {
   
   static defaultProps = {
       title : 'Cosmetics',
       icon : 'fas fa-store'
   }
   
   
    render() {

        return (
           <div >
               <h1 className='bg-light-blue black pa2'>
                   <i className = {this.props.icon}/> {this.props.title}
               </h1>
           </div>
        )
    }
}

export default Navbar
