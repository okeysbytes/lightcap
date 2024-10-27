import {Heading, HStack, Text, VStack} from "@chakra-ui/react";
import React from "react";
const WCard = ({ name, explanation, page, chapter }) => {    
  return (
    <VStack
        w="100%"  
        bg="white"  
        borderRadius="lg"  
        overflow="hidden"  
        boxShadow="md"  
        align="stretch"  
        spacing={4}
        _hover={{
	boxShadow: "lg",
	textDecoration: "none",
        }}
    >
    <VStack align="start" px={4} py={2}>
       <Heading as="h3" size="md">
	{name}
       </Heading>
       <Text fontSize="sm">{explanation}</Text>
       <Text fontSize="sm">{page}</Text>
       <Text fontSize="sm">{chapter}</Text>
    </VStack>
    <HStack px={4} pb={4} justify="space-between" w="20">
    <Text fontSize="sm" color="gray.500">
       Read More
    </Text>
   </HStack>
 </VStack>
  );
};
export default WCard;
