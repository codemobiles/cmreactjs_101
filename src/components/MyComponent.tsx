import React from "react";

// JSX
export default function MyComponent(props: any) {
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
