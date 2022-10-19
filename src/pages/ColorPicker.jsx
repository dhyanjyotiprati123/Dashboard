import React from 'react';
import {ColorPickerComponent} from "@syncfusion/ej2-react-inputs";
import { Header } from '../components';

const ColorPicker = () => {
  const changeColor = (args)=>{
     document.getElementById("preview").style.backgroundColor = args.currentValue.hex
  }
  return (
    <div className='m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Color Picker" />

        <div className="text-center">
          <div id='preview' />

          <div className="flex justify-center items-center gap-20 flex-wrap">
            <div>
              <p className='text-2xl font-semibold mb-4 mt-2'>Inline Pallete</p>
              <ColorPickerComponent id='inline-pallete' mode='Palette' inline modeSwitcher={false} showButtons={false} change={changeColor} />
            </div>

            <div>
              <p className='text-2xl font-semibold mb-4 mt-2'>Inline Picker</p>
              <ColorPickerComponent id='inline-picker' mode='Picker' inline modeSwitcher={false} showButtons={false} change={changeColor} />
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default ColorPicker