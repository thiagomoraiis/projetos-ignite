import { Trash } from "@phosphor-icons/react";
import { TasksType } from "../App";
import styles from "./Task.module.css"


type TaskProps = {
  task: TasksType;
  onChangeInTaskSeen(task: TasksType, newSeen: boolean): void;
  onChangeInTaskContent(task: TasksType, newContent: string): void;
  onDeleteTask(task: TasksType): void;
}

export function Task({
  task,
  onChangeInTaskContent,
  onChangeInTaskSeen,
  onDeleteTask
} : TaskProps) {
  return (
    <li>
      <input type="checkbox"
        checked={task.seen}
        onChange={(e) =>
          onChangeInTaskSeen(task, e.target.checked)
        }
        />
      <input
        type="text"
        className={styles.input}
        value={task.content}
        onChange={(e) =>
          onChangeInTaskContent(task, e.target.value)
        }
      />
      <button onClick={() => onDeleteTask(task)}>
        <Trash size={18}/>
      </button>
    </li>
  )
}