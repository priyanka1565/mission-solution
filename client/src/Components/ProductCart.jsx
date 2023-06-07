import { Box, Image, Text } from "@chakra-ui/react";

export default function Card(Props) {
  console.log("prop", Props);
  const { id, productImg, category, description, Price } = Props.Props;
  return (
    <Box textAlign={"left"} padding={"10px"} key={{ id }}>
      <Image h={"380px"} src={productImg} borderRadius={"10px"} />
      <br />
      <Text maxWidth={"280px"} fontWeight={"500"}>
        {description}
      </Text>
      <Text fontWeight={"500"}>Price : ₹ {Price}</Text>
      <Box
        borderRadius={"5px"}
        margin={"left"}
        maxWidth={"180px"}
        fontWeight={"700"}
        bgColor={"RGBA(0, 0, 0, 0.48)"}
        color={"white"}
        textAlign={"center"}
      >
        {category}
      </Box>
    </Box>
  );
}
