import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useTheme } from '../utils/provider';
import { themes } from "../utils/variable";
import { device } from "../utils/device";
import { useRouter } from 'next/router';

// components
import NavigationBar from '../comps/NavigationBar';
import Button from '../comps/Button';
import SocialLink from '../comps/SocialLink';
import ProjectCard from '../comps/ProjectCard';
import SkillIcon from '../comps/SkillIcon';

export default function Home() {

  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Hannah&apos;s Portfolio</title>
        <meta name="description" content="Frontend developer Hannah MacPherson's portfolio" />
        <meta property="og:title" content="Hannah's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationContainer>
        <NavigationBar onSwitchClick={() => setTheme(theme === 'darkMode' ? 'default' : 'darkMode')} />
      </NavigationContainer>

      {/* Home Page */}
      <ContentContainer smallBox={themes[theme].body} boxColor={themes[theme].boxColor}>

        <RightContainer>
          <JobTitle color={themes[theme].text}>Frontend Developer</JobTitle>
          <Title color={themes[theme].text}>Hi, I&apos;m Hannah <br /> MacPherson</Title>
          <Caption color={themes[theme].text}>I&apos;m a frontend developer with user interface design experience</Caption>
          <Button onButtonClick={() => { window.location = 'mailto:hannahmakmac@gmail.com'; }}></Button>
        </RightContainer>

        <LeftContainer>
          <Avatar src={'images/home/avatar/circleMain.svg'}></Avatar>
          <AvatarSmall src={'images/home/avatar/avatarSmall.svg'} />
        </LeftContainer>

        <SocialContainer>
          <SocialLink icon={'/images/icons/linkedinIcon.svg'} onButtonClick={() => { window.open('https://www.linkedin.com/in/hannah-macpherson-082092226/'); }} />
          <SocialLink onButtonClick={() => { window.open('https://github.com/hannahmak'); }} />
        </SocialContainer>

      </ContentContainer>

      <Tag id="about" />

      {/* About Page */}
      <ContentContainerAbout smallBox={themes[theme].body} boxColor={themes[theme].boxColor}>
        <ProfilePictureContainer>
          <ProfilePicture src='/images/home/avatar/profilePic.svg' />
        </ProfilePictureContainer>

        <ProfileDescriptionContainer>
          <Heading color={themes[theme].text}>Get to Know Me!</Heading>
          <AboutDesc color={themes[theme].text}>
            I’m a Frontend Developer with a passion for building scalable, high-performance web applications. Skilled in <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>, I focus on creating seamless and interactive user experiences. With experience in both frontend and backend development, including API integration and performance optimization, I’m adept at solving complex technical challenges. I’m excited to leverage my skills to contribute to innovative, impactful projects that drive user engagement and deliver exceptional digital experiences.
          </AboutDesc>
          <SocialContainerAbout>
            <SocialLink icon={themes[theme].socialIconLink} onButtonClick={() => { window.open('https://www.linkedin.com/in/hannah-macpherson-082092226/'); }} />
            <SocialLink icon={themes[theme].socialIconGit} onButtonClick={() => { window.open('https://github.com/hannahmak'); }} />
          </SocialContainerAbout>
        </ProfileDescriptionContainer>
      </ContentContainerAbout>


      {/* Small */}
      <ProfileContainerSmall>
        <ProfilePictureContainerSmall>
          <ProfilePicture src='/images/home/avatar/profilePic.svg' />
        </ProfilePictureContainerSmall>
        <Heading color={themes[theme].text}>Get to Know Me!</Heading>
        <AboutDesc color={themes[theme].text}>
          I’m a Frontend Developer with a passion for building scalable, high-performance web applications. Skilled in <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>, I focus on creating seamless and interactive user experiences. With experience in both frontend and backend development, including API integration and performance optimization, I’m adept at solving complex technical challenges. I’m excited to leverage my skills to contribute to innovative, impactful projects that drive user engagement and deliver exceptional digital experiences.
        </AboutDesc>
        <SocialContainerAbout>
          <SocialLink icon={themes[theme].socialIconLink} onButtonClick={() => { window.open('https://www.linkedin.com/in/hannah-macpherson-082092226/'); }} />
          <SocialLink icon={themes[theme].socialIconGit} onButtonClick={() => { window.open('https://github.com/hannahmak'); }} />
          <SocialLink icon={themes[theme].socialIconDribble} onButtonClick={() => { window.open('https://dribbble.com/hannahmakmac'); }} />
        </SocialContainerAbout>
      </ProfileContainerSmall>

      <Tag id="project" />

      {/* Projects Page Overview */}
      <ProjectContainer>
        
        {/* Real-World Projects */}
        <ProjectCatContainer>
          <CatHeading color={themes[theme].text}>Real-World Projects</CatHeading>
          <ProjectDevContainer>
            <ProjectCard
              routeTo="/projects/evai"
              margin="16px"
              projectImage="/images/home/projects/evaiprev.png"
              projectIcon="/images/home/projects/evailogo.png"
            />
          </ProjectDevContainer>
        </ProjectCatContainer>
        
        {/* Dev Work */}
        <ProjectCatContainer>
          <CatHeading color={themes[theme].text}>Archived School Projects</CatHeading>
          <ProjectDevContainer>
            <ProjectCard width="168.64px" height="168.64px" routeTo={"/projects/nuance"} margin="16px" />
            <ProjectCard width="168.64px" height="168.64px" routeTo={"/projects/mindful"} margin="16px" projectImage={"/images/home/projects/mindfulprev.png"} projectIcon={"/images/home/projects/mindfullogoprev.svg"} />
            <ProjectCard width="168.64px" height="168.64px" routeTo={"/projects/calorielab"} projectImage={"/images/home/projects/calorielabprev.png"} projectIcon={"/images/home/projects/calorielablogoprev.png"} />
            <ProjectCard width="168.64px" height="168.64px" routeTo={"/projects/westpoint"} projectImage={"/images/home/projects/westpointprev.png"} projectIcon={"/images/home/projects/westpointlogoprev.svg"} />
            <ProjectCard iconwidth="50px" width="168.64px" height="168.64px" projectImage={"/images/home/projects/promsprev.png"} projectIcon={"/images/home/skills/illusicon.svg"} />
            <ProjectCard iconwidth="50px" width="168.64px" height="168.64px"  projectImage={"/images/home/projects/dysonprev.png"} projectIcon={"/images/home/skills/illusicon.svg"} />
            <ProjectCard iconwidth="50px" width="168.64px" height="168.64px"  projectImage={"/images/home/projects/thenaprev.png"} projectIcon={"/images/home/skills/photoshopicon.svg"} />
          </ProjectDevContainer>
        </ProjectCatContainer>
      </ProjectContainer>
    </Container>
  );
}

