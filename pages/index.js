import styled from 'styled-components'

//import components
import Button from '../comps/Button'

const Container = styled.div`
  display: flex;
`

export default function Home() {
  return (
    <Container>
      <Button onButtonClick={()=>{window.location = 'mailto:hannahmakmac@gmail.com'}}></Button>
    </Container>
  )
}
