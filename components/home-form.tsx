"use client"
import { signIn } from "@/lib/client-auth"
import { useRouter } from "next/navigation"

export default function Form() {
  const router = useRouter()

  const handleOnSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const response = await signIn.email({email, password})

    if(response.error?.status === 401){
      console.log('noooooooooooooo')
    }else {
      router.push('/profile')
    }

  }
  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex items-center justify-center gap-5 h-full w-full bg-blue-200"
    >
      <label htmlFor="email">EMAIL</label>
      <input name="email" type="email" className="border rounded" />
      <label htmlFor="password">PASSWORD</label>
      <input name="password" type="password" className="border rounded" />
      <button type="submit" className="border">login</button>
    </form>
  )
}
