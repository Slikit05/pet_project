// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Cards from './components/Contents/Cards'
import Navigation from './components/UI/Navigation'

const BASE_URL = 'https://rickandmortyapi.com/api/'

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

  return (
    <section>
      <Cards cardsArr={infoObject.results} />
      <Navigation object={infoObject} baseUrl={BASE_URL} changeAdr={setAddress} />
    </section>
  )
}

export default App
