"use client";

import React from 'react'
import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validations'
import { signInWithCredentials } from '@/lib/actions/auth';

const page = () => {
  return (
    <div>
      <AuthForm
      type = "SIGN_IN"
      schema={signInSchema}
      defaultValues={{email: '', password: ''}}

      onSubmit={signInWithCredentials}
      />
    </div>
  )
}

export default page
