import React from 'react'
import styled from 'styled-components'
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

const Container = styled.div``

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 476px;
    height: 476px;
    background-color: ${props=>props.boxColor};
    background-size: cover;
    border-radius: 10px;
    margin-bottom: 52px;
    margin-right: 78px;
`

const ProjectImage = styled.img`
    width: 450px;
    background: url(${props=>props.projectImage});
`

const UICard =({
    //props
    projectImage = "/images/projects/ui/calorielab/projectImage.png",
    text = "Title",
}) => {
    const {theme} = useTheme()

    return <Container>
        <ImageContainer boxColor={themes[theme].boxColor}>
            <ProjectImage src={projectImage} />
        </ImageContainer>
    </Container>
}

export default UICard