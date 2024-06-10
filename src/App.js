import React, { useState } from 'react';
import TicketForm from './TicketForm';
import TicketList from './TicketList';
import './App.css'; // Import the CSS

function App() {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  const deleteTicket = (index) => {
    const newTickets = tickets.filter((_, i) => i !== index);
    setTickets(newTickets);
  };

  const updateTicket = (index, updatedTicket) => {
    const newTickets = tickets.map((ticket, i) => (i === index ? updatedTicket : ticket));
    setTickets(newTickets);
  };

  const confirmTicket = (index) => {
    const newTickets = tickets.map((ticket, i) =>
      i === index ? { ...ticket, confirmed: true } : ticket
    );
    setTickets(newTickets);
  };

  return (
    <div className="App">
      <h1>Ticket Management System</h1>
      <div className="container">
        <TicketForm addTicket={addTicket} />
        <TicketList
          tickets={tickets}
          deleteTicket={deleteTicket}
          updateTicket={updateTicket}
          confirmTicket={confirmTicket}
        />
      </div>
    </div>
  );
}

export default App;
