import React, { useState } from 'react';

const AddTicketForm = ({ onAddTicket }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(0);
  const [assignee, setAssignee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      title,
      description,
      priority,
      assignee,
      status: 'backlog',
    };
    onAddTicket(newTicket);
    setTitle('');
    setDescription('');
    setPriority(0);
    setAssignee('');
  };

  return (
    <div className="add-ticket-form">
      <h2>Add New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select value={priority} onChange={(e) => setPriority(parseInt(e.target.value))}>
          <option value={0}>No Priority</option>
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
          <option value={4}>Urgent</option>
        </select>
        <input
          type="text"
          placeholder="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <button type="submit">Add Ticket</button>
      </form>
    </div>
  );
};

export default AddTicketForm;