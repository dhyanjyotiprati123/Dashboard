import React from 'react';
import {GoPrimitiveDot} from "react-icons/go";
import {Stacked, SparkLine, PieChart, Button} from "../components/index";
import {earningData, SparklineAreaData, ecomPieChartData} from "../data/dummy";
import {useStateContext} from "../contexts/ContextProvider";
import Bar from '../components/Charts/Bar';


const Home = () => {
  const {currentColor} = useStateContext()
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-6 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$6,09,080709</p>
            </div>
          </div>

          <div className="mt-6">
            <Button color="white" bgColor={currentColor} borderRadius="10px" text="Download" size="md" />
          </div>
        </div>

        <div className='flex flex-wrap m-3 justify-center items-center gap-2'>
           {
            earningData.map((val)=> (
              <div key={val.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
                <button style={{color: val.iconColor, background: val.iconBg}} type='button' className='text-3xl opacity-0.9 p-4 rounded-full hover:drop-shadow-2xl'>
                  {val.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>
                    {val.amount}
                  </span>
                  <span className={`text-sm text-${val.pcColor} ml-2`}>
                    {val.percentage}
                  </span>
                </p>
                <p className='text-md text-gray-500 mt-1'>
                  {val.title}
                </p>
              </div>
            ))
           } 
        </div>
      </div>

      <div className='flex flex-wrap justify-around gap-10 border-color border-1 h-auto'>
         <div className='bg-white dark:text-gray-300 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
           <div className="flex justify-between">
             <p className='font-semibold text-xl'>Revenue Updates</p>
             <div className="flex items-center gap-4">
               <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
               </p>
               <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
               </p>
             </div>
           </div>

           <div className="flex flex-wrap gap-10 justify-center mt-10">
             
              <div className="border-r-1 border-color m-4 pr-10">
               <div className="">
                 <p>
                   <span className='text-3xl font-bold'>$67,4809</span>
                   <span className='p-1.5 rounded-full cursor-pointer text-white bg-green-400 hover:drop-shadow-xl ml-3 text-xs'>33%</span>
                 </p>
                 <p className='text-gray-500 mt-1'>Budget</p>
               </div>

               <div className="mt-10">
                 <p>
                   <span className='text-3xl font-bold'>$37,2191</span>
                 
                 </p>
                 <p className='text-gray-500 mt-1'>Expense</p>
               </div>

               <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkline" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
               </div>

               <div className="mt-10">
                 <Button color="white" bgColor={currentColor} text="Download Report" borderRadius="10px" />
               </div>
             </div>

             <div className="">
               <Stacked width="320px" height="360px" />
             </div>
            
           </div>
         </div>
         <div className=" m-3 p-5 rounded-2xl md:w-780">
           <div className=" flex flex-col gap-10 justify-center flex-wrap ">
              <div className="h-200 bg-white dark:text-gray-300 dark:bg-secondary-dark-bg p-3 rounded-3xl">
                 <div className="flex justify-between">
                  <p className='text-xl'>Earnings</p>
                  <p className='text-lg'>$34,345,5690 <span className='text-sm'>Monthly Revenue</span></p>
                 </div>
                 <div>
                   <Bar />
                 </div>
              </div>

              <div className="p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-780 rounded-3xl">
                <PieChart id="chart-pie" data={ecomPieChartData} legendVisiblity={false} height="300px" />
              </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Home