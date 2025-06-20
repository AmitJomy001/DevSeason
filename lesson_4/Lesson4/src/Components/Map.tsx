const Map = () => {
  const items = ["A", "B", "C", "D", "E"];
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {" "}
            {index + 1} . {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
