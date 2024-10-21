function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;  // List of elements (<li>)
        })}
      </ul>
    </div>
  );
}
// It becomes a list of elements directly in the JSX inside the map() function.
//  Each <li> is treated as an individual element, not a custom React component.