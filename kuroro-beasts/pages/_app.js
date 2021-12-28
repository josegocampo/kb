import 'tailwindcss/tailwind.css'
import NavBar from '../components/NavBar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  console.log(router)

  if (router.route === "/"){
    return (
      <div className="w-1/1 h-screen bg-black">
        <Component {...pageProps} />
      </div>
    )
  }

  return (
    <div className="w-full h-screen flex flex-row bg-black px-36">
      <Component {...pageProps} />
      <NavBar/>
   </div>
  )

}

export default MyApp
