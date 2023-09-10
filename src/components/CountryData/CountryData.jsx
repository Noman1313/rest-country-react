
const CountryData = ({country, handleVisitedCountry, handleAddFlags}) => {
    console.log('add',country, handleVisitedCountry, handleAddFlags);
    return (
        <div>
            <h4>Data</h4>
            <p>Country Data : {country.name.common}</p>
        </div>
    );
};

export default CountryData;