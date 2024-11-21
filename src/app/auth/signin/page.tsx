import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
import { AuthError } from 'next-auth';
import { providerMap, signIn } from '@/auth'
import React from 'react'

export default function LoginPage() {
    return (
        <SignInPage 
            providers={providerMap as AuthProvider[]}
            signIn={async (provider: AuthProvider, formData: FormData, callbackUrl?: string) => {
                'use server'
                try{
                    return await signIn(provider.id, {
                        ...(formData && { email: formData.get('email'), password: formData.get('password') }),
                        redirectTo: callbackUrl ?? '/',
                    })
                } catch(error){
                    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
                        throw error;
                    }
                    if (error instanceof AuthError) {
                        return {
                            error: error.message,
                            type: error.type
                        }
                    }
                }
                return {
                    error: 'Error signing in',
                    type : 'UnknownError'
                }
            }}
        />
    )
}
