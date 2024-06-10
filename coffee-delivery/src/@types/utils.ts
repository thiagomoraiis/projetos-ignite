/* eslint-disable */
import { ChangeEvent } from 'react'
import { UseFormSetValue } from 'react-hook-form'

export type HandleMaskedChangeProps = {
  e: ChangeEvent<HTMLInputElement>
  setValue: UseFormSetValue<any>
}
