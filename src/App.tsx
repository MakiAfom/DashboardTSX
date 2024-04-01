import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/navbar/NavBar";
import Sidebar from "./component/sidebar/Sidebar";
import Events from "./component/eventCalander/Events";
import Profilemgmt from "./component/profilemgmt/Profilemgmt";
//import Award from "./component/achievmentAward/award";
// import Communication from "./component/communicationtool/Communication";

// import Resource from "./component/traningResource/Resource";
// import OpportunityList from "./component/volunteeropportunity/OpportunityList";
import Resources from "./component/Resources";
import Survey from "./component/feedbackSurvey/Survey";

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
        <Route path="/survey" element={<Survey />} />

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
