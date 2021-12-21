import * as React from 'react'

const ElementPill = ({element}) => {

  const [textColor, setTextColor] = React.useState('black-100')
  const [bgColor, setBgColor] = React.useState('gray-400')

  React.useEffect(()=> {
    if (element === 'Neutral'){
      setTextColor('brown-100')
      setBgColor('brown-400')
    }
    if (element === 'Fire'){
      setTextColor('white')
      setBgColor('red-600')
    }
    if (element === 'Water'){
      setTextColor('white')
      setBgColor('blue-600')
    }
    if (element === 'Plant'){
      setTextColor('white')
      setBgColor('green-600')
    }
  },[element])



  console.log(element, textColor, bgColor)
  
  return (
    <span className={`inline-block border border-blue rounded px-3 bg-${bgColor} text-${textColor}`}>{element}</span>
  )

}

export default ElementPill