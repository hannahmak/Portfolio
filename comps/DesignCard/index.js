import React from 'react'
import styled from 'styled-components'
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

//components
import SkillIcon from '../SkillIcon'

const Container = styled.div``

const Title = styled.h1`
    font-family: boldtext;
    font-size: 36px;
    line-height: 43px;
    color: ${props=>props.color};
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 476px;
    height: 674px;
    background: url(${props=>props.projectImage});
    border-radius: 10px;
    margin-top: 38px;
    margin-bottom: 38px;
    margin-right: 78px;
    @media only screen and (max-width: 600px) {
        width: 90vw;
      }
`

const ProjectCard =({
    //props
    projectImage = "/images/thenawork.png",
    text = "Title",
}) => {
    const {theme} = useTheme()

    return <Container >
        <Title color={themes[theme].text}>{text}</Title>
        <ImageContainer projectImage={projectImage} />
        <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/illusicon.png"}/>
    </Container>
}

export default ProjectCard