import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile () {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>José Ricardo</Text>
                <Text color="gray.300" fontSize="small">jose@gmail.com</Text>
            </Box>

            <Avatar size="md" name="Jose ricardo" />
        </Flex>
    );
}