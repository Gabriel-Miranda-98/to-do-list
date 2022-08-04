import styled from "./style.module.css";
interface TaskData {
  id: string;
  name: string;
  isCompleted: boolean;
}
interface TaskInfoProps {
  task: TaskData[];
}
export function TaskInfo({ task }: TaskInfoProps) {
  const CounterTaskComplete = task.reduce((acc, task) => {
    if (task.isCompleted) {
      acc += 1;
    }
    return acc;
  }, 0);

  return (
    <div className={styled.container}>
      <div className={styled.info_create}>
        <span>Tarefas Criadas</span>
        <strong>{task.length}</strong>
      </div>
      <div className={styled.info_conclusion}>
        <span>Concluídas</span>
        {CounterTaskComplete > 0 ? (
          <strong>
            {CounterTaskComplete} de {task.length}
          </strong>
        ) : (
          <strong>0</strong>
        )}
      </div>
    </div>
  );
}
