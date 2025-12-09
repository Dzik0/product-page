import { useDataContext } from "../DataProvider";
import Controls from "./Controls";
import Image from "./Image";
import Info from "./Info";
import InfoContainer from "./InfoContainer";
import Price from "./Price";
import Title from "./Title";
import Type from "./Type";

export default function Product() {
  const { data } = useDataContext();
  const productNow = data[0];

  return (
    <div className="items-center lg:mt-30 lg:flex lg:flex-row lg:gap-30">
      <Image img={productNow.img} />
      <InfoContainer>
        <Type>{productNow.type}</Type>
        <Title>{productNow.title}</Title>
        <Info>{productNow.info}</Info>
        <Price discount={productNow.discount}>{productNow.price}</Price>
        <Controls />
      </InfoContainer>
    </div>
  );
}

//HEADER+
//Product Page+
//Image component (control it with css breakpoints)
//Type
//Title
//Info
//Price (with props discout %)
//add to cart component
