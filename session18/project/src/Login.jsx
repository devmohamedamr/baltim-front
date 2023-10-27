import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Login() {
    let {register,handleSubmit} = useForm()
  return (
    <>
        <form onSubmit={handleSubmit(handleLogin)}>
            <input type="text" name='username' {...register('username')} />
            <input type="password" name='password' {...register('password')} />
            <input type='submit' />
        </form>
    </>
  )

  function handleLogin(req){
        axios.post('https://fakestoreapi.com/auth/login',req).then((res)=>{
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        })
  }
}
