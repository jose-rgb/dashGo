import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    //e o botão da page atual?
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export function PaginationItem({isCurrent = false, number, onPageChange}: PaginationItemProps) {
    //se estiver na page atual
    if (isCurrent) {
        //retornar button
        return (
            <Button 
                size="sm" 
                fontSize="xs" 
                width="4" 
                bg="pink" 
                disabled 
                _disabled={{bg: 'pink.500', cursor: 'default',}}  
                _hover={{
                bg: 'pink.400'
                }}
            >
                {number}
            </Button>
        )
    }

    //se n tiver na page atual
    return (
        <Button 
            size="sm" 
            fontSize="xs" 
            width="4" 
            bg="gray.700"
            _hover={{
                bg: 'gray.500'
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    );
}