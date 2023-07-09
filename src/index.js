import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

let  d = new Date("July 21, 1983 1:15:00");
d=d.getHours();

const cssStyle={

}

let greeting="";
if(d>=1 && d<12){
  greeting="Good morning";
  cssStyle.color="green";
}
else if(d>=12 && d<20){
greeting="good afternoon";
cssStyle.color="Orange";
}else{
  greeting="good Night";
  cssStyle.color="black";
}

 ReactDOM.render(
   <>
   <div>
   <h1>Hello ,sir   <span style={cssStyle}>
   {greeting}</span>
   </h1>
   </div>
   </>


, document.getElementById('root'));