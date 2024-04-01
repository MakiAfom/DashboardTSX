import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

// Define an interface for the component's props
interface EventsProps {
  // title: string; // Example prop for the event's title
}

const Events: React.FC<EventsProps> = () => {
  return (
    <div>
      Im Mikal
      <Link to="/Profile" className="btnmt-4">
        Read More
      </Link>
      <Sidebar
        state={undefined}
        setState={undefined}
        toggleDrawer={undefined}
      />
    </div>
  ); // Dynamically render the title prop
};

export default Events;
