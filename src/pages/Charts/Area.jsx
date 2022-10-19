import React from 'react';
import { Header } from '../../components';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective,Inject,DateTime,Legend,SplineAreaSeries} from "@syncfusion/ej2-react-charts"
import {areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider"

const Area = () => {
  const {currentMode} = useStateContext()
  return (
    <div className='m-4 mt-24 md:m-10 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category="Area" title="Inflation Rates In Percentage" />

    <div className="w-full">
    <ChartComponent
       id='line-chart'
       height='500px'
       primaryXAxis={areaPrimaryXAxis}
       primaryYAxis={areaPrimaryYAxis}
       chartArea={{border: {width: 0}}}
       tooltip={{enable: true}}
       background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[DateTime, Legend, SplineAreaSeries]} />
      <SeriesCollectionDirective>
        {
          areaCustomSeries.map((val, indx) => <SeriesDirective key={indx} {...val} />)
        }
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
 </div>
  )
}

export default Area