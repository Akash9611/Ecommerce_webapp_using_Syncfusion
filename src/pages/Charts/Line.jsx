import React from 'react'
import { Header, LineChart } from '../../components'

const Line = () => {
  return (
    <div className='mt-20 m-4 md:m-10 p-4 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
    <Header category='Chart' title='Line'/>

    <div className='w-full'>
      <LineChart/>
    </div>
    </div>
  )
}

export default Line