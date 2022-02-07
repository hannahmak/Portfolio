import styled from 'styled-components';

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
    font-family: -apple-system, BlinkMacSystemFont;
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;
`

const Button =({
    //props
    text= "Hire Me!",
    onButtonClick= ()=>{}
}) => {
    return <Container onClick={()=>{onButtonClick()}}>
        <Text>{text}</Text>
    </Container>

}

export default Button