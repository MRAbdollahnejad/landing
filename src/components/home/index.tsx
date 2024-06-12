import React from "react";
import CustomContainer from "./shared/CustomContainer";
import Card from "./card/Card";
import { Box, Typography } from "@mui/material";
import { title } from "process";
import Link from "next/link";
import SingleProduct from "./singleProduct/SingleProduc";

// title,imageSrc,discount,price,rate,colorPalletArray

type Props = {
  title:string,
  imageSrc:string,
  discount ?: string,
  price:string,
  rate:number,
  colorPalletArray:string[],
}

const cardArray=[
  {
    title:"EchoX Pro H900",
    imageSrc:"/Desktop/headphone.png",
    discount:"",
    price:"32.30",
    rate:4.1,
    colorPalletArray:["black"],
  },
  {
    title:"Play Station 4 Pro 1Tb",
    imageSrc:"/Desktop/console.svg",
    discount:"10%",
    price:"1090.00",
    rate:4.4,
    colorPalletArray:["black"],
  },
  {
    title:'Apple MacBook Air 15" w/ Touch ID (2023) - Space Grey (Apple M2 Chip / 256GB SSD / 8GB RAM) - French',
    imageSrc:"/Desktop/lap.svg",
    discount:"",
    price:"1883.5",
    rate:4.5,
    colorPalletArray:["white","#8B8B8B"],
  },
  {
    title:"Airpods pro2",
    imageSrc:"/Desktop/air.svg",
    discount:"10%",
    price:"285.08",
    rate:4.2,
    colorPalletArray:["white"],
  }
]

const imageSource=["/Desktop/apple.svg","/Desktop/sony.svg","/Desktop/sam.svg","/Desktop/canon.svg","/Desktop/huawei.svg","/Desktop/lenovo.svg"];

export default function Home() {
  return (
    <div>
      <p>Welcome home!</p>
      <CustomContainer  hasLink={true} title="Best Sellers" >
        <Box display={"flex"} gap={"24px"}>
        {cardArray?.map((item)=>(<Card key={item.imageSrc} cardProps={item} hoverMode={{hoverMode:"productHover"}}/>))}
        </Box>
      </CustomContainer>
      <Box height="52px"></Box>
      <CustomContainer hasLink={false} title="Top Brands">
      <Box height="43px"></Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          {imageSource.map((source)=>(<Box component="img" src={source}></Box>))}
        </Box>
      </CustomContainer>
      <Box height="48px"></Box>
      <Box width="1440px">
           <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} margin={"auto"} width={"1224px"} height="420px" sx={{backgroundImage:"url(/Desktop/banner.png)", backgroundRepeat:"no-repeat", backgroundPositionX:"center"}}>
          
            <Typography color={"white"} paddingLeft="64px" variant="h3" >SMART WATCH</Typography> 

            <Box height="16px"></Box>

            <Typography color={"white"} paddingLeft="64px" variant="h5" >Various designs and brands</Typography>

            <Box height="32px"></Box>

            <Box display={"flex"} marginLeft={"193px"} justifyContent={"center"} alignItems={"center"} borderRadius="8px" bgcolor={"#FF6951"} width="68px" height="35px">
              <Link href={""}>view</Link>
            </Box>

           </Box>
      
      
      </Box>
   
    </div>
    // <>
    // <SingleProduct></SingleProduct>
    // </>
  );
}
