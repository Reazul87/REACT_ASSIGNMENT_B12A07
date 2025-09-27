import { use, useState } from "react";
import Ticket from "./Ticket";
import Container from "./Container";
import DashboardHead from "./DashboardHead";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";
import StatusBox from "./StatusBox";
import { toast } from "react-toastify";

const Tickets = ({ fetchPromise }) => {
  const tickets = use(fetchPromise);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const availableTicket = tickets.filter(
    (ticket) =>
      !inProgress.find((x) => x.id === ticket.id) &&
      !resolved.find((y) => y.id === ticket.id)
  );

  const handleStart = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      toast(`${ticket.title} Are In-Progress`);
    }
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    toast(`${ticket.title} Are Resolved`);
  };

  return (
    <Container>
      <StatusBox resolved={resolved} inProgress={inProgress} />
      <div className="mb-10 mt-2.5 grid grid-cols-4 gap-4">
        <DashboardHead />
        <div className="col-span-3 grid grid-cols-2 gap-3.5">
          {availableTicket.length === 0 ? (
            <div className="col-span-3 p-8 flex flex-col items-center justify-center rounded-xl shadow-md">
              <div className="text-5xl mb-3">🎉</div>
              <p className="text-xl font-semibold text-purple-800">
                No customer tickets available
              </p>
              <p className="text-sm text-blue-900 mt-2">
                You’re all caught up! Relax and enjoy your day 🌈
              </p>
            </div>
          ) : (
            availableTicket.map((ticket) => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                handleStart={handleStart}
              />
            ))
          )}
        </div>
        <div className="col-span-1 h-screen">
          {inProgress.length === 0 ? (
            <p className="text-[#627382] mb-4">
              Select a ticket to add to Task Status
            </p>
          ) : (
            inProgress.map((ticket) => (
              <TaskStatus
                handleComplete={handleComplete}
                key={ticket.id}
                ticket={ticket}
              ></TaskStatus>
            ))
          )}

          <h1 className="text-[#34485A] font-semibold text-2xl">
            Resolved Task
          </h1>
          <ResolvedTask tickets={resolved}></ResolvedTask>
        </div>
      </div>
    </Container>
  );
};

export default Tickets;
