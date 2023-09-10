import { useState } from 'react';
import './country.css'
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({ country, handleVisitedCountry, handleAddFlags}) => {
    // console.log(country);
    const {name, flags,population,area, capital, cca3} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }
    // console.log(handleVisitedCountry);

    // const passWithParams = ()=>{
    //     handleVisitedCountry(country);
    // }


    return (
        <div className={`country ${visited && 'visited'}`}> {/**class condition */}
            <h3 style={{color: visited ? 'purple' : 'black'}}>{name.common}</h3>
            <h4>Capital : {capital? capital[0] : ' Not found'}</h4>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>

            <button onClick={()=>handleAddFlags(country.flags.png)}>Add Flag</button>

            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button> {/*button tuggle */}

            {/* {visited && 'I have visited this Country'} ***one condition  */}
            {visited ? 'I have visited this Country' : 'I want to visit'} {/*ternary */}
            <hr />
            <br />
            <CountryDetails country={country}
             handleVisitedCountry={handleVisitedCountry}
              handleAddFlags={handleAddFlags}></CountryDetails>
        </div>
    );
};

export default Country;