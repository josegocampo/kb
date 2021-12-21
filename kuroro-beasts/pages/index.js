import NavBar from '../components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>   
      <div className="main-content mx-auto">
        <div className="flex flex-col items-center">
          <Image
          src="/images/banner.gif"
          alt="Kuroro Beasts Banner"
          width="900"
          height="600"/>
          <span className="text-sm font-medium mt-10">Trudan studios ®</span>
        </div>
      </div>

    </>
  )
}
