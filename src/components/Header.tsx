import { Flex, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto"  mt="4" px="6" align="center">
            <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight" w="100%" align="center" >
                CodeUp
                <Text as="span" ml="1" color="red.500" >.</Text>
            </Text>
        </Flex>
    );
}