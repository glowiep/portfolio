import {  
  Flex,
  useColorModeValue,

  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';

import { MotionButton } from "../Motion";
import "../../styles/components/FunFact.css"

const FunFact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const funFact = {
    title: 'Fun Fact About Me🥊',
    modalTitle: 'Boxing Ontario Athlete',
    imageUrl: 'https://github.com/glowiep/portfolio/blob/main/public/images/boxing_GL.jpg?raw=true',
    description1:
    `
    I was a competitive amateur boxer between 2018 and 2023, and closed this chapter with 30 fights under my belt. 
    I've had an amazing run, and had the opportunity to go up against Olympic hopefuls in the ring. 
    `,
    description2: 
    `
    With the same disciplined mindset, I continue to put as much energy into mastering my craft as a Full Stack Engineer as I did when training for boxing tournaments in the past.
    `,
    description3:
    `
    Special T Boxing - Assistant Coach🥊
    `
  };
  
  const [buttonText, setButtonText] = useState(funFact.title);
  
  const handleMouseEnter = () => {
    setButtonText(funFact.description3);
  };

  const handleMouseLeave = () => {
    setButtonText(funFact.title);
  };

  
  const buttonStyles = {
    whileTap: { scale: 0.5, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' },
    whileHover: { scale: 1.1 },
    variant: "ghost",
    borderRadius: "4em",
    px: { base: "1em", md: "2em" },
    gap: { base: "0.5em", md: "1em" },
    _hover: {
      bg: "gray.100", 
      color: "black"
    },
    fontSize: "1.5em",
    background: "teal",
    height: "4em",
  }

  return (
    <>
      <Flex pos="relative" alignItems="center" justifyContent="center" mt="2em">
        <MotionButton 
          {...buttonStyles} 
          onClick={onOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="boxing-cursor"
        >
          {buttonText}
        </MotionButton>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent 
            color='gray.100'
            p="2em"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
            bg={useColorModeValue('gray.600', 'gray.200')}
            borderRadius="20px"
            backgroundImage="none"
            opacity={1}
            >
            <ModalHeader>
              {funFact.modalTitle}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody color='gray.100'>
              {funFact.description1}
              <Image 
                src={funFact.imageUrl} 
                alt='Gloria Lim Boxing' 
                p="2em"
              />
              {funFact.description2}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
  )
};

export default FunFact;