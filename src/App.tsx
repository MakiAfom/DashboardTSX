
// Ensure these imports match the actual file paths and names exactly.
import Award from './component/achievmentAward/award';
import Events from './component/eventCalander/Events';
import NavBar from './component/navbar/NavBar';
import Sidebar from './component/sidebar/Sidebar';
import Profilemgmt from './component/profilemgmt/Profilemgmt';


import OpportunityList from './component/volunteeropportunity/OpportunityList';

import Communication from './component/communicationtool/Communication';

import Survey from './component/feedbackSurvey/Survey';
import Resource from './component/traningResource/Resource';

function App() {
  return (
    <div>
      {/* Example usage with required props */}
      <Events title='this is zoom link '/>
      <OpportunityList />
      <NavBar />
      <Sidebar />
      <Profilemgmt/>
      <Award name="Entrprenur " />
      <Communication message="this is a message that can help us discover on what do you do" />
      <Survey question="Are you ready to Volunteer to different refugee " />
      <Resource title="Volunteering" onClick={() => console.log("Clicked")} />
      {/* Use other components as needed */}
    </div>
  );
}

export default App;
