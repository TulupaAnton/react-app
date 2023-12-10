import { useContext } from "react";
import { createContext } from "react";
const DataContext = createContext("default");
const UserContext = createContext(null);

function App() {
  const data = "data in App";
  const user = { name: "Test", surname: "Testovych" };
  return (
    <UserContext.Provider value={user}>
      <DataContext.Provider value={data}>
        <Child />
      </DataContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

function Child() {
  return <ChildChild />;
}

function ChildChild() {
  const data = useContext(DataContext);
  return (
    <div>
      {data}
      <ChildChildChild />
    </div>
  );
}

function ChildChildChild() {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
}
