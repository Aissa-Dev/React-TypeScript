type HeadingProps = {
  children: string;
  x: number;
};
export const Heading = (props: HeadingProps) => {
  return (
    <h2>
      {props.children} | age: {props.x}
    </h2>
  );
};
