import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'

import { Header } from '../components'
import { employeesData, employeesGrid } from '../data/dummy' //data nad Columns headings
const Employees = () => {
  return (
    <div className='mt-20 m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl'>
      <Header category='Page' title='Employees'/>
      <GridComponent
      id='empcomp'
      dataSource={employeesData}
      allowPaging
      toolbar={['Search']}
      >
        <ColumnsDirective>
        {employeesGrid.map((item,index)=>
        <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees