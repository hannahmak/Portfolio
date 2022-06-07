import styled from 'styled-components';
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    z-index: 3;
`

const Icon = styled.img`
    
`

const SocialLink =({
    //props
    onButtonClick=()=>{},
    icon='/images/icons/githubIcon.svg',
}) => {

    const {theme} = useTheme()
    return <Container onClick={()=>{onButtonClick()}}>
        <Icon src={icon}/>
    </Container>

}

export default SocialLink