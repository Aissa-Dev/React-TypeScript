type StatusProps = {
  status: "error" | "success" | "loading";
};
export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading ...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
