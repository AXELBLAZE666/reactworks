import React from 'react'

function home() {
  return (
    <div className='home-section' style={{display:'flex', alignItems:'center', justifyContent: 'space-around'}}>
      <div><img src="./images/pexels-lynxexotics-3802510.jpg" alt="car" /></div>
      <div>
        <h2>heading2</h2>
        <p>this is an example text<br/>this is an example text<br/>this is an example text </p>
      </div>
    </div>
  )
}

export default home
