"use client"
import { signUp } from "@/lib/client-auth"
import { useRouter } from "next/navigation"

export default function Form() {
  const router = useRouter()

  const handleOnSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    
    const response = await signUp.email({name, email, password})

    if(response.error?.status === 401){
      console.log('noooooooooooooo')
    }else {
      router.push('/profile')
    }

  }
  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col justify-center items-center h-120 w-120 rounded gap-5 bg-blue-200"
    >
   
      <label className="text-2xl" htmlFor="name">NAME</label>
      <input name="name" type="text" className="border rounder" />

      <label className="text-2xl" htmlFor="email">EMAIL</label>
      <input name="email" type="email" className="border rounded" />

      <label className="text-2xl" htmlFor="password">PASSWORD</label>
      <input name="password" type="password" className="border rounded" />

      <button type="submit" className="border">SIGNUP</button>
    </form>
  )
}
