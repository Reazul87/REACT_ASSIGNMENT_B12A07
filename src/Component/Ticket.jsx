import Calender from "../assets/ri_calendar-line.png";

const Ticket = ({ ticket, handleStart }) => {
  return (
    <div
      onClick={() => handleStart(ticket)}
      className="p-3 shadow-md border text-[#001931] border-gray-200"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium">{ticket.title}</h1>
        <div
          className={`${
            ticket.status !== "Open" && ticket.status !== "In-Progress"
              ? "bg-[#a9adab83] h-10"
              : ""
          } ${ticket.status === "Open" ? "bg-[#B9F8CF] h-10" : ""} ${
            ticket.status === "In-Progress" ? "bg-[#F8F3B9] h-10 w-[150px]" : ""
          } rounded-4xl  badge p-2`}
        >
          <div
            className={`${
              ticket.status !== "Open" && ticket.status !== "In-Progress"
                ? "bg-[#f5f3f383]"
                : ""
            } ${ticket.status === "Open" ? "bg-[#02A53B]" : ""} ${
              ticket.status === "In-Progress" ? "bg-[#FEBB0C]" : ""
            } h-4 w-4 rounded-full`}
          ></div>
          <div
            className={`${ticket.status === "Open" ? "text-[#02A53B]" : ""} ${
              ticket.status === "In-Progress" ? "text-[#9C7700]" : ""
            } ${
              ticket.status !== "Open" && ticket.status !== "In-Progress"
                ? "text-[#6d6565]"
                : ""
            }`}
          >
            {ticket.status}
          </div>
        </div>
      </div>
      <p className="py-4 text-[#627382]">{ticket.description}</p>
      <div className="text-sm text-[#627382] flex justify-between">
        <h4>{ticket.id}</h4>
        <h2
          className={`${
            ticket.priority == "HIGH PRIORITY" ? "text-[#F83044]" : ""
          } 
          ${ticket.priority == "LOW PRIORITY" ? "text-[#02A53B]" : ""}
           ${ticket.priority == "MEDIUM PRIORITY" ? "text-[#FEBB0C]" : ""}`}
        >
          {ticket.priority}
        </h2>
        <p className="">{ticket.customer}</p>
        <span className="flex items-center">
          <img
            className="h-5 w-5 mr-1"
            src={`${Calender}`}
            alt="ri_calendar-line.png"
          />
          {ticket.createdAt}
        </span>
      </div>
    </div>
  );
};

export default Ticket;
