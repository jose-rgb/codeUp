import { Flex, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <Flex as="footer" w="100%" maxWidth={1480} h="20" mx="auto"  mt="4" px="6" align="center" justifyContent="center" borderTopWidth={1} borderColor="pink.700" p="4" >
            <Flex fontSize="3xl" fontWeight="bold" letterSpacing="tight" color="red.500" align="center" justifyContent="center" >
                <Text color="white" mr="4" fontWeight="normal">By</Text>  <Text>AllBadDecisions Games</Text>
            </Flex>
        </Flex>
    );
}