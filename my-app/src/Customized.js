import React, { Component } from 'react';
import './App.css';
import cust from './cust.jpg';
import helloo from './Hello.PNG';


class Customized extends Component{
constructor(){
   super();
   this.state={};
}
GetNow = () =>
{
   fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%253F", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "7af3820cdamshd05885df112a538p19f2b5jsn5c2c326c458d"
   },
   "mode": 'no-cors'
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
}

  render()
    {
     return(
     <div>
         <br>
         </br>
         <div>
      <img  src={cust}  className="custom" alt="ah"/>
         </div>
         <br>
          </br>
          <div>
              
              <h1 className='text'>All the plans are made by the 3 time Champ. No assistants are involved in the actual making of the plans. Once the purchase is made you will receive the plans within 14 days after completing the questionnaire. After receiving the programs feel free to reply to Durrah with any questions you might have regarding the customized program tailored for your schedule, body type, and goals!</h1>
          </div>
         <div>
         <img  src={helloo}  className="tof1" alt="hey"/>
      <button onClick={() => this.GetNow()}className='but1'>Get Now</button>

         </div>
         <div>
           
         </div>
     
 </div>

    );
}}
export default Customized;