import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, Inject, Legend, DateTime } from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
const Area = () => {
  return (
    <div className='mt-20 m-4 md:m-10 p-4 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
      <Header category='Chart' title='Area' />

      <ChartComponent
      id='area-chart'
       height='420px'
       width='auto' //width:'100%'
       primaryXAxis={areaPrimaryXAxis}
       primaryYAxis={areaPrimaryYAxis}
        chartArea={{border:{width:0}}}
>
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item,index)=>
          <SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>
        <Inject services={[SplineAreaSeries,DateTime, Legend]} />
      </ChartComponent>
    </div>
  )
}

export default Area