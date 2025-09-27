const TaskStatus = ({ handleComplete, ticket }) => {
  return (
    <div>
      <div className="p-4 mb-4 bg-[#FFFFFF] shadow border border-gray-100 rounded-sm">
        <h1 className="text-lg text-[#001931] font-medium">{ticket.title}</h1>
        <button
          className="btn btn-md w-full mt-4 font-semibold rounded-sm text-white bg-[#02A53B]"
          type="button"
          onClick={()=>handleComplete(ticket)}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskStatus;
