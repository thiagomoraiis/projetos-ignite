import { PlusCircle } from "@phosphor-icons/react";
import styles from './TaskForm.module.css'
import { ChangeEvent, FormEvent, useState } from "react";
import { TasksType } from "../App";


type TaskFormProps = {
  onAddTask(newTask: TasksType): void
}


export function TaskForm({ onAddTask }: TaskFormProps){
  const [ content, setContent ] = useState('');
  const isContentEmpty = content.length === 0;

  function handleContent(e: ChangeEvent<HTMLInputElement>){
    setContent(e.target.value);
  }

  function handleSubmit(e: FormEvent){
    e.preventDefault();

    if (content === "") return;

    onAddTask({
      id: Date.now(), content: content, seen: false
    });
    setContent("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="text"
        required
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        value={content}
        onChange={handleContent}
      />
      <button
        type="submit"
        disabled={isContentEmpty}
        className={styles.button}
      >
        Criar
        <PlusCircle size={16} weight='bold'/>
      </button>
    </form>
  )
}