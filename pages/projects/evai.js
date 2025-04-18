import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useTheme } from '../../utils/provider';
import { themes } from "../../utils/variable";
import { device } from "../../utils/device";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// components
import NavigationBar from '../../comps/NavigationBar';
import Button from '../../comps/Button';
import SocialLink from '../../comps/SocialLink';

export default function Nuance() {

  const { theme, setTheme } = useTheme();

  return (
    <Container>
      <Head>
        <title>EVAI</title>
        <meta property="og:title" content="EVAI" key="title" />
      </Head>
      <ProjectSumBg bg={themes[theme].boxColor}>
        <NavigationContainer>
          <NavigationBar onSwitchClick={() => setTheme(theme === 'darkMode' ? 'default' : 'darkMode')} />
        </NavigationContainer>

        <ProjectSumContainer>
          <ProjectLogo src='/images/projects/evai/evailogo.png' />

          <ProjectLogoSmall src='/images/projects/evai/evailogoSmall.png' />
          <ProjectDescContainer>


            <ProjectDesc color={themes[theme].text}>
              EVAI is the smart AI-powered operating system for EV chargers, turnkey EV installers, and network operators. Our hardware-agnostic platform lets you seamlessly launch, optimize, and scale your EV charging business, providing a comprehensive solution for high-demand environments.
            </ProjectDesc>

            <ProjectInfoContainer color={themes[theme].text}>
              <ProjectInfoIndvContainer>
                <ProjectInfoHeading>Role</ProjectInfoHeading>
                <ProjectInfoDescription>I engineered high-performance, responsive UI components using React and Next.js. I also contributed to backend development by integrating RESTful APIs, implementing server-side logic in Node.js, and ensuring efficient, secure data flow between client and server. My work emphasized scalability, real-time responsiveness, and seamless user interaction, all critical to supporting a dynamic, multi-user platform.</ProjectInfoDescription>
              </ProjectInfoIndvContainer>
            </ProjectInfoContainer>

            <ProjectLinksContainer>
              <ProjectLinkIndvContainer>
                <SocialLink icon={themes[theme].demoIcon} onButtonClick={() => { window.open('https://demo.evai.ca'); }} />
                <ProjectLinkDesc color={themes[theme].text}>Demo Site</ProjectLinkDesc>
              </ProjectLinkIndvContainer>

              <ProjectLinkIndvContainer>
                <SocialLink icon={themes[theme].demoIcon} onButtonClick={() => { window.open('https://dev.evai.ca'); }} />
                <ProjectLinkDesc color={themes[theme].text}>Dev Site</ProjectLinkDesc>
              </ProjectLinkIndvContainer>

              <ProjectLinkIndvContainer>
                <SocialLink icon={themes[theme].socialIconGit} onButtonClick={() => { window.open('https://github.com/HenryBcit/roughlyev'); }} />
                <ProjectLinkDesc color={themes[theme].text}>Github</ProjectLinkDesc>
              </ProjectLinkIndvContainer>

            </ProjectLinksContainer>
          </ProjectDescContainer>
        </ProjectSumContainer>
      </ProjectSumBg>

      <ProjectDemo>
        <ProjectInfoHeading>Technologies Used</ProjectInfoHeading>
        <ProjectInfoDescription>  •	Frontend: React, Next.js, TypeScript, Styled-Components
          •	Backend: Node.js, RESTful APIs
          •	Payment Integration: Stripe
          •	Others: Git, Vercel (deployment), AWS (cloud infrastructure)
          •	Tooling: Webpack, Babel, Docker for containerization</ProjectInfoDescription>
        <ProjectInfoHeading>Challenges and Solution</ProjectInfoHeading>
        <ProjectInfoDescription>I optimized the platform for real-time data flow and performance, focusing on scalability to support multiple charger types and handle high-traffic usage.</ProjectInfoDescription>
        <ProjectInfoHeading>Outcome</ProjectInfoHeading>
        <ProjectInfoDescription>EVAI facilitates efficient multi-location EV management, offering customizable pricing, secure user access, and detailed reporting, all while enhancing user engagement and simplifying management.</ProjectInfoDescription>
        <UXContainer>
          <Button onButtonClick={() => { window.location = 'https://evai.ca'; }} text="Learn More" />
        </UXContainer>
      </ProjectDemo>

      <ProjectDemoSmall>
        <UXContainer>
          <Button onButtonClick={() => { window.location = 'https://evai.ca'; }} text="Learn More" />
        </UXContainer>
      </ProjectDemoSmall>
    </Container>
  );
}

// global styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;  
  z-index: 2;
`;

const ProjectSumBg = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${props => props.bg};
`;

const ProjectSumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-left: 6%;
  margin-right: 6%;
  @media only screen and (max-width: 600px) {
    margin-top: 20%;
    flex-direction: column;
    margin-left: 0%;
    margin-right: 0%;
  }
`;

const ProjectLogo = styled.img`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ProjectLogoSmall = styled.img`
  width: 100%;
  margin-bottom: 20%;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const ProjectDescContainer = styled.div`
  display: flex;
  margin-left: -10%;
  flex-direction: column;
  align-content: flex-end; 
  margin-bottom: 2%;
  @media only screen and (max-width: 600px) {
    align-items: left;
    margin-left: 3%;
    margin-right: 3%;
  }
`;

const ProjectDesc = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: ${props => props.color};
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => props.color};
  margin-right: 6%;
  width: 30vw;
  @media only screen and (max-width: 600px) {
    justify-content: left;
    width: 100%;
  }
`;
const ProjectInfoIndvContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {

  }
`;

const ProjectInfoHeading = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-top: 70px;
  margin-bottom: 19px;
`;

const ProjectInfoDescription = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;

const ProjectLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 0;
  @media only screen and (max-width: 600px) {
    margin-bottom: 10%;
  }
`;

const ProjectLinkIndvContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
  margin-right: 21px;
`;

const ProjectLinkDesc = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.color};
`;

const ProjectDemo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ProjectDemoSmall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 114px;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const MockImg = styled.img`
  height: 50vw;
  @media only screen and (max-width: 600px) {
    height: 100vw;
  }
`;

const UXContainer = styled.div`
  margin-bottom: 100px;
  @media only screen and (max-width: 600px) {
    margin-top: 50px;
  }
`;