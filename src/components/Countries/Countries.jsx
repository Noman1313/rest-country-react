import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    const [visitedFlags, setVisitedFlags] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
        // console.log('add to visited country');
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleAddFlags = flag =>{
        // console.log('adding flag');
        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
    }

    return (
        <>
            {/* visited count */}
            <h3>Country : {countries.length}</h3>
            <div>
                <h4>Visited Countrise List : {visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* visited flag */}
            <div className="flags-container">
                {
                    visitedFlags.map((flag, idx) => <img src={flag} key={idx}></img>)
                }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        handleVisitedCountry={handleVisitedCountry} 
                        handleAddFlags={handleAddFlags}
                        country={country}>
                    </Country>)
                }
            </div>
        </>
    );
};

export default Countries;