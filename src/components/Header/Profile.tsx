import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({showProfileData = true}:ProfileProps) {
    return (
        <Flex align="center">

            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>José Ricardo</Text>
                    <Text color="gray.300" fontSize="small">jose@gmail.com</Text>
                </Box>
            )}
            
            <Avatar size="md" name="Jose ricardo" src="https://avatars.githubusercontent.com/u/61853617?v=4" />
        </Flex>
    );
}