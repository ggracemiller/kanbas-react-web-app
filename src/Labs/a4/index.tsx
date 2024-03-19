import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariable";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return (
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples /> <br />
      <ClickEvent /> <br />
      <PassingDataOnEvent /> <br />
      <PassingFunctions theFunction={sayHello} /> <br />
      <EventObject /> <br />
      <Counter /> <br />
      <BooleanStateVariables /> <br />
      <StringStateVariables /> <br />
      <DateStateVariable /> <br />
      <ObjectStateVariable /> <br />
      <ArrayStateVariable /> <br />
      <ParentStateComponent /> <br />
    </>
  );
};

export default Assignment4;
