import { useNavigate } from "react-router-dom";
export const AddEmployeeButton = () => {
  const navigator = useNavigate();
  function addNewEmployee() {
    navigator("/add-employee");
  }
  return (
    <>
      <button className="btn btn-primary" onClick={addNewEmployee}>
        Add Employee
      </button>
    </>
  );
};
