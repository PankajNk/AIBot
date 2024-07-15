import HistoryCard from '@/components/dashboard/HistoryCard'
import QuizMeCard from '@/components/dashboard/QuizMeCard'
import { title } from 'process'
import React from 'react'
import HotTopicsCard from './HotTopicsCard'
import RecentActivites from './RecentActivites'

type Props = {}

export const metadata ={
    title: "Dashboard"
}

const Dashbord = (props: Props) => {
  return (
    <main className='p-8 mx-auto max-w-7xl mt-16'>
        <div className='flex items-center'>
            <h2 className='mr-2 text-3xl font-bold tracking-tight'>Dashboard</h2>
        </div>
        <div className='grid gap-4 mt-4 md:grid-cols-2'>
            <QuizMeCard />
            <HistoryCard />
        </div>

        <div className='grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7'>
          <HotTopicsCard/>
          <RecentActivites />
        </div>
    </main>
  )
}

export default Dashbord