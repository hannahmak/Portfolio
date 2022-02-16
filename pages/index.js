import styled from 'styled-components'
import {useTheme} from '../utils/provider'
import {themes} from "../utils/variable"
import { device } from "../utils/device";

//import components
import Navigation from '../comps/Navigation'
import Button from '../comps/Button'
import DarkMode from '../comps/DarkMode'
import SocialLink from '../comps/SocialLink'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  margin-right 6%;
  cursor: default;
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
`

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

const Avatar = styled.img`

`

const SocialContainer = styled.div`
  display: flex;
  flex-grow: 0.5;
  flex-direction: column;
  align-self: flex-end;
  justify-content: space-between;
  width: 5vw;
`


export default function Home() {

  const {theme, setTheme} = useTheme()

  return (
    <Container>
      <Navigation onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>

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
    </Container>
  )
}
