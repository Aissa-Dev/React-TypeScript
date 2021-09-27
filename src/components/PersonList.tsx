type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name, i) => (
        <h1 key={i}>
          {name.first} {name.last} i : {i}
        </h1>
      ))}
    </div>
  );
};
