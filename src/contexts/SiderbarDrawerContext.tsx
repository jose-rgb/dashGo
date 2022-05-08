import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProps {
    children: ReactNode;
}

//dados a grvar dentro do context
type SidebarDrawerContextData =  UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);


export function SidebarDrawerProvider({children}: SidebarDrawerProps) {
    //hook do chakra (isOpen, onClose, onOpen...)
    const disclosure = useDisclosure()

    //fechar drawer ao navegar para outra tela (url mudar)
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)