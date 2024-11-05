import React from 'react';
import DownIcon from '../assets/down.svg';

const GroupByDropdown = ({ onGroupByChange }) => {
  const handleChange = (event) => {
    onGroupByChange(event.target.value);
  };

  return (
    <div className="group-by-dropdown">
      <select onChange={handleChange}>
        <option value="status">Group by Status</option>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>
      <img src={DownIcon} alt="Down Icon" />
    </div>
  );
};

export default GroupByDropdown;