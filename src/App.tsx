import { useRef, useState } from "react";
import "./App.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  DragAndDrop,
  Resize,
} from "@syncfusion/ej2-react-schedule";
import {
  DragAndDropEventArgs,
  TreeViewComponent,
} from "@syncfusion/ej2-react-navigations";

const localData = {
  dataSource: [
    {
      Id: 1,
      StartTime: new Date(2022, 11, 30, 6, 0),
      EndTime: new Date(2022, 11, 30, 8, 0),
      Subject: "Blocked",
      IsBlock: true,
    },
    {
      Id: 2,
      EndTime: new Date(2022, 11, 30, 9, 0),
      StartTime: new Date(2022, 11, 30, 6, 0),
      Subject: "Second Testing",

      IsReadOnly: true,
    },
    {
      Id: 3,
      EndTime: new Date(2022, 11, 30, 10, 0),
      StartTime: new Date(2022, 11, 30, 6, 0),
      subject: "Testing",
    },
    {
      Id: 4,
      EndTime: new Date(2022, 11, 30, 12, 0),
      StartTime: new Date(2022, 11, 30, 6, 0),
      Subject: "Testing",
    },
  ],
};

const treeViewData = [
  { Id: 1, Name: "Peter" },
  { Id: 1, Name: "James" },
  { Id: 1, Name: "David" },
  { Id: 1, Name: "steve" },
];

const field = { dataSource: treeViewData, id: "Id", text: "Name" };

function App() {
  const scheduleComponentRef = useRef<ScheduleComponent>(null);

  const treeDrugStopHandler = (args: DragAndDropEventArgs) => {
    let cellData = scheduleComponentRef.current?.getCellDetails(args.target);
    let eventData = {
      Subject: args.draggedNodeData.text,
      StartTime: cellData?.startTime,
      EndTime: cellData?.endTime,
      IsAllDay: cellData?.isAllDay,
    };
    scheduleComponentRef.current?.addEvent(eventData);
  };

  return (
    <div className="App main_view">
      <ScheduleComponent eventSettings={localData} ref={scheduleComponentRef}>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]}
        />
      </ScheduleComponent>

      <div className="staff_list">
        <h2>Staff List</h2>
        <TreeViewComponent
          fields={field}
          allowDragAndDrop={true}
          nodeDragStop={treeDrugStopHandler}
        />
      </div>
    </div>
  );
}

export default App;
