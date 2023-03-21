import React from "react";

type Props = {
  label: string;
  btnLabel?: string;
};

// JSX
export default function MyComponent(props: Props) {
  let message = "";

  return (
    <div>
      <hr />
      <form onSubmit={() => alert(message)}>
        <label>{props.label}: </label>
        <br />
        <input
          type="text"
          name="your_message"
          id="your_message"
          onChange={(event) => (message = event.target.value)}
        />
        <br />
        <button>{props.btnLabel ? props.btnLabel : "Ok"}</button>
      </form>
    </div>
  );
}
