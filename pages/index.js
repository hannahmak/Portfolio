import styled from 'styled-components'
import Navigation from '../comps/Navigation'
import {useTheme} from '../utils/provider'
import {themes} from "../utils/variable"

//import components
import Button from '../comps/Button'
import DarkMode from '../comps/DarkMode'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  margin-right 6%;
`
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.boxColor};
  height: 80vh;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 182px;
`

const JobTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: ${props=>props.color};
`

const Title = styled.p`
  font-size: 72px;
  font-weight: bold;
  color: ${props=>props.color};
`

const Caption = styled.p`
  font-size: 24px;
  color: ${props=>props.color};
  opacity: 67%;
`

const LeftContainer = styled.div`
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
          <Caption color={themes[theme].text}>I&apos;m a frontend developer and user interface designer</Caption>
          <Button onButtonClick={()=>{window.location = 'mailto:hannahmakmac@gmail.com'}}></Button>
        </RightContainer>
        <LeftContainer>Han</LeftContainer>
      </ContentContainer>
    </Container>
  )
}
