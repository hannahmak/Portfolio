import styled from 'styled-components';
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
`

const Icon = styled.img`
    
`

const SocialLink =({
    //props
    onButtonClick=()=>{},
    icon='/images/githubIcon.png',
}) => {

    const {theme} = useTheme()
    return <Container onClick={()=>{onButtonClick()}}>
        <Icon src={icon}/>
    </Container>

}

export default SocialLink