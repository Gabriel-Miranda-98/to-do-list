import { Header } from "./components/Header";
import styled from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import "./styles/global.css";
import { TaskInfo } from "./components/TaskInfo";
import { TaskList } from "./components/Task";
import { ChangeEvent, useState } from "react";
import { v4 as uuid } from "uuid";

interface TaskData {
  id: string;
  name: string;
  isCompleted: boolean;
}
function App() {
  const [value, setValue] = useState("");
  const [data, SetData] = useState<TaskData[]>([]);
  function handleOnchange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  function handleOnClick() {
    SetData((state) => {
      return [...state, { id: uuid(), isCompleted: false, name: value }];
    });
    console.log(data);
  }

  function onDeleteTask(id: string) {
    console.log(id);
  }

  return (
    <div>
      <Header />
      <div className={styled.container}>
        <div className={styled.actions}>
          <input
            type="text"
            className={styled.input}
            placeholder="Adicione uma nova tarefa"
            value={value}
            onChange={handleOnchange}
          />
          <button
            type="button"
            className={styled.button}
            onClick={handleOnClick}
          >
            Criar
            <PlusCircle size={22} />
          </button>
        </div>

        <TaskInfo task={data} />
        <TaskList task={data} setData={SetData} />
      </div>
    </div>
  );
}

export default App;
