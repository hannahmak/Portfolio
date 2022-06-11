import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
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
      <Head>
        <title>Design - Hannah</title>
        <meta property="og:title" content="Design - Hannah" key="title"/>
      </Head>

      <NavigationContainer>
        <Navigation onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>
      </NavigationContainer>

      <ContentContainer  id="thena">
        <DesignCard text={"Thena Painting"} icon={"/images/projects/design/photoshopicon.svg"}/>
      </ContentContainer>
      <ContentContainer  id="dyson">
        <DesignCard projectImage={"/images/projects/design/dysonwork.png"} text={"Dyson Corale Technical Drawing"} icon={"/images/illusicon.svg"}/>
      </ContentContainer>
      <ContentContainer  id="proms">
        <DesignCard projectImage={"/images/projects/design/posterwork.png"} text={"The Proms Poster"} icon={"/images/illusicon.svg"}/>
      </ContentContainer>
 
    </Container>
  )
}