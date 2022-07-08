import React from "react";
import fit from './img/crossfit.webp';
import ket from './img/Kettle.png';
import str from './img/strength.jpg';
import zum from './img/zumba.png';
import './Information.css';

class Information extends React.Component{
   render() {
      return <div className="Info">
    <h2>Our Facilities</h2>
    <div id="main-content" className="container">
      <h3 align="center" >Training Strength</h3>
            <div className="rowC">
               <img  className="photo" src={str}/><br/>
                Strength training, like resistance training, uses opposing force to build strength across your body and increase your muscle mass. Transformers Gym is well equipped for Strength training
            </div>
    </div>
    <br/>
    <section id="main-content" className="container">
      <h3 align="center" >Crossfit</h3>
            <div className="rowC">
               <img  className="photo" src={fit}/><br/>
               You will look at Cross Fit as a completely new thing Transformers Gyms is one of the very few gyms in the city that boasts of a separate CrossFit Junction.
            </div>
    </section>
    <br/>
    <section id="main-content" className="container">
      <h3 align="center" >Kettlebell / Plyometric / Tyre</h3>
            <div className="rowC">
               <img  className="photo" src={ket}/><br/>
               Kettlebells can be a game-changing tool in your workout. Transformers Gyms is a host for all kinds of equipment be it free weights or Kettlebells.
            </div>
    </section>
    <br/>
    <section id="main-content" className="container">
      <h3 align="center" >Zumba</h3>
            <div className="rowC">
               <img  className="photo" src={zum}/><br/>
               High-energy classes are set to upbeat music and feature choreographed dance numbers. Grooving to the beats of salsa, flamenco, and merengue music feels more like a dance party than a workout.
            </div>
    </section>
    </div>
   }
}
export default Information;