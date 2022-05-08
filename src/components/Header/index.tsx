import { Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react";

import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { useSidebarDrawer } from "../../contexts/SiderbarDrawerContext";
import { RiMenuLine } from "react-icons/ri";


export function Header() {
    const { onOpen } = useSidebarDrawer()


    //por padrao n e visivil, so quando passar do large
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto"  mt="4" px="6" align="center" >

            { !isWideVersion && (
                <IconButton icon={<Icon as={RiMenuLine}/>} fontSize="24" variant="unstyled" onClick={onOpen} aria-label="Open" mr="2" >

                </IconButton>
            ) }

            <Logo />

            { isWideVersion && <SearchBox /> }

            <Flex align="center" ml="auto" >

                <NotificationsNav />

                <Profile showProfileData={isWideVersion} />

            </Flex>

        </Flex>
    );
}