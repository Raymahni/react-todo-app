import "./BaseDatePicker.css";

function BaseDatePicker(props) {
  return (
    <div className="Input-date-picker w-100 m-b-6">
      {props.hideTitle ? null : <p className="Title">{props.title}</p>}
      {/* Emitting the input value on input */}
      <input type="date" onInput={(e) => props.emitInput(e.target.value)} />
    </div>
  );
}

export default BaseDatePicker;
