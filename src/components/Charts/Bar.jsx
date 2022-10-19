import React from 'react';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective,Inject,Tooltip,ColumnSeries,DataLabel,Category} from "@syncfusion/ej2-react-charts"
import {barCustomSeries, barPrimaryXAxis, barPrimaryYAxis} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider"

const Bar = () => {
    const {currentMode} = useStateContext()
  return (
    <ChartComponent
       id="charts"
       chartArea={{ border: { width: 0 } }}
       tooltip={{ enable: true }}
       primaryXAxis={barPrimaryXAxis}
       primaryYAxis={barPrimaryYAxis}
       background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
        <Inject services={[Tooltip,DataLabel,ColumnSeries,Category]} />
        <SeriesCollectionDirective>
          {
            barCustomSeries.map((val, indx)=> <SeriesDirective key={indx} {...val} />)
          }
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Bar