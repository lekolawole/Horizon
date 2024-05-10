import React from 'react'
import { FormLabel, FormControl, FormMessage, FormField } from './form'
import { Input } from './input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import { AuthRoutes } from '@/constants/messages'

const formSchema = authFormSchema(AuthRoutes.SignUp);

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder?: string
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex-full flex-col">
            <FormControl>
              <Input className="input-class" placeholder={placeholder} {...field} type={name} />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput