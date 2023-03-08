import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import image from "./assets/profile.jpg";

function App() {
  const handleName = (fullName) => {
    alert(`Name: ${fullName}`);
  };
  return (
    <div className="App">
      <Profile
        fullName="tesnime"
        bio="I'm a web developer."
        profession="Web Developer"
        handleName={handleName}
      />
      <img src={image} alt="Profile" />
    </div>
  );
}

export default App;
