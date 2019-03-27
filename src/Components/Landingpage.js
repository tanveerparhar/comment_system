import React from 'react';
import './Landingpage.css';
const Landingpage = ({nameEnter,routeChange}) =>{
return (
<div className=" flex  outer">
  <article className="br3 ba  b--black-10 shadow-5 mv4 w-100 w-50-m w-25-l mw8 center  ">
  <main className=" bg-washed-green pa4 black-80">
   
    <div  className="ba b--transparent ">
      <h1 className="f2 center ttu garamond measure">comment app</h1>
    
    <div className="flex justify-center">
     <input 
      onChange={nameEnter} //calls function on detecting input change 
      className=" ph3 pv2  ba b--black bg-transparent f5 grow dib " 
      type="text"
      placeholder="Enter your name" 
      />
    </div>
    <div className=" mt3 flex justify-center">
      <input 
      onClick={() => routeChange('commentPage')} //calls function when button clicked
      className=" br3 ph3 pv2 ba b--black bg-transparent grow pointer f5 dib" 
      type="submit"
      value="Register" 
      />
    </div>
  </div>
</main>
</article>
</div>
  );
}
export default Landingpage;