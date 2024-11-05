import React from 'react';
import DownIcon from '../assets/down.svg';

const SortByDropdown = ({ onSortByChange }) => {
  const handleChange = (event) => {
    onSortByChange(event.target.value);
  };

  return (
    <div className="sort-by-dropdown">
      <select onChange={handleChange}>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
      <img src={DownIcon} alt="Down Icon" />
    </div>
  );
};

export default SortByDropdown;