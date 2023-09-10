import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    // const {country, handleVisitedCountry, handleAddFlags} = props;
    return (
        <div>
            <h4>Details </h4>
            <hr />
            {/* <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleAddFlags={handleAddFlags}></CountryData> */}

            <CountryData {...props}></CountryData>

        </div>
    );
};

export default CountryDetails;