import React, { useState } from 'react';

function TicketCard({ index, ticket, deleteTicket, updateTicket, confirmTicket }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(ticket.name);
  const [description, setDescription] = useState(ticket.description);
  const [email, setEmail] = useState(ticket.email);
  const [priority, setPriority] = useState(ticket.priority);
  const [dueDate, setDueDate] = useState(ticket.dueDate);

  const handleUpdate = () => {
    updateTicket(index, { name, description, email, priority, dueDate, confirmed: ticket.confirmed });
    setIsEditing(false);
  };

  return (
    <div className="ticket-card" style={{ border: ticket.confirmed ? '2px solid green' : '1px solid black' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{ticket.name}</h3>
          <p>{ticket.description}</p>
          <p>Email: {ticket.email}</p>
          <p>Priority: {ticket.priority}</p>
          <p>Due Date: {ticket.dueDate}</p>
        </>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <button onClick={() => deleteTicket(index)}>Delete</button>
      <button onClick={() => confirmTicket(index)}>
        {ticket.confirmed ? 'Confirmed' : 'Confirm'}
      </button>
    </div>
  );
}

export default TicketCard;
