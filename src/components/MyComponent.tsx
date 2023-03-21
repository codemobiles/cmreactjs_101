import React from "react";

type Props = {
  label: string;
};

// JSX
export default function MyComponent(props: Props) {
  return (
    <div>
      <hr />
      <form>
        <label>{props.label}: </label>
        <br />
        <input type="text" name="your_message" id="your_message" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