// global styles
// Container and general layout
const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;

  @media only screen and (max-width: 1250px) {
    overflow-x: hidden;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;  
  z-index: 4;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-left: 6%;
  margin-right: 6%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.boxColor};
  height: 75vh;
  padding: 0 5% 1% 5%;
  margin: 14vh 6% 25vh 6%;

  @media only screen and (max-width: 1250px) {
    background-color: ${props => props.smallBox};
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }
`;

// Home Page Styles
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: 2;

  @media only screen and (max-width: 1250px) {
    justify-content: center;
  }

  @media only screen and (max-width: 500px) {
    margin-left: 20%;
    justify-content: center;
  }
`;

const JobTitle = styled.h2`
  font-family: boldtext;
  font-size: 24px;
  color: ${props => props.color};
  margin-bottom: 24px;

  @media only screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const Title = styled.h1`
  font-size: 72px;
  font-family: boldtext;
  color: ${props => props.color};
  margin: 0 0 24px;
  white-space: nowrap;

  @media only screen and (max-width: 1250px) {
    font-size: 54px;
    width: 300px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 36px;
  }
`;

const Caption = styled.p`
  font-size: 24px;
  color: ${props => props.color};
  opacity: 67%;
  margin-bottom: 54px;

  @media only screen and (max-width: 1250px) {
    font-size: 18px;
    width: 200px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 40vw;
`;

const Avatar = styled.img`
  z-index: 1;
  width: 700px;

  @media only screen and (max-width: 1250px) {
    width: 600px;
  }

  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;

const AvatarSmall = styled.img`
  @media only screen and (max-width: 1250px) {
    margin-top: 200px;
    margin-left: -100px;
    width: 110vw;
  }

  @media only screen and (min-width: 1250px) {
    display: none;
  }

  @media only screen and (max-width: 500px) {
    margin-right: 60%;
    width: 100vw;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  align-self: flex-end;
  justify-content: space-between;

  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;

// About Section Styles
const Tag = styled.div``;

const ContentContainerAbout = styled.div`
  display: flex;
  margin-left: 6%;
  margin-right: 6%;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.boxColor};
  height: 70vh;
  padding: 0 5% 1% 5%;
  margin: 14vh 6% 25vh 6%;

  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  width: 30vw;
  margin-left: 10%;

  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;

const ProfilePictureContainerSmall = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1%;

  @media only screen and (min-width: 1250px) {
    display: none;
  }
`;

const ProfilePicture = styled.img`
  width: 90%;

  @media only screen and (max-width: 1250px) {
    width: 50vh;
    margin-top: 200px;
    margin-bottom: 30px;
  }
`;

const ProfileDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
  height: 85vh;
  width: 30vw;
  margin-right: 10%;
`;

const ProfileContainerSmall = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 100px;

  @media only screen and (min-width: 1250px) {
    display: none;
  }
`;

const Heading = styled.h2`
  font-size: 36px;
  font-family: boldtext;
  color: ${props => props.color};
  margin-bottom: 4%;
  margin-right: 4%;
`;

const AboutDesc = styled.div`
  color: ${props => props.color};
  font-size: 18px;
  line-height: 30px;
`;

const SocialContainerAbout = styled.div`
  display: flex;
  padding-top: 5%;
  flex-direction: row;
  justify-content: space-between;
  width: 5vw;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: -200px;
  margin-left: 6%;
  margin-right: 6%;
  margin-bottom: 200px;

  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;

const SkillsContainerSmall = styled.div`
  display: flex;
  margin-left: 6%;
  margin-right: 6%;
  margin-top: 10%;
  margin-bottom: 20%;

  @media only screen and (min-width: 1250px) {
    display: none;
  }
`;

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

  @media only screen and (max-width: 1250px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ProjectCatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const CatHeading = styled.h3`
  font-family: boldtext;
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.color};
  margin-left: 20px;
  margin-bottom: -10px;
`;

const ProjectDevContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ProjectDesignContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 353px;
  height: 353px;
  margin: 16px;

  @media only screen and (max-width: 1250px) {
    height: 169.12px;
  }
`;

const DesignProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;