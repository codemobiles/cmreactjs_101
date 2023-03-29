import React from "react";
import BasicButtons from "./components/BasicButtons";
import IconLabelButtons from "./components/IconLabelButtons";
import MyComponent from "./components/MyComponent";

type Props = {};

export default function App({}: Props) {
  let var1: number = 0;
  let var2: string = "lek";
  let var3: boolean = false;

  const [state1, setState1] = React.useState(0);

  // function handleUpdateClicked() {
  //   alert("1234");
  // }

  // MVVM
  const handleUpdateClicked = () => {
    setState1(state1 + 1);
  };

  return (
    <div>
      <h3>App</h3>
      <BasicButtons />
      <IconLabelButtons />
      <button onClick={handleUpdateClicked}>Update</button>
      <div>var1 = {var1}</div>
      <div>var2 = {var2}</div>
      <div>var3 = {var3 ? "lek" : "kan"}</div>
      <div>state1 = {state1}</div>
      <MyComponent
        label="Password"
        btnLabel="Submit"
        onSubmit={(result) => alert(result)}
      />
    </div>
  );
}
