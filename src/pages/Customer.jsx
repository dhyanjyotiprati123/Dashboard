import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Filter, Toolbar, Sort, Selection, Edit, Inject} from "@syncfusion/ej2-react-grids"
import {customersData, customersGrid} from "../data/dummy";
import { Header } from '../components';

const Customer = () => {
  const editSettings={
     allowDeleting: true,
     allowEditing: true
  }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 mt-24 bg-white rounded-3xl'>
    <Header title="Customers" category="Page" />

    <GridComponent
       dataSource={customersData}
       allowPaging
       toolbar={["Delete"]}
       width="auto"
       allowSorting
       editSettings={editSettings}
  >
    <ColumnsDirective>
      {
        customersGrid.map((val, indx)=> (
          <ColumnDirective key={indx} {...val} />
        ))
      }
    </ColumnsDirective>
    <Inject services={[ Page,Toolbar, Filter, Sort, Selection, Edit]} />
  </GridComponent>
</div>
  )
}

export default Customer