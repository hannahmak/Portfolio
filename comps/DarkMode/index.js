import styled from "styled-components"
import {useTheme} from '../../utils/provider'
import {themes} from "../../utils/variable"

const Button = styled.button`
    margin-left: auto;
    height: 30px;
    width: 30px;
    background-image: url(${props=>props.icon});
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const DarkMode = ({
    //props
    onSwitchClick=()=>{},
}) => {
    
    const {theme} = useTheme()

    return <Button icon={themes[theme].themeIcon} onClick={onSwitchClick} />

} 

export default DarkMode