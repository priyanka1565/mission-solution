import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import Data from "../Data/Products";
import Card from "./Card";
import Filter from "./Filter";

export default function ProductList() {
  const Mydata = Data;
  // console.log(Mydata)
  const [AppendData, setAppendData] = useState(Mydata);

  function HandelClick(category, price) {
    let FilteredData 
    // filter according to price 
    if (price) {
      FilteredData = Mydata.filter((elem) => elem?.Price == price);
    }
    // filter according to category 
    if (category) {
      FilteredData = Mydata.filter((elem) => elem?.category == category);
    }
    // filter according to both price and category
    if (price && category) {
       FilteredData = Mydata.filter(
         (elem) => elem?.Price == price && elem?.category == category
       );
    }
    // console.log(FilteredData);
    setAppendData(FilteredData);
  }
  return (
    <>
      <Filter HandelClick={HandelClick} />
      <SimpleGrid
        padding={"20px"}
        columns={[1, 3, 3, 4]}
        justifyContent={"space-evenly"}
        spacing={"40px"}
      >
        {AppendData.map((elem) => {
          return <Card Props={elem} />;
        })}
      </SimpleGrid>
    </>
  );
}
