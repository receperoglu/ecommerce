import './App.css'
import { Container, Flex, Space, Title } from "@mantine/core"
import { HeaderMegaMenu } from './Components/Header/HeaderMegaMenu'
import Products from './Pages/Products/Products'
import Slide from './Components/Slide/Slide'
function App() {
  return (

    <>
      <HeaderMegaMenu />
      <Flex direction="column" align="center" justify="center" gap="xl">
        <Container>
          <Slide />
          <Space h="xl" />
          <Title order={1} style={{marginBottom:"10px"}}>Top deals
          </Title>
          <Products />
        </Container>

      </Flex>
    </>

  )
}

export default App
