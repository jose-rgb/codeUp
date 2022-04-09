import { Box, Text } from "@chakra-ui/react";

export function SideBar() {
    return (
        <Box as="aside" w="64" ml="8" mr="8"> 
            <Text fontSize="2xl" color="red.500">Introdução</Text>

            <Text fontSize="2xl" >Trata-se de um jogo voltado para a área educacional que tem como principal
            propósito, ensinar conceitos de programação de uma forma mais divertida e
            interativa. Com a intenção de promover uma jogabilidade diferenciado, foi-se
            considerado a ideia de utilizar o acelerômetro do celular de como que seja
            possível realizar a movimentação do personagem.</Text>

        </Box>
    );
}