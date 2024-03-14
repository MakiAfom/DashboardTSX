import React from 'react';

// Define an interface for the component's props
interface EventsProps {
  title: string; // Example prop for the event's title
}

const Events: React.FC<EventsProps> = ({ title }) => {
  return <div>{title}</div>; // Dynamically render the title prop
};

export default Events;
