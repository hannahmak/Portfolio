import styled from 'styled-components'
import {useTheme} from '../../utils/provider'
import {themes} from '../../utils/variable'


//components
import DarkMode from '/comps/DarkMode'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
`

const Logo = styled.div`
    margin-right: auto;
    font-weight: 700;
    font-size: 24px;
    color: ${props=>props.color};
`

const LinkContainer = styled.div`
    display: flex;
    cursor: pointer;
`

const Link = styled.a`
    font-weight: 700;
    font-size: 18px;
    color: ${props=>props.color};
    padding: 37px;
    a:active { 
        background-color: #ABC1FF;
      }

`

const Navigation = ({
    //props
}) => {

    const {theme, setTheme} = useTheme()

    return <Container> 
        <Logo color={themes[theme].text}>H.</Logo>
        <LinkContainer>
            <Link color={themes[theme].text}>Home</Link>
            <Link color={themes[theme].text}>About</Link>
            <Link color={themes[theme].text}>Projects</Link>
        </LinkContainer>
     
        <DarkMode onSwitchClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')} />
    </Container>

} 

export default Navigation