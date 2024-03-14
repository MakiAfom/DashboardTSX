import React from 'react';

// Define an interface for the component's props
interface SurveyProps {
  question: string; // Example prop for the survey question
  // Add any other props you might need, such as a callback function for form submission
}

const Survey: React.FC<SurveyProps> = ({ question }) => {
  return <div>{question}</div>; // Dynamically use the question prop
};

export default Survey;
