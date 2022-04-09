import { Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";
import { useState } from "react";
import Lottie from "react-lottie";
import animation from "../../public/animation.json"
import { Content } from "../components/Content";

//animation 
const defaultOptionsAnimation = {
    loop: true,
    autoplay: true, 
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

export default function Home() {
  const [ animationState,setanimationState] = useState({
    isStopped: false, isPaused: false
  } )


  return (
    <Flex direction="column" h="100vh" > 
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6"> 
        <SideBar />

        <Lottie options={defaultOptionsAnimation}
          height={580}
          width={580}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />

      </Flex>

      < Content />

      <Footer />
    </Flex>

  )
}
