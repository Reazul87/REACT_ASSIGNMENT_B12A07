import Tickets from "./Tickets";
import { Suspense } from "react";

const ticketsData = async () => {
  const promiseData = await fetch("/Customer_Ticket.json");
  return promiseData.json();
};

const fetchPromise = ticketsData();
const Management = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center  h-screen items-center bg-gray-50 col-span-5">
            <span className="w-40 loading bg-gradient-to-r from-pink-500 via-cyan-400 to-emerald-400  loading-spinner loading-lg text-error drop-shadow-2xl"></span>
          </div>
        }
      >
        <Tickets fetchPromise={fetchPromise}></Tickets>
      </Suspense>
    </>
  );
};

export default Management;
