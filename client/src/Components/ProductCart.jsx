import { Box, Image, Text } from "@chakra-ui/react"; 
import "./ProductCart.css"
export default function Card(Props) {
  console.log("prop", Props);
  const { id, image,title, category,  price } = Props.Props;
  return (
    <div className="Product_main_div" key={{ id }}>
      <div className="main_div">
      <Image h={"200px"} src={image} borderRadius={"10px"} />
      <br />
      <h4 maxWidth={"200px"} fontWeight={"500"}>
        {title}
      </h4>
      <h5 fontWeight={"500"}>price : ₹ {price}</h5>
      <p
      >
        {category}
      </p>
      </div>
    </div>
  );
}
