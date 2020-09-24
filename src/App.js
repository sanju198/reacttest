import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
//import Content from './Content.js';
//import Bannerpopup from './Bannerpopup.js';
import './style.css';
class App extends React.Component {
  state = {
    isActive:true
 }
 handleHide = () =>{
     this.setState({
         isActive: false
     })
 }
	render() {
    
	

	
    return (
      
      <div className="lelubgcolor">
     
      <div>
                <Header />
      
        <Footer/>
      </div>
      </div>
    );
  }
}

export default App;