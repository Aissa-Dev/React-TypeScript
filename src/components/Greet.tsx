type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggeIn: boolean;
};
export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggeIn
        ? ` welcom ${props.name} you have ${messageCount} unread messages`
        : `welcome guest`}
    </div>
  );
};
