import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Tooltip,
  Category,
  StackingColumnSeries
} from "@syncfusion/ej2-react-charts";

import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider"

const Stacked = ({width, height}) => {
   const {currentMode} =useStateContext()
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border:{width: 0}}}
      tooltip={{enable: true}}
      legendSettings={{backgroundColor: "white"}}
      background={currentMode === 'Dark' ? '#fff' : '#fff'}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {
          stackedCustomSeries.map((val, indx)=> <SeriesDirective key={indx} {...val} />)
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked