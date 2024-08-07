import { Tag, Text } from "@chakra-ui/react";
import { Customcard } from "../../../chakra/Customcard"; // Ensure this path is correct

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <Customcard
      bgColor={inverted ? "p.purple" : "white"}
      bgImage={`url(${imgUrl})`}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        mt="4"
        fontWeight="medium"
        textStyle="h5"
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </Customcard>
  );
};

export default InfoCard;
