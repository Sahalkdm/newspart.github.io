import React from 'react'
//import Card from './Cards/Card'
import Mobile from './Mobile/Mobile'
import NewsCards from './News/NewsCards'
//import NewsPopup from './News/NewsPopup'
const App = () => {
  return (
    <div className='flex bg-red-300 p-10 justify-between'>
        <div>News</div>
        <NewsCards/>
        <Mobile></Mobile>
    </div>
  )
}

export default App