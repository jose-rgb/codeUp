import { Flex, Text } from "@chakra-ui/react";

export function Content() {
    return (
        <Flex w="100%" maxWidth={1480} m="8" mx="auto" direction="column" >
            
            <Flex direction="column" w="100%" align="center" justifyContent="center" p="4" >
                <Text fontSize="2xl" color="red.500">Descrição da Mecânica</Text>

                <Text fontSize="2xl" w="100%" bgColor="gray.500" p="4" mt="2" borderRadius="base" >Por ser um jogo mobile, adotamos o giroscópio como mecânica principal para
                    movimentação e o cumprimento dos objetivos que serão propostos a cada fase.
                    Será executado da seguinte forma: o personagem seguirá seu trajeto quando o
                    celular for virado/inclinado para o lado que o jogador desejar.</Text>
            </Flex>

            <Flex direction="column" w="100%" align="center" justifyContent="center" p="4" >
                <Text fontSize="2xl" color="red.500">Estética</Text>

                <Text fontSize="2xl" w="100%" bgColor="gray.500" p="4" mt="2" borderRadius="base" >Nossa proposta adotará uma estética pixelizada, com poucas cores e que, a cada
                    fase, um novo efeito visual/novo traçado sutil, seja adicionado causando assim
                    uma sensação de progressão visual.
                    A ideia da escolha desta temática é de, além de não contar com tantos testes que
                    deveriam ser feitos com uma escolha de gráficos 3D, é a possibilidade de criar
                    um jogo particularmente simples, dentro do prazo de entrega esperado.</Text>
            </Flex>

            <Flex direction="column" w="100%" align="center" justifyContent="center" p="4" >
                <Text fontSize="2xl" color="red.500">Identidade Visual</Text>

                <Text fontSize="2xl" w="100%" bgColor="gray.500" p="4" mt="2" borderRadius="base" >Inicialmente, foi pensado no jogo para apresentar, no primeiro nível, nada além do
                    personagem (comporto por um total de 9 pixels) em um fundo preto.
                    A medida que o avanço no jogo, novas funcionalidades são liberadas, como a
                    possibilidade de pular, por exemplo, sendo caracterizada por movimentar o celular
                    para cima, de acordo com a programação.</Text>
            </Flex>

            <Flex direction="column" w="100%" align="center" justifyContent="center" p="4" >
                <Text fontSize="2xl" color="red.500">Narrativa</Text>

                <Text fontSize="2xl" w="100%" bgColor="gray.500" p="4" mt="2" borderRadius="base" >Acompanhamos “Turing”, um garoto que foi transformado em um pequeno pixel
                    que acabou preso no seu computador. Para que consiga voltar ao normal, ele
                    precisará entender o funcionamento de um computador e alguns scripts.</Text>
            </Flex>

            <Flex direction="column" w="100%" align="center" justifyContent="center" p="4" >
                <Text fontSize="2xl" color="red.500"> Escolha da Narrativa </Text>

                <Text fontSize="2xl" w="100%" bgColor="gray.500" p="4" mt="2" borderRadius="base">Tivemos que pensar como que seria possível relacionar uma ideia tão abstrata
                    quanto conceitos de lógica de programação com um jogo interativo. Partindo
                    disso, o roteiro do jogo foi escrito do ponto de vista de alguém que se encontra
                    dentro de um computador, gancho perfeito para que essa temática fosse
                    abordada no decorrer do projeto.</Text>
            </Flex>



        </Flex>
    );
}