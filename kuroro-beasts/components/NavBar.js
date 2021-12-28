import IconButton from './IconButton'
import { useRouter } from 'next/router'

const NavBar = () => {
  const router = useRouter()

  const MenuCards = ({text}) => {
    const handleClick = () => {
      if (text === 'Home'){
        router.push('/')
        return
      }
      router.push(`/${text.toLowerCase()}`)
    }
    return (
      <div className="h-50 w-50 mt-4  "onClick={handleClick}>
        {text}
      </div>
    )
  }

  return(
    <div className="w-1/5 mr-10 bg-white p-10 border-double border-4 border-light-blue-500">
      <MenuCards text="Home"/>
      <MenuCards text="Kuropedia"/>
      <MenuCards text="Team"/>
      <MenuCards text="WhitePaper"/>
    </div>
  )
}

export default NavBar