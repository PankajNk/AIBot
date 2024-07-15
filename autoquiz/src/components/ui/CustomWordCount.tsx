"use client"
import { useTheme } from 'next-themes';
import React from 'react'
import D3WordCloud from 'react-d3-cloud';
type Props = {}

const data =[
    {
        text: "Pankaj",
        value: 3,
    },
    {
        text: "Software Development ",
        value: 33,
    },    {
        text: "Bangalore",
        value: 3,
    },    {
        text: "Speed of work ",
        value: 10,
    },
]

const fontSizeMapper =(word: {value: number}) => {
    return Math.log2(word.value) * 5 + 16
}

const CustomWordCount = (props: Props) => {
    const theme =useTheme()
  return (
    <>
    <D3WordCloud 
    height={550}
    data={data}
    font="times"
    fontSize={fontSizeMapper}
    rotate={0}
    padding={10}
    fill = {theme.theme == "dark" ? "white" : "black"}
    />
    </>
  )
}

export default CustomWordCount