import React from 'react'

 const Page = ({ pic : {names,pictures,route}  }) => {
    
        
        return (
          
            <div className= 'bold tc pa4'>
          <img alt= ''  src={pictures} className="bd" style={{width :'160px'}}></img>
          <div>
          <input 
          onClick= {route}
          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          type="submit" value={names}/>
          </div>
          </div>
          
                
               
            
                
        )
        }
      
export default Page;
