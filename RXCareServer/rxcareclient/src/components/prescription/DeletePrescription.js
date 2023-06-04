import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const StudentDelete = ({  Id, patient_Id }) => {
    const navigate = useNavigate();
    /* ------------------------delete-------------------------- */

    return (
        <>
            <Button
                type="submit"
                variant="secondary"
                size="md"
                onClick={() => {
                    window.confirm(
                        `Are you sure you want to delete ${studentName}?`
                    ) &&
                        fetch(`http://localhost:8033/students/${Id}`, {
                            method: "DELETE",
                        }).then();
                    navigate("/Students");
                }}
                className="btn btn-primary"
            >
                Delete Student
            </Button>
        </>
    );
};
