import React from 'react';

// Correctly define ResourceProps interface
interface ResourceProps {
  title: string; // Example prop for the resource's title
  onClick: () => void; // Example prop for handling click events
}

// Use ResourceProps in your component
const Resource: React.FC<ResourceProps> = ({ title, onClick }) => {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  );
};

export default Resource;
