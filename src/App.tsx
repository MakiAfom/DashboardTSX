// // Ensure these imports match the actual file paths and names exactly.
// // import Award from './component/achievmentAward/award';
// // import Events from './component/eventCalander/Events';
// import NavBar from "./component/navbar/NavBar";
// import Sidebar from "./component/sidebar/Sidebar";
// // import Profilemgmt from "./component/profilemgmt/Profilemgmt";

// // import OpportunityList from './component/volunteeropportunity/OpportunityList';

// // import Communication from './component/communicationtool/Communication';

// // import Survey from './component/feedbackSurvey/Survey';
// // import Resource from './component/traningResource/Resource';
// // import Resources from './component/Resources';

// function App() {
//   return (
//     <div>
//       {/* Example usage with required props */}
//       {/* <Events title='this is zoom link '/>
//       <OpportunityList /> */}
//       <NavBar />
//       {/* <div> <Resources/></div> */}

//       {/* <Profilemgmt /> */}
//       {/* <Sidebar /> */}

//       {/* <Award name="Entrprenur " />
//        <Communication message="this is a message that can help us discover on what do you do" />
//      <Survey question="Are you ready to Volunteer to different refugee " />
//       <Resource title="Volunteering" onClick={() => console.log("Clicked")} />    */}
//       {/* Use other components as needed */}
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/NavBar";
import Sidebar from "./component/sidebar/Sidebar";
import Events from "./component/eventCalander/Events";
import Profilemgmt from "./component/profilemgmt/Profilemgmt";
// import Award from "./component/achievmentAward/award";
// import Communication from "./component/communicationtool/Communication";
// import Survey from "./component/feedbackSurvey/Survey";
// import Resource from "./component/traningResource/Resource";
// import OpportunityList from "./component/volunteeropportunity/OpportunityList";
import Resources from "./component/Resources";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* 
      <Sidebar /> */}
        <Route path="/events" element={<Events />}></Route>
        <Route path="/profile" element={<Profilemgmt />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Resources" element={<Resources />} />
        {/* <Profilemgmt /> */}
        {/* </Route> */}
        {/* <Route path="/award">
        <Award name="Entrprenur " />
      </Route>
      <Route path="/communication">
        <Communication message="this is a message that can help us discover on what do you do" />
      </Route>{" "} */}
        {/* <Route path="/survey">
        <Survey question="Are you ready to Volunteer to different refugee " />
      </Route>
      <Route path="/resource">
        <Resource title="Volunteering" onClick={() => console.log("Clicked")} />
      </Route>
      <Route path="/opportunities">
        <OpportunityList />
      </Route>
      <Route path="/resources">
        <Resources />
      </Route> */}
      </Routes>
    </div>
  );
}

export default App;
