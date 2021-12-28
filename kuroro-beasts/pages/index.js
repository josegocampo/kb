import NavBar from '../components/NavBar'
import Image from 'next/image'
import banner from '../helpers/banner.gif'
import * as React from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  function enterHandler({ key }) {
    if (key === 'Enter') {
      router.push('/menu')
    }
  }
  
  React.useEffect(() => {
    window.addEventListener("keydown", enterHandler);
  }, []); 
  
  return (
    <>   
      <div style={{  backgroundImage: `url(${banner.src})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'}} className="main-content mx-auto h-full w-full">

        <div className="flex flex-col items-center justify-center inset-y-36  absolute inset-x-0 bottom-100% ">
        
        <span className="text-4xl font-bold mt-20 text-white bg-blue-500 bg-opacity-25" onKeyPress={()=> handleEnter(e)}>PRESS START</span>
      </div>
      <div className="flex flex-row items-center justify-center absolute inset-x-0 bottom-0 h-16">
        
        <Image src='/images/discord.png' width="32" height="32" quality="100" />
        <div className="mr-4"/>
        <Image src='/images/twitter.png' width="32" height="32" quality="100" />
        <div className="mr-4"/>
        <Image src='/images/opensea.png' width="32" height="32" quality="100" />
      </div>

      </div>

    </>
  )
}
