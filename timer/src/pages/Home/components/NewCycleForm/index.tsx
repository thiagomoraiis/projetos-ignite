import { useContext } from 'react'
import { FormContainer, MinutesAmountButton, TaskInput } from './styles'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  /* Pega o contexto "register" passado pelo FormProvider do react hook form */
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        list="task-suggestion"
        disabled={!!activeCycle}
        placeholder={'Dê um nome para seu projeto'}
        /* Irá dizer para o react hook form quais campos existem no form */
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountButton
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        disabled={!!activeCycle}
        min={1}
        max={60}
        /* Mesma lógica do outro register, mas esse irá assinar o valor desse
        input como sendo um número. O padrão é string */
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
