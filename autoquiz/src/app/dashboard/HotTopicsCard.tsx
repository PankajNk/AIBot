import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CustomWordCount from '@/components/ui/CustomWordCount'
import React from 'react'

type Props = {}

const HotTopicsCard = (props: Props) => {
  return (
    <Card className='col-span-4'>
        <CardHeader>
            <CardTitle className='text-2xl font-bold'>Hot topics</CardTitle>
            <CardDescription> Click here to start quiz</CardDescription>
        </CardHeader>
        <CardContent className='pl-2'>
          <CustomWordCount/>
        </CardContent>
    </Card>
  )
}

export default HotTopicsCard