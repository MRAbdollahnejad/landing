import { Box, Divider, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Typography } from '@mui/material'
import { relative } from 'path'
import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { CheckCircleRounded } from '@mui/icons-material';
import { blue, red } from '@mui/material/colors';

type Props = {}



export default function SingleProduct({}: Props) {

  const [selectedColor, setSelectedColor] = React.useState('neutral');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };


  return (
    <Box display={"flex"} gap={"24px"}>
    <Box width={"496px"} height={"433px"} display={"flex"} flexDirection={"column"} gap={"24px"}>
      <Box sx={{backgroundImage:"url('/Desktop/image.svg')", backgroundRepeat:'no-repeat'}} width={"auto"} height={"338px"}>
      <Box width={"20px"} display={"flex"} gap={"12px"} flexDirection={"column"}>
          <Box component={"img"} src="/Desktop/icons/heart.svg"></Box>
          <Box component={"img"} src="/Desktop/icons/notification-bing.svg" ></Box>
          <Box component={"img"} src="/Desktop/icons/directbox-send.svg"></Box>
        </Box>
      </Box>
      <Box>here</Box>
    </Box>
    <Box width={"343px"} height={"397px"} display={'flex'} flexDirection={"column"} gap={"32px"}> 
      <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
        <Box>
          <Box><Typography fontSize={"20px"}>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</Typography></Box>
          <Box display={'flex'} gap={"16px"}>
            <Box display={'flex'} alignItems={"center"} width={"43px"} height={"24px"} borderRadius={"4px"} color={"white"} bgcolor={"#063A88"}><Box component={"img"} src="/Desktop/icons/Star.svg" height={"18px"} width={"18px"} ></Box><Typography>4.9</Typography></Box>
            <Divider orientation="vertical" flexItem/>
            <Box color={"#717171"}>sold 125</Box>
          </Box>
        </Box>
        <Box component={"img"} src="/Desktop/frameDelivery.svg" width={"327px"}></Box>
        <Box fontSize={"16px"} display={"flex"} gap={"40px"} alignItems={"center"} >
          <Typography>Select color</Typography>
          <Box display={"flex"}>
            <FormControl sx={{display:'flex'}}  component="fieldset">
             <RadioGroup sx={{display:'flex'}} aria-label="color" name="color" value={selectedColor} onChange={handleColorChange}>
              <Box><FormControlLabel value="black" control={<Radio sx={{color:"#959595",'&.Mui-checked': {color:"#959595",}}} checkedIcon={<CheckCircleRounded />}/>} label={undefined}  />
              <FormControlLabel value="neutral" control={<Radio sx={{color:"#983527", "&.Mui-checked":{color:"#983227"}}} checkedIcon={<CheckCircleRounded/>}/>} label={undefined}  /></Box>
            </RadioGroup>
           </FormControl>
          </Box>
          </Box> 
      </Box>
      <Box display={'flex'} width={"288px"} height={"160px"}>
        <Box width={"188px"} display={'flex'} flexDirection={"column"} justifyContent={'space-between'} color={"#717171"} paddingLeft={"24px"}>
            <li>Brand</li>
            <li>Model name</li>
            <li>Screen Size</li>
            <li>Hard disk size</li>
            <li>CPU Model</li>
        </Box>
        <Box width={"104px"} display={'flex'} flexDirection={"column"} justifyContent={'space-between'}>
            <dl>Apple</dl>
            <dl>Macbook Pro</dl>
            <dl>13.3 Inches</dl>
            <dl>256 GB</dl>
            <dl>core i5</dl>
        </Box>
      </Box>
    </Box>
    </Box>
  )
}
