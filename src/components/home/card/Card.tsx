import { Box, Button, SvgIcon, Typography } from '@mui/material'

import React from 'react'
import CollorPallet from '../color-pallet/CollorPallet'


type Props = {
  title:string,
  imageSrc:string,
  discount ?: string,
  price:string,
  priceAfterDiscount:string,
  rate:number,
  colorPalletArray:string[],
}
type Hover={
  hoverMode:"landingHover" | "productHover",
}
//title image colorpallet price rate ?discount 
// on hover landing page : remove discount bring like remove pallet change neme and divider color
// sx={{":hover":{color:"#063A88"}}}
// on hover product page : remover discount bring like on right bottom remove pallet change name and divider color remove price and rate

export default function Card({cardProps,hoverMode}: {cardProps:Props,hoverMode:Hover}) {
  return (<>
  {hoverMode.hoverMode==="landingHover"&& <Box  sx={{width:"288px", height:"347px", boxShadow:"1", borderRadius:"8px" , position:"relative" ,
    ":hover":{boxShadow:4},
    ":hover .cardTitle ":{color:"#063A88"}, 
    ":hover .cardDivider":{backgroundImage:"linear-gradient(to right, #81b4ff, #6da1f4, #598ee8, #457cdc, #3069cf, #3069cf, #3069cf, #3069cf, #457cdc, #598ee8, #6da1f4, #81b4ff)"}, 
    ":hover .cardDiscount":{visibility:"hidden"},
    ":hover .heartIcon":{visibility:"visible"},
    ":hover .cardColorPallet":{visibility:"hidden"},
    ":hover .imageHoverEffect":{width:"272px",height:"202px"}}} >
      {cardProps.discount&& <Box className="cardDiscount" sx={{position:'absolute',top:"16px" ,paddingX:1.5 , paddingY:1 , backgroundColor:"#FDDBC9", color:"#F45E0C" , borderRadius:"0 8px 8px 0"}}>-{cardProps.discount}</Box>}

      {<Box component="img" src='/Desktop/heart.svg' className="heartIcon" sx={{position:'absolute',top:"16px", left:"16px", visibility:"hidden"}}></Box>}

      <Box sx={{display:"flex", flexDirection:"column", gap:"16px",padding:"16px"}}>
        <Box sx={{width:"256px", height:"190px", display:"flex", alignItems:"center"}}>
            <Box className="imageHoverEffect" component="img" sx={{marginRight:"20px"}} src={cardProps.imageSrc} width="217px" height="161px"  />
            <Box className="cardColorPallet" display={'flex'} gap="8px" flexDirection={"column"} >
              {cardProps.colorPalletArray?.map((item)=>(<CollorPallet key={item} color={item}/>))}
            </Box>
        </Box>
        <Box className="cardDivider" sx={{ height:"1px",borderRadius:4, backgroundImage: "linear-gradient(to right,#d1c8cd, #b3adb1, #969295, #7a787a, #605f60, #605f60, #605f60, #605f60, #7a787a, #969295, #b3adb1, #d1c8cd)"} }>
        </Box>
        <Box className="cardTitle" height={cardProps.discount ? "38px" : "53px"} ><Typography fontSize={"16px"} fontWeight={"300"} sx={{textOverflow:"ellipsis",whiteSpace:"nowrap" ,overflow:"hidden" }}>{cardProps.title}</Typography></Box>
        <Box height={cardProps.discount? 39 : 24} sx={{display:'flex',justifyContent:'space-between', alignItems:"end"}}>
          <Box>{
          cardProps.discount ? 
            <Box fontSize={"18px"}><Box sx={{color:"#717171",textDecoration:"line-through",fontSize:"14px"}}>${cardProps.priceAfterDiscount}</Box> <Box> </Box>${cardProps.price}</Box> 
            :
             <Box fontSize={"18px"}>${cardProps.price}</Box>
             }</Box>

          <Box sx={{display:'flex', gap:1/2 ,alignItems:'center'}}> 
             <Box component="img" color={"#063A88"} src='/Desktop/Star.svg' width={14} height={14}></Box>
             <Box><Typography variant="subtitle1" fontWeight={"bold"} sx={{color:"#063A88"}}>{cardProps.rate}</Typography></Box> 
          </Box>
        </Box>
      </Box>
    </Box> }
    {hoverMode.hoverMode==="productHover"&& <Box  sx={{width:"288px", height:"347px", boxShadow:"1", borderRadius:"8px" , position:"relative" ,
    ":hover":{boxShadow:4},
    ":hover .cardTitle ":{color:"#063A88"}, 
    ":hover .cardDivider":{backgroundImage:"linear-gradient(to right, #81b4ff, #6da1f4, #598ee8, #457cdc, #3069cf, #3069cf, #3069cf, #3069cf, #457cdc, #598ee8, #6da1f4, #81b4ff)"}, 
    ":hover .cardDiscount":{visibility:"hidden"},
    ":hover .heartIcon":{visibility:"visible"},
    ":hover .cardColorPallet":{visibility:"hidden"},
    ":hover .imageHoverEffect":{width:"272px",height:"202px"},
    ":hover .priceAndRate":{visibility:"hidden"},
    ":hover .addBtn":{visibility:"visible"}}} >
      {cardProps.discount&& <Box className="cardDiscount" sx={{position:'absolute',top:"16px" ,paddingX:1.5 , paddingY:1 , backgroundColor:"#FDDBC9", color:"#F45E0C" , borderRadius:"0 8px 8px 0"}}>-{cardProps.discount}</Box>}

      {<Box component="img" src='/Desktop/heart.svg' className="heartIcon" sx={{position:'absolute',right:"16px", bottom:"27px", visibility:"hidden"}}></Box>}

      <Box sx={{display:"flex", flexDirection:"column", gap:"16px",padding:"16px"}}>
        <Box sx={{width:"256px", height:"190px", display:"flex", alignItems:"center"}}>
            <Box className="imageHoverEffect" component="img" sx={{marginRight:"20px"}} src={cardProps.imageSrc} width="217px" height="161px"  />
            <Box className="cardColorPallet" display={'flex'} gap="8px" flexDirection={"column"} >
              {cardProps.colorPalletArray?.map((item)=>(<CollorPallet key={item} color={item}/>))}
            </Box>
        </Box>
        <Box className="cardDivider" sx={{ height:"1px",borderRadius:4, backgroundImage: "linear-gradient(to right,#d1c8cd, #b3adb1, #969295, #7a787a, #605f60, #605f60, #605f60, #605f60, #7a787a, #969295, #b3adb1, #d1c8cd)"} }>
        </Box>
        <Box className="cardTitle" height={cardProps.discount ? "38px" : "53px"} ><Typography fontSize={"16px"} fontWeight={"300"} sx={{textOverflow:"ellipsis",whiteSpace:"nowrap" ,overflow:"hidden" }}>{cardProps.title}</Typography></Box>
        <Box className="priceAndRate" height={cardProps.discount? 39 : 24} sx={{display:'flex',justifyContent:'space-between', alignItems:"end"}}>
          <Box>{
          cardProps.discount ? 
            <Box fontSize={"18px"}><Box sx={{color:"#717171",textDecoration:"line-through",fontSize:"14px"}}>${cardProps.priceAfterDiscount}</Box> <Box> </Box>${cardProps.price}</Box> 
            :
             <Box fontSize={"18px"}>${cardProps.price}</Box>
             }</Box>

          <Box sx={{display:'flex', gap:1/2 ,alignItems:'center'}}> 
             <Box component="img" color={"#063A88"} src='/Desktop/Star.svg' width={14} height={14}></Box>
             <Box><Typography variant="subtitle1" fontWeight={"bold"} sx={{color:"#063A88"}}>{cardProps.rate}</Typography></Box> 
          </Box>
        </Box>
        <Button className='addBtn' variant="outlined" startIcon={<img src='/Desktop/shopping-cart.svg'></img>} sx={{visibility:"hidden", position:"absolute", bottom:"15px", left:"16px" , height:"48px"}}>Add to cart</Button>
      </Box>
    </Box>}
  </>
  )
}