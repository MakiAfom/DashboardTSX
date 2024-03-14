import React from 'react';

interface OpportunityProps {
  title: string;
  onClick: () => void;
}

const Opportunity: React.FC<OpportunityProps> = ({ title, onClick }) => {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  );
};

// Example usage of the Opportunity component
const OpportunityList: React.FC = () => {
  return (
    <div>
      <Opportunity title="Teach Programming" onClick={() => console.log("Teach Programming clicked")} />
      <Opportunity title="Women volunteerng " onClick={() => console.log("women volunteering clicked")} />
      <Opportunity title="youth invovement " onClick={() => console.log("youth involvement clicked")} />
      {/* Add more opportunities as needed */}
    </div>
  );
};

export default OpportunityList;
