import styled from 'styled-components'
import {useTheme} from '../utils/provider'
import {themes} from "../utils/variable"
import { device } from "../utils/device";

// components
import Navigation from '../comps/Navigation'
import Button from '../comps/Button'
import DarkMode from '../comps/DarkMode'
import SocialLink from '../comps/SocialLink'
import ScrollIcon from '../comps/ScrollIcon'
import ProjectCard from '../comps/ProjectCard';

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
const ContentContainer = styled.div`
  display: flex;
  margin-left: 6%;
  margin-right 6%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-color: ${props=>props.boxColor};
  height: 75vh;
  padding-left: 5%;
  padding-bottom: 1%;
  padding-right: 1%;
  margin-bottom: 25vh;
  margin-top: 15vh;
`

// Home Styles
const RightContainer = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  margin-right: 5%;
  text-align:left;
  width: 40vw;
`

const JobTitle = styled.p`
  font-weight: bold;
  font-size: 1.5vw;
  color: ${props=>props.color};
  margin-bottom: 5%;
`

const Title = styled.p`
  font-size: 4.6vw;
  font-weight: bold;
  color: ${props=>props.color};
  margin-bottom: 5%;
`

const Caption = styled.p`
  font-size: 1.5vw;
  color: ${props=>props.color};
  opacity: 67%;
  margin-bottom: 10%;
`

const LeftContainer = styled.div`
  display: flex;
  flex-grow: 2;
  height: 85vh;
  width: 40vw;
`

const Avatar = styled.img``

const SocialContainer = styled.div`
  display: flex;
  flex-grow: 0.5;
  flex-direction: column;
  align-self: flex-end;
  justify-content: space-between;
  width: 5vw;
`

//about styles
const Tag = styled.div``

const ProfilePictureContainer = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  width: 30vw;
  margin-left: 10%;
`
//replace with component eventually
const ProfilePicture = styled.img`
  width: 90%;
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

const Heading = styled.div`
  font-size: 2vw;
  font-weight: bold;
  color: ${props=>props.color};
  margin-bottom: 4%;
`

const AboutDesc = styled.div`
  color: ${props=>props.color};
  font-size: 1vw;
  line-height: 2vw;
`

const SocialContainerAbout = styled.div`
  display: flex;
  padding-top: 5%;
  flex-direction: row;
  justify-content: space-between;
  width: 9vw;
`

const SkillsContainer = styled.div`

`

const ProjectContainer = styled.div`
  display: flex;
  z-index: 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 6%;
  margin-right: 6%;
  margin-bottom: 25vh;
  margin-top: 15vh;
`


export default function Home() {

  const {theme, setTheme} = useTheme()

  return (
    <Container>
      <NavigationContainer>
        <Navigation onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>
      </NavigationContainer>
      

      {/* Home Page */}
      <ContentContainer boxColor={themes[theme].boxColor}>

        <RightContainer>
          <JobTitle color={themes[theme].text}>Frontend Developer</JobTitle>
          <Title color={themes[theme].text}>Hi, I&apos;m Hannah <br/> MacPherson</Title>
          <Caption color={themes[theme].text}>I&apos;m a frontend developer with user interface design experience</Caption>
          <Button onButtonClick={()=>{window.location = 'mailto:hannahmakmac@gmail.com'}}></Button>
        </RightContainer>

        <LeftContainer>
          <Avatar src={'images/circleMain.png'}></Avatar>
        </LeftContainer>

        <SocialContainer>
            <SocialLink icon={'/images/linkedinIcon.png'} onButtonClick={()=>{window.open('https://www.linkedin.com/in/hannah-macpherson-082092226/')}}/>
            <SocialLink onButtonClick={()=>{window.open('https://github.com/hannahmak')}}/>
            <SocialLink icon={'/images/dribbleIcon.png'} onButtonClick={()=>{window.open('https://dribbble.com/hannahmakmac')}}/>
        </SocialContainer>
  
      </ContentContainer>

      <Tag id="about" />

      {/* About Page */}
      <ContentContainer boxColor={themes[theme].boxColor}>
        <ProfilePictureContainer>
          <ProfilePicture src='/images/profilePic.png'/>
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
      </ContentContainer>

      <Tag id="project" />

      {/* Projects Page Overview */}
      <ProjectContainer>
        <ProjectCard />
        <ProjectCard projectImage={"/images/mindulprev.png"} projectIcon={"/images/mindfullogoprev.png"} />
        <ProjectCard projectImage={"/images/westpointprev.png"} projectIcon={"/images/westpointlogoprev.png"}/>
        <ProjectCard projectImage={"/images/sproutprev.png"} projectIcon={"/images/sproutlogoprev.png"} />
        <ProjectCard projectImage={"/images/calorielabprev.png"} projectIcon={"/images/calorielablogoprev.png"}/>
        <ProjectCard projectImage={"/images/promsprev.png"}/>
        <ProjectCard projectImage={"/images/dysonprev.png"}/>
        <ProjectCard projectImage={"/images/minimalprev.png"}/>
        <ProjectCard projectImage={"/images/thenaprev.png"}/>
      </ProjectContainer>
    </Container>
  )
}
