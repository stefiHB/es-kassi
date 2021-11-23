import  {useParams} from "react-router-dom";

const ProjectDetail = () => {

    const params: {projectId: any} = useParams();

    return <section>
        <h1>Project title</h1>
        <p>{params.projectId}</p>
    </section>
}

export default ProjectDetail;
