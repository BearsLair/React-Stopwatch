export default function Stopwatch(props) {
  return (
    <>
      <div className="stopwatch">
        <h1>
          {props.hour}:{props.minute}:{props.second}
        </h1>
        <div className="stopwatch-btns">
          <button className="start-btn" onClick={props.start}>
            Start
          </button>
          <button className="stop-btn">Stop</button>
          <button className="reset-btn">Reset</button>
        </div>
      </div>
    </>
  );
}
