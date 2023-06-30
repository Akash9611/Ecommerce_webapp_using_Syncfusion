import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Page, Sort, ExcelExport ,PdfExport,Edit, ContextMenu, Inject, Filter } from '@syncfusion/ej2-react-grids'

import { Header } from '../components'
import { ordersData, ordersGrid } from '../data/dummy' //data nad Columns headings
const Orders = () => {
  return (
    <div className='mt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Page' title='Orders'/>
    <GridComponent 
    id='gridcomp'
    dataSource={ordersData}
    allowPaging
    allowSorting
    >
      <ColumnsDirective>
      {ordersGrid.map((item,index)=>
      <ColumnDirective key={index} {...item}/>)}
      </ColumnsDirective>
      <Inject services={[Resize, Page, Sort, Filter, ExcelExport, PdfExport, Edit]} />
    </GridComponent>
    </div>
  )
}

export default Orders