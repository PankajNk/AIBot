"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { BrainCircuit } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {}

const HistoryCard = (props: Props) => {
  const router = useRouter();
  return (
    <Card className='hover: cursor-pointer hover:opacity-75'onClick={() =>{
        router.push("/history")
    }}>
    <CardHeader className='flex flex-row items-center justify'>
        <CardTitle className='text-2xl text-bold'>History</CardTitle>
        <BrainCircuit size={28} strokeWidth={2.5} />
    </CardHeader>
    <CardContent className='text-sm text-muted-foreground'>
       See your Previews attemps
    </CardContent>
</Card>
  )
}

export default HistoryCard