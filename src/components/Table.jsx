import { MaterialReactTable } from "material-react-table";

const Table = () => (
  <MaterialReactTable
    columns={[
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
    ]}
    data={[
      {
        firstName: "John",
        lastName: "Doe",
      },
      {
        firstName: "Kevin",
        lastName: "Vandy",
      },
    ]}
  />
);

export default Table;
