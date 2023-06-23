import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
export default function Form() {
    let [user,setUser] = useState([
        {name:"ahmed",email:"adawd"},
        {name:"mohamed",email:"adawd"},
        {name:"eslam",email:"adawd"}
    ])
    let {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()
  return (
    <>
        <table border="1">
            <thead>
                <tr>
                    <td>name</td>
                    <td>email</td>
                </tr>
            </thead>
            <tbody>
                {user.map((u)=>
                <tr>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                </tr>
                )}
            </tbody>

        </table>
        <form onSubmit={handleSubmit(send)}>
            <input type='text' {...register("name",{required:true,minLength:3})} />
            { errors.name &&  errors.name.type === 'required' && <span>name is required</span>  }
            { errors.name &&  errors.name.type === 'minLength' && <span>name min length 3</span>  }

            <input type='text' {...register("email",{required:true})} />
            {  errors.email && <span>email is required</span>  }

            <input type='submit' />
        </form>
    </>
  )

  function send(res){
    setUser([...user,res])
    console.log(res)
  }

}
