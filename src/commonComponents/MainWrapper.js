import "./MainWrapper.css";

function MainWrapper(props) {
  return (
    <>
      {props.text && (
        <h2 className="wrapper__topleft-text">
          <span className="topleft-text--number">{props.text.split("_")[0]}</span>
          <span className="topleft-text--text">{props.text.split("_")[1]}</span>
        </h2>
      )}
      <div className="wrapper">{props.children}</div>
    </>
  );
}

export default MainWrapper;
