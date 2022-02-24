const TableRow = (props) => {
  return (
    <tr>
      <td>{props.route}</td>
      <td>{props.description}</td>
      <td>{props.time}</td>
    </tr>
  );
};

export default TableRow;
