import styled from "styled-components"
import {useTheme} from '../../utils/provider'
import {themes} from "../../utils/variable"

const Container = styled.button`
    display: flex;
    background-size: 1.8vw;
    height: 40px;
    width: 1.8vw;
    background-image: url(${props=>props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
`

const DarkMode = ({
    //props
    onSwitchClick=()=>{},
}) => {
    
    const {theme} = useTheme()

    return <Container icon={themes[theme].scrollIcon} />

} 

export default DarkMode