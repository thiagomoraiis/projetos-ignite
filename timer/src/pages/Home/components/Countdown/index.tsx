import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CountdownContainer, Separator } from './styles'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  /* Irá pegar o total segundos, multiplicando os minutos do ciclo ativo por 60 */
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  /* Pega os segundos atuais atraves da diferença entre o total de segundos
    e o total de segundos passados */
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  /* Pega o minuto atual e arrendonda para um valor abaixo para
    pegar somente o minuto correnpondente */
  const minutesAmount = Math.floor(currentSeconds / 60)

  /* Pega o resto do tempo atual, que será os segundos atuais */
  const secondsAmount = currentSeconds % 60

  /* Preenche a string de zeros, caso o número tenha apenas 1 digito */
  const minutes = minutesAmount.toString().padStart(2, '0')
  const seconds = secondsAmount.toString().padStart(2, '0')

  useEffect(() => {
    /* Se tiver um ciclo ativo, o título da pagina receberá o tempo atual */
    if (activeCycle) {
      document.title = `Ignite Timer - ${minutes}:${seconds}`
    }
    return () => {
      document.title = 'Ignite Timer'
    }
    /* Array de dependencias do useEffect. O componente será remontado caso
      uma dessas variáveis tenha seu valor alterado */
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      /* Se tiver um ciclo ativo, o setInterval irá, de 1 em 1 segundo,
      pegar a diferença, em segundos, entre a data atual e a data em que
      o ciclo foi iniciado */
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          /* Caso a diferença em segundos seja maior ou igual os segundos
          atuais, o ciclo será marcado como concluido, os segundos passados
          será setado como o total de segundos atual e limpará o intervalo atual */
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          /* Caso contrário, os segundos passados será setado como a diferença
          em segundos, que representa o tempo passado */
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      /* Limpa o intervalo atual */
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
