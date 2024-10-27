import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import WCard from "./WCard";

const words = [
   {
     name: "Class",
     explanation: "A blueprint for creating an object",
     page: 10,
     chapter: 1,
   },
   {
     name: "Object",
     explanation: "An instance of a class",
     page: 12,
     chapter: 1,
   },
];

const WordsSection = () => {
    return (
       <FullScreenSection
	backgroundColor="#14532"
	isDarkbackground
	p={8}
	alignItems="flex-start"
	spacing={8}
          >
	<Heading as="h1" id="words-section">
	   Featured Words
	</Heading>
	<Box
	   display="grid"
	   gridTemplateColumns="repeat(2, minmax(0, 1fr))"
	   gridGap={8}
>
{words.map((word) => (
  <WCard
      key={word.name}     
      title={word.name}     
      explanation={word.explanation}     
      page={word.page}     
      chapter={word.chapter}     
  />
))}
       </Box>
     </FullScreenSection>
    );  
};
export default WordsSection;
