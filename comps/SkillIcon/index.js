import styled from 'styled-components';
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 78px;
    height: 78px;
    border-radius: 40px;
    background: ${props=>props.bg};
    margin: .5%;
`

const Icon = styled.img`
    width: ${props=>props.width};
`

const SkillIcon =({
    //props
    onButtonClick=()=>{},
    icon='/images/home/skills/vsicon.svg',
}) => {

    const {theme} = useTheme()
    return <Container bg={themes[theme].skillIconBg} onClick={()=>{onButtonClick()}}>
        <Icon src={icon} />
    </Container>

}

export default SkillIcon