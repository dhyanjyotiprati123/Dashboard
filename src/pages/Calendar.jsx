import React,{useState} from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month,Agenda,Inject,Resize,DragAndDrop } from "@syncfusion/ej2-react-schedule"
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import {scheduleData} from "../data/dummy"
import { Header } from '../components';


const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Calendar = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };
  
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Calendar" category="App" />

      <ScheduleComponent
         height={"700px"}
         ref={(schedule) => setScheduleObj(schedule)}
         eventSettings={{dataSource: scheduleData}}
         selectedDate={new Date(2021,0,10)}
         dragStart={onDragStart}
      >
        <Inject services={[Day, Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
      </ScheduleComponent>
      <PropertyPane>
        <table
          style={{ width: '100%', background: 'white' }}
        >
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent
                  value={new Date(2021, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  )
}

export default Calendar