// TicketCard.js
import React from 'react';
import HighPriorityIcon from '../assets/high-priority.svg';
import MediumPriorityIcon from '../assets/medium-priority.svg';
import LowPriorityIcon from '../assets/low-priority.svg';
import NoPriorityIcon from '../assets/no-priority.svg';
import UrgentPriorityIcon from '../assets/urgent-priority-color.svg';
import ThreeDotMenuIcon from '../assets/3-dot-menu.svg';

const TicketCard = ({ ticket }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return UrgentPriorityIcon;
      case 3: return HighPriorityIcon;
      case 2: return MediumPriorityIcon;
      case 1: return LowPriorityIcon;
      default: return NoPriorityIcon;
    }
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <img src={getPriorityIcon(ticket.priority)} alt="Priority Icon" />
        <img src={ThreeDotMenuIcon} alt="Three Dot Menu Icon" />
      </div>
      <div className="ticket-content">
        <h3>{ticket.title}</h3>
        <p>Assigned to: {ticket.assignee}</p>
        <p>{ticket.description}</p>
      </div>
    </div>
  );
};

export default TicketCard;
