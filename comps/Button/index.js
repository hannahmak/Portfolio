import styled from 'styled-components';
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 192px;
    height: 70px;
    border-radius: 100px;
    background-color: #C4D2FA;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: ${props=>props.color};
`

const Button =({
    //props
    text= "Hire Me!",
    onButtonClick= ()=>{}
}) => {

    const {theme} = useTheme()
    return <Container onClick={()=>{onButtonClick()}}>
        <Text color={themes[theme].textButton}>{text}</Text>
    </Container>

}

export default Button