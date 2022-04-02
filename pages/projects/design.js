import React from 'react'
import styled from 'styled-components'
import {useTheme} from '../../utils/provider'
import {themes} from "../../utils/variable"
import { device } from "../../utils/device";

// components
import Navigation from '../../comps/Navigation'
import DesignCard from '../../comps/DesignCard'
import Button from '../../comps/Button'
import DarkMode from '../../comps/DarkMode'
import SocialLink from '../../comps/SocialLink'
import ScrollIcon from '../../comps/ScrollIcon'
import ProjectCard from '../../comps/ProjectCard'
import SkillIcon from '../../comps/SkillIcon'

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
    margin-left: 6%;
    margin-top: 14vh;
`

export default function Design() {

  const {theme, setTheme} = useTheme()

  return (
    <Container>
      <NavigationContainer>
        <Navigation onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>
      </NavigationContainer>

      <ContentContainer  id="thena">
        <DesignCard text={"Thena Painting"} icon={"/images/photoshopicon.png"}/>
      </ContentContainer>
      <ContentContainer  id="dyson">
        <DesignCard projectImage={"/images/dysonwork.png"} text={"Dyson Corale Technical Drawing"} icon={"/images/illusicon.png"}/>
      </ContentContainer>
      <ContentContainer  id="proms">
        <DesignCard projectImage={"/images/posterwork.png"} text={"The Proms Poster"} icon={"/images/illusicon.png"}/>
      </ContentContainer>
 
    </Container>
  )
}