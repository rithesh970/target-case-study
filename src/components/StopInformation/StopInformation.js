const StopInformation = (props) => {
  return (
    <div className="d-flex justify-content-between align-item-center p-3 bg-light">
      <h3 className="mb-1">{props.name}</h3>
      <span>
        <strong>Stop #: </strong>
        {props.stopNumber}
      </span>
    </div>
  );
};

export default StopInformation;
