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

// global styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  margin-right 6%;
  cursor: default;
`

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: fixed;
  
`
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-color: ${props=>props.boxColor};
  height: 75vh;
  padding-left: 5%;
  padding-bottom: 1%;
  padding-right: 1%;
  margin-bottom: 30vh;
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
const AboutTag = styled.div``

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



const SkillsContainer = styled.div`
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
          <Avatar src={'circleMain.png'}></Avatar>
        </LeftContainer>

        <SocialContainer>
            <SocialLink icon={'/linkedinIcon.png'} onButtonClick={()=>{window.open('https://www.linkedin.com/in/hannah-macpherson-082092226/')}}/>
            <SocialLink onButtonClick={()=>{window.open('https://github.com/hannahmak')}}/>
            <SocialLink icon={'/dribbleIcon.png'} onButtonClick={()=>{window.open('https://dribbble.com/hannahmakmac')}}/>
        </SocialContainer>
  
      </ContentContainer>

      <AboutTag id="about" />

      {/* About Page */}
      <ContentContainer boxColor={themes[theme].boxColor}>
        <ProfilePictureContainer>
          <ProfilePicture src='/profilePic.png'/>
        </ProfilePictureContainer>

        <ProfileDescriptionContainer>
          <Heading color={themes[theme].text}>Get to Know Me!</Heading>
          <AboutDesc color={themes[theme].text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices pellentesque tincidunt in urna in nibh. Magna amet libero cras felis lorem suspendisse. Suscipit vulputate neque, nunc purus purus, magna libero, in nisl. Massa urna id urna quam. Diam suspendisse nunc faucibus id maecenas maecenas. Iaculis urna euismod feugiat tortor non ornare pretium tincidunt. Gravida ac at vitae venenatis egestas nisi condimentum neque nibh. Quam habitant a sem metus id vitae orci, aliquam nisi. Arcu nisl id ligula quis nunc, nunc. Semper cursus tristique tempor suscipit tellus scelerisque enim. Dictum a maecenas accumsan nibh. </AboutDesc>
        </ProfileDescriptionContainer>

      </ContentContainer>
    </Container>
  )
}
