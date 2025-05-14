import React from 'react';

const CountrySelector = ({ countries = [], selectedCountry, onChange }) => {
    if (countries.length === 0) {
        return <p>Loading countries...</p>;
    }

    return (
        <select 
            value={selectedCountry} 
            onChange={(e) => onChange(e.target.value)}
            className="country-selector"
        >
            <option value="">Select a country</option>
            {countries.map((country) => (
                <option 
                    key={country.isoCode} 
                    value={country.isoCode}
                >
                    {country.name}
                </option>
            ))}
        </select>
    );
};

export default CountrySelector;