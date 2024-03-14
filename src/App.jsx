import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {



    const [bookmarks, setBookmarks] = useState([]);

    const [readingTime, setReadingTime] = useState(0)

    const handleAddToBookmark = blog =>{
       const newBookmarks = [...bookmarks, blog];
       setBookmarks(newBookmarks);
    }

    const handleMarkAsRead = (id, time) =>{
      setReadingTime(readingTime + time);

      // remove the read blog from the bookmark
      // console.log('remove bookmaerk', id)

      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmarks(remainingBookmarks);
    }


  return (
    <>   
     <Header></Header>
     
     <div className='md:flex max-w-7xl mx-auto'>
       <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
       <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>

      

    </>
  )
}

export default App
