type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      first name : {props.name.firstName} last name : {props.name.lastName}
    </div>
  );
};
