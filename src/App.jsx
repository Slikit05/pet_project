// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Cards from './components/Contents/Cards'
import Navigation from './components/UI/Navigation'

const App = () => {
  const [address, setAddress] = useState('https://rickandmortyapi.com/api/character')
  const [infoObject, setInfoObject] = useState({ info: {}, results: [] })

  useEffect(() => {
    fetch(address)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setInfoObject(data)
      })
  }, [address])

  // console.log(infoObject);

  return (
    <section>
      <Cards cardsArr={infoObject.results} />
      <Navigation object={infoObject} changeAdr={setAddress} />
    </section>
  )
}

export default App
