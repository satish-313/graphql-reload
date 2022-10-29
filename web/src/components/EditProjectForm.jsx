import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../query/projecQuery";
import { UPDATE_PROJECT } from "../mutation/projectMutation";

export default function EditProjectForm({ project }) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {id : project.id, name, description,status},
    refetchQueries:[{query: GET_PROJECT, variables:{id:project.id}}]
  })
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name === "", description === "", status === "") {
      return alert("fill the form")
    }
    
    updateProject(name,description,status)
  }

  return (
    <div className="mt-5">
      <h3>Upate Project Form</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">submit</button>
      </form>
    </div>
  );
}
