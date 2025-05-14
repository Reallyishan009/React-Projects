import React from 'react';
import { useState, useEffect } from 'react';
import { FALLBACK_COUNTRIES, FALLBACK_HOLIDAYS } from './fallbackData';
import './App.css';

// Create a fully working holiday app with no dependencies on external components
const App = () => {
  const [countries, setCountries] = useState(FALLBACK_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState(FALLBACK_COUNTRIES[0].isoCode);
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiWorking, setApiWorking] = useState(false);

  // Fetch countries on initial load
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Try Nager.Date API which is more reliable
        const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
        
        if (!response.ok) {
          throw new Error('API not responding');
        }
        
        const data = await response.json();
        
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Invalid data format');
        }
        
        const formattedCountries = data.map(country => ({
          isoCode: country.countryCode,
          name: country.name
        }));
        
        setCountries(formattedCountries);
        setSelectedCountry(formattedCountries[0].isoCode);
        setApiWorking(true);
      } catch (err) {
        console.error('Using fallback country data:', err);
        // Already using fallback data from initialization
      }
    };

    fetchCountries();
  }, []);

  // Fetch holidays when selected country changes
  useEffect(() => {
    const fetchHolidays = async () => {
      if (!selectedCountry) {
        setHolidays([]);
        return;
      }
      
      setLoading(true);
      setError(null);
      
      if (apiWorking) {
        try {
          const url = `https://date.nager.at/api/v3/PublicHolidays/2025/${selectedCountry}`;
          const response = await fetch(url);
          
          if (!response.ok) {
            throw new Error('API holidays not responding');
          }
          
          const data = await response.json();
          
          if (!Array.isArray(data)) {
            throw new Error('Invalid holidays data format');
          }
          
          const formattedHolidays = data.map(holiday => ({
            id: `holiday-${Math.random().toString(36).substring(2, 11)}`,
            name: holiday.name || 'Unknown Holiday',
            date: holiday.date
          }));
          
          setHolidays(formattedHolidays);
        } catch (err) {
          console.error('Using fallback holiday data:', err);
          // Fall back to local data
          const fallbackHolidays = FALLBACK_HOLIDAYS[selectedCountry] || [];
          setHolidays(fallbackHolidays);
          if (fallbackHolidays.length === 0) {
            setError('No holiday data available for this country.');
          }
        }
      } else {
        // Use local fallback data from the start
        const countryHolidays = FALLBACK_HOLIDAYS[selectedCountry] || [];
        setHolidays(countryHolidays);
        if (countryHolidays.length === 0 && selectedCountry !== FALLBACK_COUNTRIES[0].isoCode) {
          setError('No holiday data available for this country. Try selecting the United States.');
        }
      }
      
      setLoading(false);
    };

    fetchHolidays();
  }, [selectedCountry, apiWorking]);

  // Country Selector Component
  const CountrySelector = () => {
    return (
      <select 
        value={selectedCountry} 
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="country-selector"
      >
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

  // Holiday List Component
  const HolidayList = () => {
    if (holidays.length === 0) {
      return <p className="no-holidays">No holidays found for this country.</p>;
    }

    return (
      <div className="holiday-container">
        <h2>Holidays for 2025</h2>
        <ul className="holiday-list">
          {holidays.map((holiday) => {
            // Format the date to be more readable
            const date = new Date(holiday.date);
            const formattedDate = date.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <li key={holiday.id} className="holiday-item">
                <span className="holiday-name">{holiday.name}</span>
                <span className="holiday-date">{formattedDate}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="app-container">
      <h1>Public Holidays 2025</h1>
      
      <div className="selector-container">
        <label htmlFor="country-select">Select a country: </label>
        <CountrySelector />
      </div>
      
      {loading && <p className="loading">Loading holidays...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <HolidayList />}
      
      {!apiWorking && (
        <div className="api-notice">
          <p>Note: Using offline data as holiday APIs are currently unavailable.</p>
        </div>
      )}
    </div>
  );
};

export default App;