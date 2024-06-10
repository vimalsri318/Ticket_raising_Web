import React from 'react';
import TicketCard from './TicketCard';

function TicketList({ tickets, deleteTicket, updateTicket, confirmTicket }) {
  return (
    <div>
      {tickets.map((ticket, index) => (
        <TicketCard
          key={index}
          index={index}
          ticket={ticket}
          deleteTicket={deleteTicket}
          updateTicket={updateTicket}
          confirmTicket={confirmTicket}
        />
      ))}
    </div>
  );
}

export default TicketList;
