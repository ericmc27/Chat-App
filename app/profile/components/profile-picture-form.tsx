"use client";
import Image from "next/image";
import { useState } from "react";
 

export default function ProfilePictureForm() {
  const [profilePictureUrl, setProfilePictureUrl] = useState()

  const handleOnSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "chat-app-images")

    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`, {method: 'POST', body: formData})
    const data = await res.json();
    console.log(data.secure_url)
    setProfilePictureUrl(data.secure_url)
  }


  return (
    <div>
      <input id="profilePicture" type="file" className="hidden" onChange={handleOnSubmit}/>
      <label htmlFor="profilePicture">
        <Image
          alt="placeholder"
          src={profilePictureUrl ? profilePictureUrl : '/placeholder.png'}
          height="100"
          width="100"
          loading="eager"
        />
      </label>
    </div>
  );
}
