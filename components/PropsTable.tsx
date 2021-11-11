import { styled } from "../stitches.config";

const StyledTable = styled("table", {
  border: "1px solid $richBlack10",
  borderCollapse: "collapse",
  textAlign: "left",
  fontSize: "$3",
  margin: "$4 0",

  "& th, & td": {
    border: "1px solid $richBlack10",
    padding: "$1 $3",
  },
});

type PropShape = {
  name: string;
  type: string;
  description: string;
};

type TableComponentProps = React.TableHTMLAttributes<HTMLTableElement>;
type TableProps = TableComponentProps & { items: Array<PropShape> };

const PropsTable = (props: TableProps) => (
  <StyledTable>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {props.items.map(({ name, type, description }) => (
        <tr key={name}>
          <td>{name}</td>
          <td>
            <pre>{type}</pre>
          </td>
          <td>{description}</td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export default PropsTable;
