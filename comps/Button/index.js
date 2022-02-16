import styled from 'styled-components';
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13vw;
    height: 4.5vw;
    border-radius: 100px;
    background-color: #C4D2FA;
    cursor: pointer;
`

const Text = styled.p`
    font-size: 1.5vw;
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