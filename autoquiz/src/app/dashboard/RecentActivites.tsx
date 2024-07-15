import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

const RecentActivites = (props: Props) => {
  return (
    <Card className='col-span-4 lg:col-span-3'>
    <CardHeader>
        <CardTitle className='text-2xl text-bold'>Recent Activites</CardTitle>
        <CardDescription>
            You have played a total 7 games.
        </CardDescription>
    </CardHeader>
    <CardContent className='max-h-[580px]' overflow-scroll>
       Historiess
    </CardContent>
    </Card>
  )
}

export default RecentActivites