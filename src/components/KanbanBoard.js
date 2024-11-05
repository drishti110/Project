import React, { useEffect, useState } from 'react';
import { getTickets, createTicket } from '../api/api';
import TicketCard from './TicketCard';
import Header from './Header';
import DisplayIcon from '../assets/display.svg';
import ThreeDotMenuIcon from '../assets/3-dot-menu.svg';
import AddIcon from '../assets/add.svg';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  // Sample data for tickets
  const sampleTickets = [
    { id: 1, title: 'Fix login bug', status: 'To Do', priority: 3, assignee: 'Alice' },
    { id: 2, title: 'Add unit tests', status: 'In Progress', priority: 2, assignee: 'Bob' },
    { id: 3, title: 'Code review', status: 'Done', priority: 1, assignee: 'Carol' },
    { id: 4, title: 'Improve UI design', status: 'To Do', priority: 4, assignee: 'Dave' },
    { id: 5, title: 'Optimize database', status: 'In Progress', priority: 1, assignee: 'Eve' },
    { id: 6, title: 'Documentation update', status: 'Done', priority: 2, assignee: 'Frank' },
    // Add more sample tickets as needed
  ];

  useEffect(() => {
    setTickets(sampleTickets); // Replace with fetchTickets() for actual data
  }, []);

  const handleGroupByChange = (value) => setGroupBy(value);
  const handleSortByChange = (value) => setSortBy(value);

  const groupTickets = () => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const groupKey = groupBy === 'status'
        ? ticket.status
        : groupBy === 'user'
        ? ticket.assignee
        : 'priority_' + ticket.priority;

      if (!grouped[groupKey]) grouped[groupKey] = [];
      grouped[groupKey].push(ticket);
    });
    return grouped;
  };

  const sortTickets = (tickets) => {
    return [...tickets].sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const groupedTickets = groupTickets();
  const columns = Object.keys(groupedTickets);

  return (
    <div className="kanban-board">
      <div className="header-wrapper" style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <img src={DisplayIcon} alt="Display" style={{ marginRight: '10px' }} />
        <Header onGroupByChange={handleGroupByChange} onSortByChange={handleSortByChange} />
      </div>

      <div className="board-columns" style={{ display: 'flex', paddingLeft: '10px' }}>
        {columns.map((column) => (
          <div key={column} className="column" style={{ padding: '10px', flex: 1 }}>
            <div className="column-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
              <h2>{column.replace('_', ' ')}</h2>
              <img src={AddIcon} alt="Add" className="add-ticket-icon" style={{ cursor: 'pointer' }} />
              <img src={ThreeDotMenuIcon} alt="Options" className="three-dot-icon" style={{ marginLeft: '5px', cursor: 'pointer' }} />
            </div>
            {sortTickets(groupedTickets[column]).map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
