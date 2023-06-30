import React from 'react'
import {ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Resize, Inject, DragAndDrop} from '@syncfusion/ej2-react-schedule'

import { Header } from '../components'
import { scheduleData } from '../data/dummy' //events data

const Calendar = () => {
  return (
    <div className='mt-20 m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl'>
    <Header category='App' title='Calendar'/>
     
     <ScheduleComponent
     height='650px'
     eventSettings={{dataSource:scheduleData}}
     selectedDate={new Date(2021,0,10)}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
     </ScheduleComponent>
    </div>
  )
}

export default Calendar