import "./BaseInput.css";

function BaseInput(props) {
  return (
    <div
      className={`Input-field ${props.noMarginBottom ? "" : "m-b-6"} ${
        props.customWidth ? props.customWidth : "w-100"
      }`}
    >
      {props.hideTitle ? null : <p className="Title">{props.title}</p>}
      {/* Emitting the input value on input */}
      <input
        placeholder={props.placeholder}
        onInput={(e) => props.emitInput(e.target.value)}
      />
    </div>
  );
}

export default BaseInput;
