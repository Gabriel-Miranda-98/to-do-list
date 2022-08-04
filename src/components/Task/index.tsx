import styled from "./style.module.css";
import ClipBoardIcon from "../../assets/Clipboard.png";
import { Trash } from "phosphor-react";
interface TaskData {
  id: string;
  name: string;
  isCompleted: boolean;
}
interface TaskListProps {
  task: TaskData[];
  setData: (value: TaskData[]) => void;
}
export function TaskList({ task, setData }: TaskListProps) {
  function handleOnclick(id: string) {
    const taskWithoutDeleteOnTask = task.filter((task) => {
      return task.id !== id;
    });

    setData(taskWithoutDeleteOnTask);
  }
  function handleOnchange(id: string) {
    const value = task.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }

      return task;
    });

    setData(value);
  }

  return (
    <div className={styled.container}>
      {task.length > 0 ? (
        task.map((task) => (
          <div className={styled.cardTask} key={task.id}>
            <div className={styled.content}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleOnchange(task.id)}
              />
              {task.isCompleted ? (
                <del>{task.name}</del>
              ) : (
                <label>{task.name}</label>
              )}
            </div>
            <button
              className={styled.trashIcon}
              onClick={() => handleOnclick(task.id)}
            >
              <Trash />
            </button>
          </div>
        ))
      ) : (
        <div className={styled.emptyTask}>
          <img src={ClipBoardIcon} alt="Logo de uma nota em branco" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  );
}
