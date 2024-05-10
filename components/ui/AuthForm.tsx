'use client'; 
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { AuthRoutes, actions, authMessages } from '@/constants/messages';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signUp, signIn } from '@/lib/actions/user.actions';
import PlaidLink from './PlaidLink';

const AuthForm = ({ type }: { type: string}) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
 
  const onSubmit = async (data: z.infer<typeof formSchema>)  => {
    setIsLoading(true);

    try {
      // Sign up & create Plaid link token
      const userData = {
        firstName: data.firstName!,
        lastName: data.lastName!,
        address1: data.address1!,
        city: data.city!,
        state: data.state!,
        postalCode: data.postalCode!,
        dateOfBirth: data.dateOfBirth!,
        ssn: data.ssn!,
        email: data.email,
        password: data.password,
      }
      if (type === AuthRoutes.SignUp) {
        const newUser = await signUp(userData);
        setUser(newUser);
      } else if (type === AuthRoutes.SignIn) {
        const response = await signIn({ email: userData.email, password: userData.password});
        
        if (response) router.push('/')
      }
    } catch (error) {
      
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1 px-4">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? actions.LinkAccount : type === 'sign-in' ? actions.SignIn : actions.SignUp}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user ? authMessages.LinkAccount : authMessages.EnterDetails}
          </p>
        </div>
      </header>
      { user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
        ) : (
        <>
          <Form {...form}>
            {type === AuthRoutes.SignUp && (
              <>
                <div className="flex gap-4">
                  <CustomInput control={form.control} name="firstName" label="First Name" />
                  <CustomInput control={form.control} name="lastName" label="Last Name" />
                </div>
                <CustomInput control={form.control} name="address1" label="Street Address" />
                <CustomInput control={form.control} name="city" label="City" />
                <div className="flex gap-4">
                  <CustomInput control={form.control} name="state" label="State" placeholder="ex: MD" />
                  <CustomInput control={form.control} name="postalCode" label="Zip Code" placeholder="ex: 12303" />
                </div>
                <div className="flex gap-4">
                  <CustomInput control={form.control} name="dateOfBirth" label="Date of Birth" placeholder="mm/dd/yyyy" />
                  <CustomInput control={form.control} name="ssn" label="SSN" placeholder="ex: 1234" />
                </div>
              </>
            )}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput control={form.control} name="email" label="Email" placeholder="Enter your email" />
              <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your password" />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading} >
                  {isLoading ? (
                    <><Loader2 size={20} className="animate-spin"/> &nbsp; Loading...</>
                  ) : type === AuthRoutes.SignIn ? actions.SignIn : actions.SignUp}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">{type === AuthRoutes.SignIn ? authMessages.DontHaveAnAccount : authMessages.AlreadyHaveAnAccount}</p>
            <Link className="form-link" href={type === AuthRoutes.SignIn ? `/${AuthRoutes.SignUp}` : `/${AuthRoutes.SignIn}`}>
              {type === AuthRoutes.SignIn ? actions.SignUp : actions.SignIn}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm;