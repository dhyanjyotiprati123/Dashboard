import React from 'react';
import {GridComponent, ColumnDirective, ColumnsDirective, Search, Page, Toolbar, Inject} from "@syncfusion/ej2-react-grids";
import { Header } from '../components';
import {employeesData, employeesGrid} from "../data/dummy"

const Employee = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header title="Employee" category="Page" />

        <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {
            employeesGrid.map((val, indx)=> (
              <ColumnDirective key={indx} {...val} />
            ))
          }
        </ColumnsDirective>
        <Inject services={[ Page,Toolbar, Search]} />
      </GridComponent>
    </div>
  )
}

export default Employee