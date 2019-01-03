import React, { Component } from 'react';
import arrow from '../assets/downArrow.png';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{height:'100vh',width:'100vw', backgroundColor:'#99CED3', paddingTop:'50px'}}>
        	<div style={{display:'flex', alignItems:'center',justifyContent:'center',height:'100%', flexDirection:'column', position:'relative'}}>
        		<h1>Hello, my name is Shivani Aggarwal.</h1>
        		<h2>I am a Full Stack Developer</h2>
        		<img src={arrow} alt='down arrow' width='50px' height='50px' style={{position:'absolute', bottom:'80px'}}/>
        	</div>
        </div>
      </div>
    );
  }
}
export default Home;