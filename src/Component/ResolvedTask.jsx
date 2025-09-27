import React from "react";

const ResolvedTask = ({tickets}) => {
  console.log(tickets);
  if(tickets.length === 0){
    return(<p className="text-[#627382] mt-3.5">No resolved tasks yet.</p>)
  }
  
  return (
    <div>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="p-4 my-4 bg-[#e0e7ff6e] shadow border border-gray-100 rounded-sm"
        >
          <h1 className="text-lg text-[#001931] font-medium">{ticket.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ResolvedTask;
