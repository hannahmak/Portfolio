import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import {useTheme} from '../utils/provider'
import {themes} from "../utils/variable"
import { device } from "../utils/device"
import {useRouter} from 'next/router' 
import { Carousel } from '@trendyol-js/react-carousel'

// components
import Navigation from '../comps/Navigation'
import Button from '../comps/Button'
import DarkMode from '../comps/DarkMode'
import SocialLink from '../comps/SocialLink'
import ScrollIcon from '../comps/ScrollIcon'
import ProjectCard from '../comps/ProjectCard'
import SkillIcon from '../comps/SkillIcon'

// global styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  @media only screen and (max-width : 600px){
    overflow-x: hidden;
  }
`

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;  
  z-index: 4;
`

const ContentContainer = styled.div`
  display: flex;
  margin-left: 6%;
  margin-right 6%;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${props=>props.boxColor};
  height: 75vh;
  padding-left: 5%;
  padding-bottom: 1%;
  padding-right: 1%;
  margin-bottom: 25vh;
  margin-top: 14vh;
  @media only screen and (max-width : 600px){
    background-color: ${props=>props.smallBox};
    margin-left: 0px;
    margin-right 0px;
    margin-top: 10vh;
  }
`

// Home Styles
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align:left;
  z-index: 2;
`

const JobTitle = styled.h2`
  font-family: boldtext;
  font-size: 24px;
  color: ${props=>props.color};
  margin-bottom: 24px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`

const Title = styled.h1`
  font-size: 72px;
  font-family: boldtext;
  color: ${props=>props.color};
  margin: 0;
  margin-bottom: 24px;
  @media only screen and (max-width: 1200px) {
    font-size: 44px;
    width: 300px;
  }
`

const Caption = styled.p`
  font-size: 24px;
  color: ${props=>props.color};
  opacity: 67%;
  margin-bottom: 54px;

  @media only screen and (max-width: 1200px) {
    font-size: 14px;
    width: 200px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    width: 200px;
    margin-bottom: -40px;
  }
`

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 40vw;
`

