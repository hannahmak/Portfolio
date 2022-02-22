import styled from 'styled-components';
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

const ProjectIcon = styled.img`
    z-index: 2;
    opacity: 0;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 316px;
    height: 316px;
    z-index: 1;
    background: url(${props=>props.projectImage});
    border-radius: 10px;
    margin: 0.5%;

    &:hover {
        background: linear-gradient(0deg, rgba(238, 242, 250, 0.8), rgba(238, 242, 250, 0.8)), url(${props=>props.projectImage});
        ${ProjectIcon}{
            opacity: 1;
        }
    }
`

const ProjectCard =({
    //props
    projectImage = "/images/nuanceprev.png",
    projectIcon = "/images/nuancelogoprev.png",
    onButtonClick= ()=>{}
}) => {

    const {theme} = useTheme()
    return <Container projectImage={projectImage} onClick={()=>{onButtonClick()}}>
        <ProjectIcon src={projectIcon} />
    </Container>

}

export default ProjectCard