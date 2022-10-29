import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS } from "../query/projecQuery";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutation/projectMutation";

export default function DeleteProjectButton({ projectId: id }) {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const deleteP = () => {
    deleteProject(id);
  };

  return (
    <div className="d-flex mt-5 ms-auto ">
      <button className="btn btn-danger m-2" onClick={deleteP}>
        <FaTrash className="icon" />
      </button>
    </div>
  );
}
