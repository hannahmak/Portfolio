import styled from 'styled-components'
import {useTheme} from '../../utils/provider'
import {themes} from '../../utils/variable'
import Link from 'next/link'
import { useRouter } from "next/router";


//components
import DarkMode from '/comps/DarkMode'

const Container = styled.div`
    display: flex;
    padding-left: 6%;
    padding-right: 6%;
    width: 100vw;
    height: 4.5vw;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
    background: ${props=>props.bgcolor} linear-gradient(111.68deg, rgba(255, 255, 255, 0.29) 7.59%, rgba(255, 255, 255, 0.39) 102.04%);
    backdrop-filter: blur(18.7896px);
`

const Logo = styled.div`
    margin-right: auto;
    font-weight: 700;
    font-size: 1.5vw;
    color: ${props=>props.color};
`

const LinkContainer = styled.div`
    display: flex;
    cursor: pointer;
`

const LinkText = styled.a`
    font-weight: 700;
    font-size: 1vw;
    color: ${props=>props.color};
    padding: 2.47vw;
    a:active { 
        background-color: #ABC1FF;
      }

`

const Navigation = ({
    //props

}) => {
    const {theme, setTheme} = useTheme()

    return <Container bgcolor={themes[theme].navBgColor}> 
        <Logo color={themes[theme].text}>H.</Logo>
        <LinkContainer>
            <Link href="../">
                <LinkText color={themes[theme].text}>Home</LinkText>
            </Link>
            
            <Link href="../#about">
                <LinkText color={themes[theme].text}>About</LinkText>
            </Link>
            
            <Link href="../#project">
                <LinkText color={themes[theme].text}>Projects</LinkText>
            </Link>
        </LinkContainer>
     
        <DarkMode onSwitchClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')} />
    </Container>

} 

export default Navigation