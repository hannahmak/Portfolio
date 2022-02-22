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

export default function Nuance() {

  const {theme, setTheme} = useTheme()

  return (
    <Container>
      <NavigationContainer>
        <Navigation onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>
      </NavigationContainer>
 
    </Container>
  )
}