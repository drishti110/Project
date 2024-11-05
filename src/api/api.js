// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.quicksell.co/v1/internal/frontend-assignment',
});

// Mock API data for testing
const sampleTickets = [
  {
    id: 1,
    title: "Fix login bug",
    description: "Users cannot log in with valid credentials",
    priority: 4,
    assignee: "John Doe",
    status: "backlog",
  },
  {
    id: 2,
    title: "Design homepage",
    description: "Create a new design for the homepage",
    priority: 3,
    assignee: "Jane Smith",
    status: "in_progress",
  },
  {
    id: 3,
    title: "Database optimization",
    description: "Optimize database queries",
    priority: 2,
    assignee: "John Doe",
    status: "to_do",
  },
  {
    id: 4,
    title: "Implement user profile",
    description: "Add user profile page",
    priority: 1,
    assignee: "Alex Johnson",
    status: "done",
  },
];

export const getTickets = async () => {
  return { data: sampleTickets };
};

export const createTicket = (ticket) => api.post('/tickets', ticket);
