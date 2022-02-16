import styled from 'styled-components'

//import components
import Navigation from '../comps/Navigation'
import Button from '../comps/Button'
import DarkMode from '../comps/DarkMode'


const Container = styled.div`
  display: flex;
`

export default function Project() {
  return (
    <Container>
      <Navigation />
    </Container>
  )
}