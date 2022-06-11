import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import {useTheme} from '../../utils/provider'
import {themes} from "../../utils/variable"
import { device } from "../../utils/device";
import { Carousel } from '@trendyol-js/react-carousel'


// components
import Navigation from '../../comps/Navigation'
import DesignCard from '../../comps/DesignCard'
import Button from '../../comps/Button'
import DarkMode from '../../comps/DarkMode'
import SocialLink from '../../comps/SocialLink'
import ScrollIcon from '../../comps/ScrollIcon'
import ProjectCard from '../../comps/ProjectCard'
import SkillIcon from '../../comps/SkillIcon'
import UICard from '../../comps/UICard'
import ColorIcon from '../../comps/ColorIcon'


// global styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  margin-bottom: 8vh;
`

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;  
  z-index: 2;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  margin-top: 14vh;
`

const ProjectTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${props=>props.color};
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SoftwareContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const InfoHeader = styled.h1`
  margin-top: 90px;
  margin-bottom: 72px;
  font-size: 24px;
  line-height: 29px;
  color: ${props=>props.color};
`

const InfoSubHeader = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${props=>props.color};
  margin-bottom: 20px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 70px;
`

const InfoImage =  styled.img``

const MockImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MockImg = styled.img`
  height: 80vh;
`

export default function CalorieLab() {

  const {theme, setTheme} = useTheme()

  return (
    <Container>
      <Head>
        <title>Calorie Lab - Hannah</title>
        <meta property="og:title" content="Calorie Lab - Hannah" key="title"/>
      </Head>

      <NavigationContainer>
        <Navigation onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>
      </NavigationContainer>

      <ContentContainer>

        <ProjectTitle color={themes[theme].text}>CalorieLab</ProjectTitle>

        {/* Summary */}
        <ProjectContainer>
          <ProjectInfoContainer>
            <UICard text={"Calorie Lab"}/>
            <SoftwareContainer>
              <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/figmaicon.svg"}/>
              <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/illusicon.svg"}/>
            </SoftwareContainer>         
          </ProjectInfoContainer>

          {/* Style Guide */}
          <ProjectInfoContainer>
            <InfoSubHeader color={themes[theme].text}>Color Palette</InfoSubHeader>
            <InfoContainer>
              <ColorIcon />
              <ColorIcon bg={"#FF595A"} />
              <ColorIcon bg={"#FF8672"} />
            </InfoContainer>
            <InfoSubHeader color={themes[theme].text}>Logo</InfoSubHeader>
            <InfoContainer>
              <InfoImage src={"/images/projects/ui/calorielab/logos.svg"} />
            </InfoContainer>
            <InfoSubHeader color={themes[theme].text}>Typefaces</InfoSubHeader>
            <InfoContainer>
              <InfoImage src={"/images/projects/ui/calorielab/typefaces.svg"} />
            </InfoContainer>
          </ProjectInfoContainer>    
        </ProjectContainer>

        {/* Mockup SlideShow */}
        <InfoHeader color={themes[theme].text}>UI Design</InfoHeader>
        <Carousel show={3} slide={1} transition={0.5} swiping={true}>
          <MockImgCont>
            <MockImg src="/images/projects/ui/calorielab/mock1.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/ui/calorielab/mock2.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/ui/calorielab/mock3.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/ui/calorielab/mock4.png" />
          </MockImgCont>
          <MockImgCont>
            <MockImg src="/images/projects/ui/calorielab/mock5.png" />
          </MockImgCont>
        </Carousel>   

      </ContentContainer>
    </Container>
  )
}