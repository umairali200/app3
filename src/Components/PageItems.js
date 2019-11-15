import React, { Component } from 'react'
import Page from './Page';
import Nail from '../Nail.jpg';
import Eye from '../Eye.jpg';
import Shade from '../Shade.jpg';

class PageItems extends Component {
    
    
    
    state = {
        pics : [
            {   
              id : 1,
                pictures: Nail,
                names : 'Nail Polish',
                route : this.props.onNail
            },
            {
                id :2,
                pictures : Eye,
                names : 'Eye Lashes',
                route : this.props.onEye
            },
            {
                id : 3,
                pictures : Shade,
                names : 'Shades',
                route : this.props.onShade
            }
        ]
        };
    render() {
     
       
        return (
            <div className='col' style={userStyle}>
           {this.state.pics.map((pic =>
                    <Page key={pic.id} pic={pic}/>
                    ))}
                   
            </div>
        )
    }
}
const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '2rem',
    
}
export default PageItems
