"use client";

import React from 'react'
import AuthForm from '@/components/AuthForm'
import {  signUpSchema } from '@/lib/validations'
import { signUp } from '@/lib/actions/auth';

const page = () => {
  return (
    <div>
      <AuthForm
      type = "SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: '', 
        password: '',
        fullName: '',
        universityId: 0,
        universityCard: ''
    }}

      onSubmit={signUp}
      />
    </div>
  )
}

export default page
