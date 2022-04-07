import { Button, Flex, Input } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" >
      
      <Flex as="form" w="100%" maxWidth="360px" bg="gray.800" p="8" borderRadius="8px" flexDir="column" >
       
        <Input name="email"  type="email" placeholder="Email" focusBorderColor="pink.500" bgColor="gray.900" variant="filled" size="lg" _hover={{bgColor: 'gray.900'}} mb="6"/>
        <Input name="password"  type="password" placeholder="Senha" focusBorderColor="pink.500" bgColor="gray.900" variant="filled" size="lg" _hover={{bgColor: 'gray.900'}}/>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" >Entrar</Button>

      </Flex>

    </Flex>
  )
}
