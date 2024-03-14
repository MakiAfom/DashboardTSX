import React from 'react';

// Define an interface for the component's props
interface CommunicationProps {
  message: string; // Example prop for a message to display
}

const Communication: React.FC<CommunicationProps> = ({ message }) => {
  return <div>{message}</div>; // Use the message prop in the component
};

export default Communication;
