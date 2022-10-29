import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../query/projecQuery";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  console.log("data: ", data);

  if (loading) return <Spinner />;
  if (error) return <p>some thing wrongs</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects </p>
      )}
    </>
  );
}
