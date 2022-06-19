import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import {useTheme} from '../../utils/provider'
import {themes} from "../../utils/variable"
import { device } from "../../utils/device"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Mousewheel, Keyboard } from "swiper"
import "swiper/css"
import "swiper/css/navigation"

// components
import NavigationBar from '../../comps/NavigationBar'
import SkillIcon from '../../comps/SkillIcon'
import UICard from '../../comps/UICard'
import ColorIcon from '../../comps/ColorIcon'

export default function CalorieLab() {

  const {theme, setTheme} = useTheme()

  return (
    <Container>
      <Head>
        <title>Calorie Lab - UI</title>
        <meta property="og:title" content="Calorie Lab - UI" key="title"/>
      </Head>

      <NavigationContainer>
        <NavigationBar onSwitchClick={()=>setTheme(theme === 'darkMode' ? 'default' : 'darkMode') }/>
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
            <InfoHeader color={themes[theme].text}>Style Guide</InfoHeader>
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
      </ContentContainer>

        {/* Mockup SlideShow */}
        <ProjectDemo>
          <InfoHeader color={themes[theme].text}>UI Design</InfoHeader>
          <Swiper cssMode={true}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  slidesPerView={3} 
                  spaceBetween={5} 
                  modules={[Navigation, Mousewheel, Keyboard]} 
                  className="mySwiper">
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock1.png" /></SwiperSlide>
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock2.png" /></SwiperSlide>
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock3.png" /></SwiperSlide>
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock4.png" /></SwiperSlide>
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock5.png" /></SwiperSlide>
          </Swiper>
        </ProjectDemo>

        <ProjectDemoSmall>
          <InfoHeader color={themes[theme].text}>UI Design</InfoHeader>
          <Swiper cssMode={true}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  slidesPerView={1} 
                  spaceBetween={5} 
                  modules={[Navigation, Mousewheel, Keyboard]} 
                  className="mySwiper">
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock1.png" /></SwiperSlide>
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock2.png" /></SwiperSlide>
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock3.png" /></SwiperSlide>
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock4.png" /></SwiperSlide>
            <SwiperSlide><MockImg src="/images/projects/ui/calorielab/mock5.png" /></SwiperSlide>
          </Swiper>
        </ProjectDemoSmall>

    </Container>
  )
}

// global styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  overflow-x: hidden;
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
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 6%;
  margin-right: 6%;
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
  flex-wrap: wrap;
  flex-direction: row;
`

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SoftwareContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
`

const InfoHeader = styled.h1`
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 20px;
  line-height: 29px;
  color: ${props=>props.color};
`

const InfoSubHeader = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: ${props=>props.color};
  margin-bottom: 20px;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`

const InfoImage =  styled.img``

const ProjectDemo = styled.div`
margin-left: 6%;
margin-right: 6%;
  @media only screen and (max-width: 1400px) {
    display: none;
  }
`

const ProjectDemoSmall = styled.div`
margin-left: 6%;
margin-right: 6%;
  @media only screen and (min-width: 1400px) {
    display: none;
  }
`

const MockImg = styled.img`
  width: 450px;
  height: 787px;
`