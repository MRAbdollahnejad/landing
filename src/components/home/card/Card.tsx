import { Box, CardMedia, Divider, Typography } from '@mui/material'

import React from 'react'
import CollorPallet from '../color-pallet/CollorPallet'
import { ClassNames } from '@emotion/react';

type Props = {
  title:string,
  imageSrc:string,
  discount ?: string,
  price:string,
  rate:number,
  colorPalletArray:string[],
}
//title image colorpallet price rate ?discount 
// on hover remove discount bring like remove pallet change neme and divider color
// sx={{":hover":{color:"#063A88"}}}




export default function Card({cardProps}: {cardProps:Props}) {
  return (
    <Box  sx={{width:"288px", height:"347px", boxShadow:"1", borderRadius:"8px" , position:"relative" ,
    ":hover":{boxShadow:4},
      " :hover .child2 ":{color:"#063A88"}, 
    ":hover .child1":{backgroundImage:"linear-gradient(to right, #81b4ff, #6da1f4, #598ee8, #457cdc, #3069cf, #3069cf, #3069cf, #3069cf, #457cdc, #598ee8, #6da1f4, #81b4ff)"}, 
    ":hover .child3":{visibility:"hidden"},
    ":hover .child4":{visibility:"visible"},
    ":hover .child5":{visibility:"hidden"},
    ":hover .child6":{width:"256px",height:"190px"} }}>
      {cardProps.discount&& <Box className="child3" sx={{position:'absolute',top:"16px" ,paddingX:1.5 , paddingY:1 , backgroundColor:"#FDDBC9", color:"#F45E0C" , borderRadius:"0 8px 8px 0"}}>-{cardProps.discount}</Box>}

      {<Box component="img" src='/Desktop/heart.svg' className="child4" sx={{position:'absolute',top:"16px", left:"16px", visibility:"hidden"}}></Box>}

      <Box sx={{display:"flex", flexDirection:"column", gap:"16px",padding:"16px"}}>
        <Box sx={{width:"256px", height:"190px", display:"flex", alignItems:"center"}}>
            <Box className="child6" component="img" sx={{marginRight:"20px"}} src={cardProps.imageSrc} width="217px" height="161px"  />
            <Box className="child5" display={'flex'} gap="8px" flexDirection={"column"} >
              {cardProps.colorPalletArray?.map((item)=>(<CollorPallet key={item} color={item}/>))}
            </Box>
        </Box>
        <Box className="child1" sx={{ height:2,borderRadius:4, backgroundImage: "linear-gradient(to right,#d1c8cd, #b3adb1, #969295, #7a787a, #605f60, #605f60, #605f60, #605f60, #7a787a, #969295, #b3adb1, #d1c8cd)"} }>
        </Box>
        <Box className="child2" height={cardProps.discount ? "38px" : "53px"} ><Typography fontSize={"16px"} fontWeight={"300"} sx={{textOverflow:"ellipsis",whiteSpace:"nowrap" ,overflow:"hidden" }}>{cardProps.title}</Typography></Box>
        <Box height={cardProps.discount? 39 : 24} sx={{display:'flex',justifyContent:'space-between', alignItems:"end"}}>
          <Box>{
          cardProps.discount ? 
            <Box fontSize={"18px"}><Box sx={{color:"#717171",textDecoration:"line-through",fontSize:"14px"}}>${cardProps.price}</Box> <Box> </Box>${cardProps.price}</Box> 
            :
             <Box fontSize={"18px"}>${cardProps.price}</Box>
             }</Box>

          <Box sx={{display:'flex', gap:1/2 ,alignItems:'center'}}> 
             <Box component="img" color={"#063A88"} src='/Desktop/Star.svg' width={14} height={14}></Box>
             <Box><Typography variant="subtitle1" fontWeight={"bold"} sx={{color:"#063A88"}}>{cardProps.rate}</Typography></Box> 
          </Box>
        </Box>
      </Box>
        
        
    </Box>
  )
}