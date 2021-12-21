import * as React from 'react'
import { beasts } from '../../helpers/beastsData'
import Image from 'next/image'
import ElementPill from '../../components/ElementPill'

const Kuropedia = () => {

  return (
    <div>
      <div className="flex flex-row flex-wrap h-screen margin-auto justify-center">
        {beasts.map((b)=> 
          <div className="p-10 border-2 m-4 border-indigo-600 bg-gray-100">
            <div className="relative w-48 h-32">
              <Image src={`/images/beasts/${b.image}`} layout="fill" objectFit="contain" qualiti="100" />
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