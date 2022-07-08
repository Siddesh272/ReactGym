import React from 'react';
import './Content.css';
import './Bmi'
import Bmi from './Bmi';


export default function Content() {
  
  const openInNewTab = url => {
    window.open(url,'noreferrer');
  };
     return <div className="content">
     <h1 id="demo">DESIGN YOUR PHYSIQUE</h1>
     <p>Subscribe Transformer Fitness Youtube Channel to watch more videos,
       <br/> Press the bell icon to get latest update</p>
    <div> 
      <button type="button" className='But' onClick={() => openInNewTab('https://www.muscleandfitness.com/')}><span></span>FITNESS TIPS</button>
    </div> 
    <Bmi/>
    </div>
}
