import React from 'react';
import {Header, LineChart} from "../../components"

const Line = () => {
  return (
    <div className='m-4 mt-24 md:m-10 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
       <Header category="Charts" title="Inflation Rates" />

       <div className="w-full">
        <LineChart />
       </div>
    </div>
  )
}

export default Line