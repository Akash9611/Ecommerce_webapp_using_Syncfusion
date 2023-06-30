import {  GridComponent,  ColumnsDirective,ColumnDirective,Page, Selection, Filter, Edit,Sort, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import React from 'react'

import { Header } from '../components'
import { customersData, customersGrid } from '../data/dummy' //data nad Columns headings

const Customers = () => {
  return (
    <div className='mt-20 m-2 md:m-10 p-2 md:p-10 bg-white rounded-2xl'>
      <Header category='Page' title='Customers'/>
      
      <GridComponent
      id='customergrid'
      dataSource={customersData}
      allowPaging
      toolbar={['Delete']}
      editSettings={{allowDeleting:true ,allowEditing:true }}
      width='auto'
      allowSorting
      >
        <ColumnsDirective>
        {customersGrid.map((item,index)=>
        <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit,Sort, Toolbar, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers