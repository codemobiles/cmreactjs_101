import React from "react";

type Props = {
  label: string;
  btnLabel?: string;
};

// JSX
export default function MyComponent(props: Props) {
  return (
    <div>
      <hr />
      <form onSubmit={() => alert("Hey")}>
        <label>{props.label}: </label>
        <br />
        <input
          type="text"
          name="your_message"
          id="your_message"
          onChange={(event) => console.log(event.target.value)}
        />
        <br />
        <button>{props.btnLabel ? props.btnLabel : "Ok"}</button>
      </form>
    </div>
  );
}
