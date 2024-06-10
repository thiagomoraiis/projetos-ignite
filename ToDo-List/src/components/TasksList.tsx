import { Notepad } from '@phosphor-icons/react'
import styles from './TasksList.module.css'
import { TasksType } from '../App';
import { Task } from './Task';


type TaskListProps = {
  tasks: TasksType[]
  onChangeTask(newTask: TasksType): void
  onDeleteTask(newTask: TasksType): void
}

export function TasksList({ tasks, onChangeTask, onDeleteTask }: TaskListProps){
  const tasksLength = tasks.length;
  const isTasksHasValue = tasksLength > 0;
  const countSeen = tasks.filter(task => task.seen === true).length


  function handleChangeInTaskSeen(task: TasksType, newSeen: boolean) {
    onChangeTask({ ...task, seen: newSeen })
  }

  function handleChangeInTaskContent(task: TasksType, newContent: string) {
    onChangeTask({ ...task, content: newContent })
  }

  function handleDeleteTask(task: TasksType) {
    onDeleteTask(task)
  }

  return (
    <div className={styles.tasks}>
      <header className={styles.header}>
        <strong>
          Tarefas criadas
          <span>{isTasksHasValue ? tasksLength : '0'}</span>
        </strong>
        <strong>
          Concluídas
          <span>{isTasksHasValue ? `${countSeen} de ${tasksLength}` : '0'}</span>
        </strong>
      </header>

      { (isTasksHasValue ) ? (
        <ul className={styles.content}>
          { tasks.map(task =>
            <Task
              key={task.id}
              task={task}
              onChangeInTaskContent={handleChangeInTaskContent}
              onChangeInTaskSeen={handleChangeInTaskSeen}
              onDeleteTask={handleDeleteTask}
            />
          )}
        </ul>
      ) : (
        <div className={styles.empty}>
          <Notepad size={64}/>
          <div className={styles.notice}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      )}
    </div>
  )
}