const Avatar = styled.img`
  z-index: 1;
  width: 105%;

  @media only screen and (max-width: 1366px) {
    width: 135%;
  }

  @media only screen and (max-width: 922px) {
    width: 160%;
  }

  @media only screen and (max-width: 822px) {
    width: 300%;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const AvatarSmall = styled.img`
  @media only screen and (max-width: 600px) {
    width: 300%;
    margin-top: 200px;
    margin-left: -200px;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
`

const SocialContainer = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  align-self: flex-end;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`


//about styles
const Tag = styled.div``

const ContentContainerAbout = styled.div`
  display: flex;
  margin-left: 6%;
  margin-right 6%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-color: ${props=>props.boxColor};
  height: 70vh;
  padding-left: 5%;
  padding-bottom: 1%;
  padding-right: 1%;
  margin-bottom: 25vh;
  margin-top: 14vh;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const ProfilePictureContainer = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  width: 30vw;
  margin-left: 10%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const ProfilePictureContainerSmall = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1%;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`

const ProfilePicture = styled.img`
  width: 90%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 200px
    margin-bottom: 30px;
  }
`

const ProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
  height: 85vh;
  width: 30vw;
  margin-right: 10%;
`

const ProfileContainerSmall = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 100px;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`

const Heading = styled.h2`
  font-size: 36px;
  font-family: boldtext;
  color: ${props=>props.color};
  margin-bottom: 4%;
  margin-right: 4%;
`

const AboutDesc = styled.div`
  color: ${props=>props.color};
  font-size: 18px;
  line-height: 30px;
`

const SocialContainerAbout = styled.div`
  display: flex;
  padding-top: 5%;
  flex-direction: row;
  justify-content: space-between;
  width: 9vw;
`

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  felx-direction: row;
  margin-top: -200px;
  margin-left: 6%;
  margin-right: 6%;
  margin-bottom: 200px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const SkillsContainerSmall = styled.div`
  display: flex;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 15%;
  margin-bottom: 20%;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`

const ProjectContainer = styled.div`
  display: flex;
  z-index: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  margin-left: 6%;
  margin-right: 6%;
  margin-bottom: 25vh;
  margin-top: 8vh;
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`

const ProjectCatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const CatHeading = styled.h3`
  font-family: boldtext;
  font-size: 24px;
  line-height: 29px;
  color: ${props=>props.color};
  margin-left: 20px;
  margin-bottom: -10px;
`

const ProjectDevContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ProjectDesignContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 353px;
  height: 353px;
  margin: 16px;
  @media only screen and (max-width: 600px) {
    height: 169.12px;
  }
`

const DesignProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`


export default function Home() {

  const {theme, setTheme} = useTheme()
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Hannah MacPherson - Portfolio</title>
        <meta property="og:title" content="Hannah MacPherson - Portfolio" key="title"/>
      </Head>
      <NavigationContainer>
        <Navigation onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>
      </NavigationContainer>
      

      {/* Home Page */}
      <ContentContainer smallBox={themes[theme].body} boxColor={themes[theme].boxColor}>

        <RightContainer>
          <JobTitle color={themes[theme].text}>Frontend Developer</JobTitle>
          <Title color={themes[theme].text}>Hi, I&apos;m Hannah <br/> MacPherson</Title>
          <Caption color={themes[theme].text}>I&apos;m a frontend developer with user interface design experience</Caption>
          <Button onButtonClick={()=>{window.location = 'mailto:hannahmakmac@gmail.com'}}></Button>
        </RightContainer>

      <LeftContainer>
          <Avatar src={'images/home/avatar/circleMain.svg'}></Avatar>
          <AvatarSmall src={'images/home/avatar/avatarSmall.svg'}/>
        </LeftContainer> 

        <SocialContainer>
            <SocialLink icon={'/images/icons/linkedinIcon.svg'} onButtonClick={()=>{window.open('https://www.linkedin.com/in/hannah-macpherson-082092226/')}}/>
            <SocialLink onButtonClick={()=>{window.open('https://github.com/hannahmak')}}/>
            <SocialLink icon={'/images/icons/dribbleIcon.svg'} onButtonClick={()=>{window.open('https://dribbble.com/hannahmakmac')}}/>
        </SocialContainer>
  
      </ContentContainer>

      <Tag id="about" />

      {/* About Page */}
      <ContentContainerAbout smallBox={themes[theme].body} boxColor={themes[theme].boxColor}>
        <ProfilePictureContainer>
          <ProfilePicture src='/images/home/avatar/profilePic.svg'/>
        </ProfilePictureContainer>

        <ProfileDescriptionContainer>
          <Heading color={themes[theme].text}>Get to Know Me!</Heading>
          <AboutDesc color={themes[theme].text}>
          A creative front-end developer with UI/UX design experience. Skilled in working in project-orientated team environments creating cross-platform applications.
          Experience In: Web development technologies Next.js, WordPress, HTML and CSS, Javascript, creating simple and elegant visual UI/UX designs and systems for cross-platform applications
          , quality user experiences, design processes and collaborative environments and gathering and analyzing qualitative and quantitative data to identify opportunities and areas to experiment and optimize
          </AboutDesc>
          <SocialContainerAbout>
            <SocialLink icon={themes[theme].socialIconLink} onButtonClick={()=>{window.open('https://www.linkedin.com/in/hannah-macpherson-082092226/')}}/>
            <SocialLink icon={themes[theme].socialIconGit} onButtonClick={()=>{window.open('https://github.com/hannahmak')}}/>
            <SocialLink icon={themes[theme].socialIconDribble} onButtonClick={()=>{window.open('https://dribbble.com/hannahmakmac')}}/>
        </SocialContainerAbout>
        </ProfileDescriptionContainer>
      </ContentContainerAbout>


      {/* Small */}
      <ProfileContainerSmall>
        <ProfilePictureContainerSmall>
          <ProfilePicture src='/images/home/avatar/profilePic.svg'/>
        </ProfilePictureContainerSmall>
        <Heading color={themes[theme].text}>Get to Know Me!</Heading>
        <AboutDesc color={themes[theme].text}>
            A creative front-end developer with UI/UX design experience. Skilled in working in project-orientated team environments creating cross-platform applications.
            Experience In: Web development technologies Next.js, WordPress, HTML and CSS, Javascript, creating simple and elegant visual UI/UX designs and systems for cross-platform applications
            , quality user experiences, design processes and collaborative environments and gathering and analyzing qualitative and quantitative data to identify opportunities and areas to experiment and optimize
        </AboutDesc>
        <SocialContainerAbout>
            <SocialLink icon={themes[theme].socialIconLink} onButtonClick={()=>{window.open('https://www.linkedin.com/in/hannah-macpherson-082092226/')}}/>
            <SocialLink icon={themes[theme].socialIconGit} onButtonClick={()=>{window.open('https://github.com/hannahmak')}}/>
            <SocialLink icon={themes[theme].socialIconDribble} onButtonClick={()=>{window.open('https://dribbble.com/hannahmakmac')}}/>
        </SocialContainerAbout>
      </ProfileContainerSmall>

      <SkillsContainer>
        <Carousel show={10} slide={2} transition={0.5} swiping={true} center={true} showArrows={false}>
          <SkillIcon bg={themes[theme].skillIconBg} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/figmaicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/sketchicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/illusicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/photoshopicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/indesignicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/html5icon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/cssicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/sassicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/reacticon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/jsicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/styledcompicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/nexticon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/vercelicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/nodeicon.svg"} />
        </Carousel>
      </SkillsContainer>

      <SkillsContainerSmall>
        <Carousel show={3} slide={1} transition={0.5} swiping={true}>
          <SkillIcon bg={themes[theme].skillIconBg} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/figmaicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/sketchicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/illusicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/photoshopicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/indesignicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/html5icon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/cssicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/sassicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/reacticon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/jsicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/styledcompicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/nexticon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/vercelicon.svg"} />
          <SkillIcon bg={themes[theme].skillIconBg} icon={"/images/home/skills/nodeicon.svg"} />
        </Carousel>
      </SkillsContainerSmall>
    
      <Tag id="project" />

      {/* Projects Page Overview */}
      <ProjectContainer>

        {/* Dev Work */}
        <ProjectCatContainer>
          <CatHeading color={themes[theme].text}>Development</CatHeading>
          <ProjectDevContainer>
            <ProjectCard iconwidth="200px" routeTo={"/projects/nuance"} margin="16px" />
            <ProjectCard iconwidth="200px" routeTo={"/projects/mindful"} margin="16px" projectImage={"/images/home/projects/mindfulprev.png"} projectIcon={"/images/home/projects/mindfullogoprev.svg"} />
            
          </ProjectDevContainer>
        </ProjectCatContainer>

   
        <DesignProjectRow>
          {/* UI/UX Work */}
          <ProjectCatContainer>
            <CatHeading color={themes[theme].text}>UI/UX</CatHeading>
            <ProjectDesignContainer>
              <ProjectCard width="168.64px" height="168.64px" routeTo={"/projects/calorielab"} projectImage={"/images/home/projects/calorielabprev.png"} projectIcon={"/images/home/projects/calorielablogoprev.png"}/>
              <ProjectCard width="168.64px" height="168.64px" routeTo={"/projects/westpoint"} projectImage={"/images/home/projects/westpointprev.png"} projectIcon={"/images/home/projects/westpointlogoprev.svg"}/>
            </ProjectDesignContainer>
          </ProjectCatContainer>
       
          {/* Graphic Work */}
          <ProjectCatContainer>
            <CatHeading color={themes[theme].text}>Graphic Design</CatHeading>
            <ProjectDesignContainer>
              <ProjectCard iconwidth="50px" width="168.64px" height="168.64px" routeTo={"/projects/design/"} projectImage={"/images/home/projects/promsprev.png"} projectIcon={"/images/home/skills/illusicon.svg"} />
              <ProjectCard iconwidth="50px" width="168.64px" height="168.64px" routeTo={"/projects/design"} projectImage={"/images/home/projects/dysonprev.png"} projectIcon={"/images/home/skills/illusicon.svg"} />
              <ProjectCard iconwidth="50px" width="168.64px" height="168.64px" routeTo={"/projects/design"} projectImage={"/images/home/projects/thenaprev.png"} projectIcon={"/images/home/skills/photoshopicon.svg"} />
            </ProjectDesignContainer>
          </ProjectCatContainer>
        </DesignProjectRow>
      </ProjectContainer>
    </Container>
  )
}