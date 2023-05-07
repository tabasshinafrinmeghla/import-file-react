
import './App.css';
import { useEffect, useState } from 'react';
import Person from './components/Country/Person';
import New from './components/Country/New';


function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
      <New></New>
      <Person></Person>
    </div>
  );
}


function LoadCountries(){
 const [countries , setCountries]= useState ([]);

 useEffect( ()=> {
  fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json())
  // .then(data => console.log(data))
  .then(data=> setCountries(data))

 }, [])
  return(
    <div>
      <h1>hello</h1>
      <h3>all:{countries.length} </h3>
      {
        countries.map(country => console.log(country))
        
      }
       {
        countries.map(country => <p>Name:{country.capital}</p>)
        
      }
      {
        countries.map(country => <Country>Name:{country.name.common} Population{country.population} </Country>)
      }



    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>Name:{props.name}</h2>
      <h3>Population:{props.population}</h3>
    </div>
  )
}



export default App;
