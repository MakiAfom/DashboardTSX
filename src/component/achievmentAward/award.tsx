import React from 'react';

// Define an interface for the component's props
interface AwardProps {
  name: string; // Example prop for the award's name
}

const Award: React.FC<AwardProps> = ({ name }) => {
  return <div>{name}</div>; // Use the name prop in the component
};

export default Award;
