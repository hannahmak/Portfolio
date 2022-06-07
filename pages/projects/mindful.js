import React from 'react'
import styled from 'styled-components'
import {useTheme} from '../../utils/provider'
import {themes} from "../../utils/variable"
import { device } from "../../utils/device";

// components
import Navigation from '../../comps/Navigation'
import Button from '../../comps/Button'
import DarkMode from '../../comps/DarkMode'
import SocialLink from '../../comps/SocialLink'
import ScrollIcon from '../../comps/ScrollIcon'
import ProjectCard from '../../comps/ProjectCard'
import SkillIcon from '../../comps/SkillIcon'
import { Carousel } from '@trendyol-js/react-carousel'

// global styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
`

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;  
  z-index: 2;
`

const ProjectSumBg = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${props=>props.bg};
`

const ProjectSumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-left: 6%;
  margin-right 6%;
  @media only screen and (max-width: 600px) {
    margin-top: 20%;
    flex-direction: column;
    margin-left: 0%;
    margin-right 0%;
  }
`

const ProjectLogo = styled.img`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const ProjectLogoSmall = styled.img`
  width: 100%;
  margin-bottom: 20%;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`

const ProjectDescContainer = styled.div`
  display: flex;
  margin-left: -10%;
  flex-direction: column;
  align-content: flex-end; 
  margin-bottom: 2%;
  @media only screen and (max-width: 600px) {
    align-items: center;
    margin-left: 3%;
    margin-right 3%;
  }
`

const ProjectDesc = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: ${props=>props.color};
  @media only screen and (max-width: 600px) {
    justify-content: center;
    text-align: center
  }
`

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props=>props.color};
  margin-right: 6%;
  width: 30vw;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`
const ProjectInfoIndvContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    margin: 20%;
  }
`

const ProjectInfoHeading = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-top: 70px;
  margin-bottom: 19px;
`

const ProjectInfoDescription = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

const ProjectLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    margin-bottom: 10%;
  }
`

const ProjectLinkIndvContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
  margin-right: 21px;
`

const ProjectLinkDesc = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: ${props=>props.color};
`

const ProjectDemo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 114px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const ProjectDemoSmall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 114px;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`

const MockImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MockImg = styled.img`
  height: 45vw;
`

const UXContainer = styled.div`
  margin-top: 253px;
  margin-bottom: 100px;
  @media only screen and (max-width: 600px) {
    margin-top: 50px;
  }
`

export default function Mindful() {

  const {theme, setTheme} = useTheme()

  return (
    <Container>
      <ProjectSumBg bg={themes[theme].boxColor}>
        <NavigationContainer>
          <Navigation onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>
        </NavigationContainer>

        <ProjectSumContainer>
          <ProjectLogo src='/images/projects/mindful/mindfulprologo.svg'/>
          <ProjectLogoSmall src='/images/projects/mindful/mindfulSmall.svg'/>
          <ProjectDescContainer>
            <ProjectDesc color={themes[theme].text}>
            Mindful is an application that tries to encourages users to take a moment out of their day to practice mindful reflections, whether that be how they feel, what they did that day, or just talk in general. It gives an opportunity for users to have an open platform where they can share their emotions with close friends or just themselves.
            </ProjectDesc>
            
            <ProjectInfoContainer color={themes[theme].text}>
              <ProjectInfoIndvContainer>
                <ProjectInfoHeading>Role</ProjectInfoHeading>
                <ProjectInfoDescription>Lead Frontend Dev</ProjectInfoDescription>
                <ProjectInfoDescription>UI Design</ProjectInfoDescription>
                <ProjectInfoDescription>UX Research</ProjectInfoDescription>
              </ProjectInfoIndvContainer>

              <ProjectInfoIndvContainer>
                <ProjectInfoHeading>Team</ProjectInfoHeading>
                <ProjectInfoDescription>6 Members</ProjectInfoDescription>
              </ProjectInfoIndvContainer>

              <ProjectInfoIndvContainer>
                <ProjectInfoHeading>Time</ProjectInfoHeading>
                <ProjectInfoDescription>4 Months</ProjectInfoDescription>
              </ProjectInfoIndvContainer>
            </ProjectInfoContainer>

            <ProjectLinksContainer>
              <ProjectLinkIndvContainer>
                <SocialLink icon={themes[theme].demoIcon} onButtonClick={()=>{window.open('https://idsp3380-client.herokuapp.com')}} />
                <ProjectLinkDesc color={themes[theme].text}>Visit</ProjectLinkDesc>
              </ProjectLinkIndvContainer>
             
              <ProjectLinkIndvContainer>
                <SocialLink icon={themes[theme].socialIconGit} onButtonClick={()=>{window.open('https://github.com/hannahmak/mindful-frontend')}} />
                <ProjectLinkDesc color={themes[theme].text}>Github</ProjectLinkDesc>
              </ProjectLinkIndvContainer>

            </ProjectLinksContainer>
          </ProjectDescContainer>
        </ProjectSumContainer>
      </ProjectSumBg>

      <ProjectDemo>
        <Carousel show={1} slide={1} transition={0.5} swiping={true}>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock1.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock2.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock3.png" /> 
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock4.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock5.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock6.png" />
          </MockImgCont>
        </Carousel>
        <UXContainer>
          <Button onButtonClick={()=>{window.location = 'mailto:hannahmakmac@gmail.com'}} text="View UI/UX" />
        </UXContainer>
      </ProjectDemo>

      <ProjectDemoSmall>
        <Carousel show={1} slide={1} transition={0.5} swiping={true}>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock1.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock2.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock3.png" /> 
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock4.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock5.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/mindful/minfulmock6.png" />
          </MockImgCont>
        </Carousel>
        <UXContainer>
          <Button onButtonClick={()=>{window.location = 'mailto:hannahmakmac@gmail.com'}} text="View UI/UX" />
        </UXContainer>
      </ProjectDemoSmall>
    </Container>
  )
}