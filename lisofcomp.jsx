function ListItem(props) {
    return <li>{props.animal}</li>;  // A custom React component
  }
  
  function List(props) {
    return (
      <ul>
        {props.animals.map((animal) => {
          return <ListItem key={animal} animal={animal} />;  // List of components (<ListItem />)
        })}
      </ul>
    );
  }
  
  function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }
//   It becomes a list of components in the JSX when the map() function returns custom React components like <ListItem />.  