import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import styled from 'styled-components';

import Lottie from "react-lottie";
import WelcomeLottie from "../../assets/lotties/welcome.json";
import Typewriter from "typewriter-effect";

import HomepageImage from '../../assets/images/homepage.png';
import {useNavigate} from 'react-router-dom';

const HomePage = styled("div")(({url})=>({
  width:'100vw',
  height:'100vh',
  backgroundImage: `url('${url}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  overflowY:'scroll'
}))



const LandingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: WelcomeLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();

  return (
    <Box
      width="100vw"
      height="100vh"
      overflowY="scroll"
      display="flex"
      flexDirection="column"
    >
      <Image
        w="100vw"
        h="100vh"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
        src={HomepageImage}
      ></Image>
      <Flex width="100%" height="100vh" alignItems="center">
        <Box width="540px" height="540px" marginRight="50px">
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Box>
        <Box>
          <Text fontWeight={700} fontSize="7xl">
            WELCOME TO STUDIFY !
          </Text>

          <Text fontSize="4xl">
            <Typewriter
              options={{ delay: 50 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("A place to manage your classroom as a teacher")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    "A place to track your kids progress as a parent! "
                  )
                  .start();
              }}
            />
          </Text>
          <Box marginTop="40px">
            <Button
              size="lg"
              backgroundColor="#4CC9F0"
              color="#fff"
              marginRight="30px"
              _hover={{}}
              onClick={()=>{navigate('/teacher/signup')}}
            >
              I AM A TEACHER
            </Button>
            <Button
              size="lg"
              backgroundColor="#3A0CA3"
              color="#fff"
              marginRight="30px"
              _hover={{}}
              onClick={()=>{navigate('/student/signup')}}
            >
              I AM A PARENT
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;
