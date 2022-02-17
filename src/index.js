import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";

  const renderNameTag = (name) => <NameTag name={name.person} key={name.id} />; 
class App extends Component {
  state = { names: [export const names = ["Doug","Mom", "Meredith","Kwan","KC","Caleb","Courtney","Kayla","Iyana"] };
  render() {
    const NameTagElements = this.state.names.map(renderNameTag);
    return (
        <div className="App">
          <h1>Name Tag Generator</h1>
          {NameTagElements}
        </div>
      );
    }
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

