import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { applyMask } from '../../../../utils/mask'
import { CartContext } from '../../../../contexts/CartContext'
import { HandleMaskedChangeProps } from '../../../../@types/utils'
import {
  AddressFormContainer,
  AddressInput,
  AddressSelect,
  ErrorMessage,
} from './styles'

export function AddressForm() {
  const { stateAcronym } = useContext(CartContext)
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext()

  function handleMaskedChange({ e, setValue }: HandleMaskedChangeProps) {
    const maskedValue = applyMask(e.target.value)
    setValue(e.target.name, maskedValue, { shouldValidate: true })
  }

  return (
    <AddressFormContainer>
      <div>
        <AddressInput
          type="text"
          placeholder="00000-000"
          {...register('cep')}
          onChange={(e) => handleMaskedChange({ e, setValue })}
        />
        {errors.cep && (
          <ErrorMessage>{errors.cep.message?.toString()}</ErrorMessage>
        )}
      </div>

      <div>
        <AddressInput
          type="text"
          placeholder="Rua      "
          {...register('rua')}
        />
        {errors.rua && (
          <ErrorMessage>{errors.rua.message?.toString()}</ErrorMessage>
        )}
      </div>

      <div>
        <AddressInput
          type="number"
          placeholder="Número"
          {...register('numero', { valueAsNumber: true })}
        />
        {errors.numero && (
          <ErrorMessage>{errors.numero.message?.toString()}</ErrorMessage>
        )}
      </div>

      <div>
        <AddressInput
          type="text"
          placeholder="Complemento"
          {...register('complemento')}
        />
        {errors.complemento && (
          <ErrorMessage>{errors.complemento.message?.toString()}</ErrorMessage>
        )}
      </div>

      <div>
        <AddressInput
          type="text"
          placeholder="Bairro"
          {...register('bairro')}
        />
        {errors.bairro && (
          <ErrorMessage>{errors.bairro.message?.toString()}</ErrorMessage>
        )}
      </div>

      <div>
        <AddressInput
          type="text"
          placeholder="Cidade"
          {...register('cidade')}
        />
        {errors.cidade && (
          <ErrorMessage>{errors.cidade.message?.toString()}</ErrorMessage>
        )}
      </div>

      <div>
        <AddressSelect {...register('uf')} required>
          <option value="">-----</option>
          {stateAcronym.map((state) => (
            <option key={state.id} value={state.sigla}>
              {state.sigla}
            </option>
          ))}
        </AddressSelect>
        {errors.uf && (
          <ErrorMessage>{errors.uf.message?.toString()}</ErrorMessage>
        )}
      </div>
    </AddressFormContainer>
  )
}
