import { Box, Container, CssBaseline, Divider, Typography, createTheme } from '@mui/material'
import Link from 'next/link';
import React, { ReactNode } from 'react'

type Props = {
    title:string,
    hasLink:boolean,
    children:ReactNode;
}


export default function CustomContainer({title,hasLink,children}: Props) {
  return (
    <Box display={"flex"} justifyContent={"center"} width={"1440px"} >
      <Box sx={{width:"1224px" }}>
        <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:"16px"}}>
            <Typography variant='h4'>{title}</Typography>
            <Box>{hasLink && <Link href={""}><Box sx={{display:"flex"}}><Typography variant='subtitle1'>View all</Typography> <Box component="img" width="24" height="24" src='/Desktop/arrow-circle-right.png'></Box> </Box></Link> }</Box>
        </Box>
        <Box sx={{backgroundColor:"#B4B4B4" , height:"2px", width:"100%" , borderRadius:1 ,marginBottom:"32px"}} ></Box>
        <Box>{children}</Box>
        </Box> 
    </Box>
  )
}