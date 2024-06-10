import React, { useState } from "react";

function Ticket() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [tickets, setTickets] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTicket = { title, description, status };
    setTickets([...tickets, newTicket]);
    setTitle("");
    setDescription("");
    setStatus("");
  };

  const handleDelete = (index) => {
    setTickets(tickets.filter((ticket, i) => i !== index));
  };

  const handleEdit = (index) => {
    const ticket = tickets[index];
    setTitle(ticket.title);
    setDescription(ticket.description);
    setStatus(ticket.status);
  };

  const handleUpdate = (index) => {
    const updatedTicket = { title, description, status };
    setTickets(tickets.map((ticket, i) => i === index ? updatedTicket : ticket));
  };

  return (
    <div>
      <h1>Ticket Receiving Website</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <label>
          Status:
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            <h2>{ticket.title}</h2>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleUpdate(index)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ticket;