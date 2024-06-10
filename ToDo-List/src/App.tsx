import { Header } from './components/Header'
import styles from './App.module.css'
import { TaskForm } from './components/TaskForm'
import { TasksList } from './components/TasksList'
import { useState } from 'react';

export type TasksType = {
  id: number,
  content: string,
  seen: boolean
}


function App() {
  const [ tasks, setTasks ] = useState([] as TasksType[]);

  function handleAddTask(newTask: TasksType) {
    setTasks([ ...tasks, newTask ])
  }

  function handleChangeTask(newTask: TasksType) {
    setTasks(
      tasks.map(task =>
        task.id === newTask.id ? newTask : task
      )
    );
  }

  function handleDeleteTask(newTask: TasksType){
    setTasks(
      tasks.filter(task => task.id !== newTask.id)
    )
  }

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <section className={styles.section}>
          <TaskForm
            onAddTask={handleAddTask}
          />
        </section>
        
        <section className={styles.section}>
          <TasksList
            tasks={tasks.filter(task => task.content !== '')}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        </section>
      </main>
    </>
  )
}

export default App