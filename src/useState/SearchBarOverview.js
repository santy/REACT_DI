import { useState } from 'react';
import SearchBar from './SearchBar';
import Overview from './Overview';


function SearchBarOverview() {
    const [searchTerm, setSearchTerm] = useState('');
    function updateSearchTermHandler(event) {
        setSearchTerm(event.target.value);
    };
    
    return (
        <>
            <SearchBar onUpdateSearch={updateSearchTermHandler} />
            <Overview currentTerm={searchTerm} />
        </>
        );
    };

export default SearchBarOverview;