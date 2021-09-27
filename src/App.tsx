import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    firstName: "aissa",
    lastName: "mihi"
  };

  const nameList = [
    {
      first: "aissa",
      last: "mihi"
    },
    {
      first: "mouad",
      last: "balegh"
    },
    {
      first: "hachimi",
      last: "djalil"
    }
  ];
  return (
    <div className="App">
      <Greet name="aissa mihi" isLoggeIn={true} messageCount={10} />
      <Greet name="aissa mihi" isLoggeIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading x={10}> Placeholder text from app.tsx</Heading>
      <Oscar>
        <Heading x={16}> Placeholder text from app.tsx</Heading>
      </Oscar>
    </div>
  );
}

export default App;
