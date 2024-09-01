import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API, API_KEY } from "../weather-api";

const Search = ({ onSelect }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
      if (!inputValue) {
        return { options: [] };
      }
  
      try {
        const response = await fetch(`${GEO_API}/direct?q=${inputValue}&limit=5&appid=${API_KEY}`);
        const responseJSON = await response.json();
  
        const options = responseJSON.map((location) => ({
          value: location,
          label: `${location.name}, ${location.state ? `${location.state}, ` : ''}${location.country}`,
        }));
  
        return { options };
      } catch (error) {
        console.error('Error fetching locations:', error);
        return { options: [] };
      }
    };
  
    const handleChange = (selectedOption) => {
      console.log('Selected Location:', selectedOption?.value);
      onSelect(selectedOption?.value)
      setSearch(null);
    };

  return (
    <div style={{ width: '400px' }}>
      <AsyncPaginate
        value={search}
        loadOptions={loadOptions}
        onChange={handleChange}
        placeholder="Enter city name"
        debounceTimeout={300}
      />
    </div>
  );
};

export default Search;