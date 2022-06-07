import React from 'react'
import styled from 'styled-components'
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"
import {useRouter} from 'next/router' 

const ProjectIcon = styled.img`
    z-index: 2;
    opacity: 0;
    width: ${props=>props.iconwidth};
`

const Container = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props=>props.width};
    height: ${props=>props.height};
    z-index: 1;
    background: url(${props=>props.projectImage});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    margin:${props=>props.margin};

    &:hover {
        background: linear-gradient(0deg, rgba(255, 248, 230, 0.8), rgba(255, 248, 230, 0.8)), url(${props=>props.projectImage});
        background-repeat: no-repeat;
        background-size: cover;
        ${ProjectIcon}{
            opacity: 1;
        }
    }
`

const ProjectCard =({
    //props
    width = "353px",
    height = "353px",
    margin = "3.95px",
    iconwidth = "140px",
    projectImage = "/images/home/projects/nuanceprev.png",
    projectIcon = "/images/home/projects/nuancelogoprev.svg",
    routeTo = "/"
}) => {

    const {theme} = useTheme()
    const router = useRouter()

    return <Container projectImage={projectImage} onClick={()=>router.push(routeTo)} width={width} height={height} margin={margin}>
        <ProjectIcon src={projectIcon} iconwidth={iconwidth}/>
    </Container>

}

export default ProjectCard