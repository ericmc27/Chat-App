import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import ProfilePictureForm from "@/app/profile/components/profile-picture-form"


export default async function Profile(){
  const isAuthenticated = await auth.api.getSession({headers: await headers()})

  if(!isAuthenticated){
    return redirect('/')
  }

  return(
    <div>
      <ProfilePictureForm/>
      {isAuthenticated.user.name}
    </div>
  )
}