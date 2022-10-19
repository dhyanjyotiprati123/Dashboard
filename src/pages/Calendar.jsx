import React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month,Agenda,Inject,Resize,DragAndDrop } from "@syncfusion/ej2-react-schedule"
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {scheduleData} from "../data/dummy"
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Calendar" category="App" />

      <ScheduleComponent
         height={"700px"}
         eventSettings={{dataSource: scheduleData}}
         selectedDate={new Date(2021,0,10)}
      >
        <Inject services={[Day, Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar