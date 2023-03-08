import "./App.css";
import Address from "./components/profile/Address/Address.jsx";
import FullName from "./components/profile/FullName/FullName.jsx";
import ProfilePhoto from "./components/profile/ProfilePhoto.jsx";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
