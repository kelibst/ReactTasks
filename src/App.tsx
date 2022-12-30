import { useState } from 'react'
import './App.css'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop,Resize} from '@syncfusion/ej2-react-schedule'

const localData = {
  dataSource: [
    {
    Id:1,
    StartTime: new Date(2022, 11, 30, 6, 0),
    EndTime: new Date(2022, 11, 30, 8, 0),
    Subject: "Blocked",
    IsBlock: true,
    
    },
    {
    Id:2,
    EndTime: new Date(2022, 11, 30, 9, 0),
    StartTime: new Date(2022, 11, 30, 6, 0),
    Subject: "Second Testing",
    
    IsReadOnly:true,
    },
    {
    Id:3,
    EndTime: new Date(2022, 11, 30, 10, 0),
    StartTime: new Date(2022, 11, 30, 6, 0),
    subject: "Testing",
    
    },
    {
    Id:4,
    EndTime: new Date(2022, 11, 30, 12, 0),
    StartTime: new Date(2022, 11, 30, 6, 0),
    Subject: "Testing",
    }
  ],
}
console.log(localData)

function App() {

  return (
    <div className="App">
      <ScheduleComponent
      eventSettings={localData}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
      </ScheduleComponent>
    </div>
  )
}

export default App
