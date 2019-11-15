import React, { Component } from 'react'

class NailItems extends Component {
    render() {
        const {object,color} = this.props.item
        return (
            
                 <div className= 'card text-center grow'>
          <img alt= ''  src={object} style={{width :'120px'}}></img>
          
          <h3>{color}</h3>
          <h3>Rs : 220 /-</h3>
            </div>
            
            
            
            
        )
    }
}

export default NailItems
