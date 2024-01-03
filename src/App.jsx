
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/BookMark/Bookmark'
import Header from './Component/Header/Header'

function App() {
  const [bookmark, setBookmark]= useState([])
  const [markrad, setMarkred]=useState(0)

  const clickHandelBookmark = blog=>{
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark)
    // console.log('click hoyca')
  }

const clickMarkRead = time =>{
  // console.log('mark click', time)
  // console.log(typeof time)
  const newRedingTime = (markrad + time)
  setMarkred(newRedingTime)

  
}

 

  return (
    <>
     <div className='w-3/4 m-auto'>
     <Header></Header>
     
     <div className='flex'>
      <Blogs clickMarkRead={clickMarkRead}  clickHandelBookmark={clickHandelBookmark}></Blogs>
      <Bookmark markrad={markrad} bookmark={bookmark}></Bookmark>
     </div>
     </div>
    </>
  )
}

export default App
