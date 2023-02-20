import "./App.css";
import Sidebar from "./components/Sidebar";
import Users from "./components/Users";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <Users></Users>
    </div>
  );
}

export default App;
