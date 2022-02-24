import { useContext, useState } from "react";
import AppContext from "../../store";
import TableRow from "../TableRow/TableRow";
import "./DepartureList.css";
import StopInformation from "../StopInformation/StopInformation";

const DepartureList = () => {
  const { departureList } = useContext(AppContext);
  const [departureExpanded, setDepartureExpanded] = useState(false);
  const [count, setCount] = useState(3);

  const onClickHandler = () => {
    if (count === 3) {
      setCount(departureList.stopList.length);
      setDepartureExpanded((departureExpanded) => !departureExpanded);
    } else {
      setCount(3);
      setDepartureExpanded((departureExpanded) => !departureExpanded);
    }
  };

  const tableRows =
    departureList.stopList.length !== 0 ? (
      departureList.stopList.slice(0, count).map((stop) => {
        return (
          <TableRow
            key={stop.departureTime}
            route={stop.route}
            description={stop.description}
            time={stop.departureTime}
          />
        );
      })
    ) : (
      <tr>
        <td colspan="3" className="font-weight-bold text-center">
          No departures at this time
        </td>
      </tr>
    );

  return (
    <div className="row">
      <div className="col-lg-3 col-xs-hide"></div>
      <div className="col-lg-6 col-xs-12 m-3">
        {departureList.stop && (
          <StopInformation
            name={departureList.stop.description}
            stopNumber={departureList.stop.stop_id}
          />
        )}
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Route</th>
              <th scope="col">Destination</th>
              <th scope="col">Departs</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        {departureList.stopList.length > 3 && (
          <button className="showMore-btn" onClick={onClickHandler}>
            <span
              className={departureExpanded ? "expanded" : "collapsed"}
            ></span>
            Show {departureExpanded ? "less" : "more"} departures
          </button>
        )}
      </div>
      <div className="col-lg-3 col-xs-hide"></div>
    </div>
  );
};

export default DepartureList;
