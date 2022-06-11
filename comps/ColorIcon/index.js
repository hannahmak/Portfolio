import styled from 'styled-components';
import {useTheme} from "../../utils/provider"
import {themes} from "../../utils/variable"

const Container = styled.div`
    display: flex;
    margin-right: 32px;
`

const SwatchContainer = styled.div`
    display: flex;
    width: 62px;
    height: 62px;
    border-radius: 40px;
    background: ${props=>props.bg};
`

const ColorIcon =({
    //props
    bg = "#FFB71B",
}) => {

    const {theme} = useTheme()

    return <Container>
        <SwatchContainer bg={bg}></SwatchContainer>
    </Container>

}

export default ColorIcon