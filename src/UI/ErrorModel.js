import classes from "./ErrorModel.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onHandleError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onHandleError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModel;
