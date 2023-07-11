import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const Calendar=({onChange})=>{
    const dateHandler=(date)=>{
        const dateStr=`${date?.$D}-${date?.$M+1}-${date?.$y}`
        if(typeof(onChange)==="function"){
            onChange(dateStr);
        }
    }
    return <div>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
        ]}
      >
        <DemoItem>
          <DatePicker defaultValue={dayjs()} onChange={dateHandler}/>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    </div>
}