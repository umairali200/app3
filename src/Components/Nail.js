import React, { Component } from 'react'
import N1 from '../N1.jpg';
import N2 from '../N2.jpg';
import N3 from '../N3.jpg';
import N4 from '../N4.jpg';
import N5 from '../N5.jpg';
import N6 from '../N6.jpg';
import N7 from '../N7.jpg';
import NailItems from './NailItems';
 class Nail extends Component {
   state = {
       items : [
        {
            id : '1',
            object : N1,
            color : 'Blue'
        },
        {
            id : '2',
            object : N2,
            color : 'Black'
        },
        {
            id : '3',
            object : N3,
            color : 'Green'
        },
          {
            id : '4',
            object : N4,
            color : 'Red'
        },
        {
            id : '5',
            object : N5,
            color : 'Pink'
        },
       
        {
            id : '6',
            object : N6,
            color : 'Orange'
        },
        {
            id : '7',
            object : N7,
            color : 'Green'
        },
    ]

   };
   
    render() {
        return (
            <div style={userStyle}>
           {this.state.items.map((item =>
                    <NailItems key={item.id} item={item}/>
                    ))}
                   
            </div>
        )
    }
}
const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'
}
export default Nail
