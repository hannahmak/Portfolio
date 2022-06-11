import styled from 'styled-components';
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 152px;
    height: 50px;
    border-radius: 100px;
    background-color: #FFCF87;
    cursor: pointer;
    margin-top: 14vh;

`

const Text = styled.p`
    font-size: 18px;
    font-family: boldtext;
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