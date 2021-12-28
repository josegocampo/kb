import * as React from 'react'
import { beasts } from '../../helpers/beastsData'
import Image from 'next/image'
import ElementPill from '../../components/ElementPill'

const Kuropedia = () => {

  return (
    <div>
      <div className="flex flex-row flex-wrap h-screen margin-auto justify-center">
        {beasts.map((b)=> 
          <div className="p-4 m-4 cursor-pointer">
            <div className="relative w-32 h-28">
              <Image src={`/images/beasts/${b.image}`} layout="fill" objectFit="contain" quality="100" />
            </div>
            <div className="text-right"># {b.number}</div>
            <div className="font-semibold text-center">{b.name}</div>
            <ElementPill element={b.element}/>
          </div>

        )}
      </div>
    </div>
  )
}

export default Kuropedia