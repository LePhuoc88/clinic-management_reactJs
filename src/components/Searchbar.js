import React from 'react';
import PropTypes from 'prop-types';
import './Searchbar.scss';
import { GoSearch } from 'react-icons/go';

const SearchBar = ({ searchTerm, onSearchChange, placeholder }) => {
    const handleInputChange = (e) => {
        onSearchChange(e.target.value);
    };

    return (
        <div className="search__item">
            <input
                className="search__item_container"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={placeholder}
            />
            <GoSearch />
        </div>
    );
};

SearchBar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
