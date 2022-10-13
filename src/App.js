import React from 'react';
import './App.css';
import Imagecard from './component/Imagecard'
import Magazinecard from './component/Magazinecard';
import Socialstaticcard from './component/Socialstaticcard';
function App() {
  return (
   <>
   <div className="main_card">
   <h3 className="heading"><span className="inner_box">Magazine </span></h3>
    <div className="magazine_card">
     <div className='main_box'>
      <div className='col-box1'>
      <Imagecard />
      </div>
      <div className='col-box2'>
      <Magazinecard />
      </div>
      <div className='col-box3'>
      <Socialstaticcard />
      </div>
     </div>

    </div>
   </div>
   </>
  );
}

export default App;
