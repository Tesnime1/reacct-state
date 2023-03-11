import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    const person = {
      fullName: "tesnime",
      bio: "i dont have one yet .",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Dev",
    };

    this.state = {
      person: person,
      show: false,
      timeInterval: 0,
    };

    this.toggleShow = () => {
      this.setState((prevState) => ({ show: !prevState.show }));
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);

    this.intervalId = intervalId;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { person, show, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time Interval: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
