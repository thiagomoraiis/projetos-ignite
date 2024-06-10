import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { HomeContainer, StartButton, StopButton } from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { HandPalm, Play } from 'phosphor-react'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCircleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tareda'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no minimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCircleFormData = zod.infer<typeof newCircleFormValidationSchema>

export function Home() {
  const newCycleForm = useForm<NewCircleFormData>({
    resolver: zodResolver(newCircleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCircleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interomper
          </StopButton>
        ) : (
          <StartButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartButton>
        )}
      </form>
    </HomeContainer>
  )
}
