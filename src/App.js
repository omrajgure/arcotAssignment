import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { useState } from "react";
function App() {
  const [hamburgerClicked, set_hamburgerClicked] = useState(false);

  return (
    <div>
      <Navbar set_hamburgerClicked={set_hamburgerClicked} />
      <Hero hamburgerClicked={hamburgerClicked} />
    </div>
  );
}

export default App;
