"use client";

import About from "./components/about";
import Program from "./components/program";
import Organizers from "./components/organizers";
import Speakers from "./components/speakers";
import StudentOrganizers from "./components/studentOrganizers";

const App = () => {
  return (
    <>
      <About />
      <Program />
      <Speakers />
      <Organizers />
      <StudentOrganizers />
    </>
  );
};

export default App;
