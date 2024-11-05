import React, { useState } from 'react';

const Header = ({ onGroupByChange, onSortByChange }) => {
  const [isDisplayOpen, setIsDisplayOpen] = useState(false);

  const toggleDisplayDropdown = () => {
    setIsDisplayOpen(!isDisplayOpen);
  };

  return (
    <header className="kanban-header">
      <div className="display-dropdown-container" style={{ paddingLeft: '20px' }}>
        <button className="display-button" onClick={toggleDisplayDropdown}>
          Display Options
        </button>
        {isDisplayOpen && (
          <div className="display-dropdown">
            <div className="dropdown">
              <label htmlFor="groupBy">Group By:</label>
              <select
                id="groupBy"
                onChange={(e) => onGroupByChange(e.target.value)}
                defaultValue="status"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown">
              <label htmlFor="sortBy">Sort By:</label>
              <select
                id="sortBy"
                onChange={(e) => onSortByChange(e.target.value)}
                defaultValue="priority"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
