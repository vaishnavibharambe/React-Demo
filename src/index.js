// 1.import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2.get a reference to the div with ID root
const el=document.getElementById('root');


//3.tell react to take control of that element
const root=ReactDOM.createRoot(el);

//4.Create a component
function App(){

// let message="Bye there";
// if(Math.random()>0.5)
// {
//     message="HI There!!";
// }

// const date=new Date();
// const time=date.toLocaleTimeString();
    //return <h4>{new Date().toLocaleTimeString()}</h4>;

const name="Vaishnavi";
const age=23;

return (
    <div>
        <h1> My name is:{name} and age is {age}</h1>
        <input type="number" min={5} max={100} style={{border:'3px solid blue'}}/>
        <textarea autoFocus={true}/>
        <input maxLength={5}/>
        <input placeholder="hi there" />
    </div>
    
);
}

//5.Show the component on the screen.
root.render(<App/>);