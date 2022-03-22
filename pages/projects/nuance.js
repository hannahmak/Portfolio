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
  height: 735px;
  background-color: ${props=>props.bg};
`

const ProjectSumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-left: 6%;
  margin-right 6%;
`

const ProjectLogo = styled.img``

const ProjectDescContainer = styled.div`
  display: flex;
  margin-left: -10%;
  flex-direction: column;
  align-content: flex-end; 
  margin-bottom: 2%;
`

const ProjectDesc = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: ${props=>props.color};
`

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props=>props.color};
  margin-right: 6%;
  width: 30vw;
`
const ProjectInfoIndvContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`

const MockImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const MockImg = styled.img`
  height: 722.75px;
`

const UXContainer = styled.div`
  margin-top: 253px;
  margin-bottom: 100px;
`

export default function Nuance() {

  const {theme, setTheme} = useTheme()

  return (
    <Container>
      <ProjectSumBg bg={themes[theme].boxColor}>
        <NavigationContainer>
          <Navigation onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>
        </NavigationContainer>

        <ProjectSumContainer>
          <ProjectLogo src='/images/nuanceprologo.svg'/>
          <ProjectDescContainer>
            <ProjectDesc color={themes[theme].text}>
              Nuance is an educational app related to cultural awareness and understanding. The goal of Nuance is to challenge users to question their thinking about important topics. Nuance presents all sides of an idea, free from the labels of partisanship and biases.
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
                <ProjectInfoDescription>4 Members</ProjectInfoDescription>
              </ProjectInfoIndvContainer>

              <ProjectInfoIndvContainer>
                <ProjectInfoHeading>Time</ProjectInfoHeading>
                <ProjectInfoDescription>4 Months</ProjectInfoDescription>
              </ProjectInfoIndvContainer>
            </ProjectInfoContainer>

            <ProjectLinksContainer>
              <ProjectLinkIndvContainer>
                <SocialLink icon={themes[theme].demoIcon} onButtonClick={()=>{window.open(' https://hosted-nuacne-oo0zozfdx-hannahmak.vercel.app')}} />
                <ProjectLinkDesc color={themes[theme].text}>Visit</ProjectLinkDesc>
              </ProjectLinkIndvContainer>
             
              <ProjectLinkIndvContainer>
                <SocialLink icon={themes[theme].socialIconGit} onButtonClick={()=>{window.open('https://github.com/hannahmak/Nuance')}} />
                <ProjectLinkDesc color={themes[theme].text}>Github</ProjectLinkDesc>
              </ProjectLinkIndvContainer>

            </ProjectLinksContainer>
          </ProjectDescContainer>
        </ProjectSumContainer>
      </ProjectSumBg>

      <ProjectDemo>
        <Carousel show={3} slide={1} transition={0.5} swiping={true}>
          <MockImgCont>
            <MockImg src="/images/nuancemock1.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/nuancemock2.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/nuancemock3.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/nuancemock4.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/nuancemock5.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/nuancemock6.png" />
          </MockImgCont>
        </Carousel>
        <UXContainer>
          <Button onButtonClick={()=>{window.location = 'mailto:hannahmakmac@gmail.com'}} text="View UI/UX" />
        </UXContainer>
        
      </ProjectDemo>


 
    </Container>
  )
}