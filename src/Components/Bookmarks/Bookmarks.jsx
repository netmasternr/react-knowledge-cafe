import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
       <div className="md:w-1/3">

            <div>
                <h2 className='text-4xl ml-4 mb-2'>Reading Time:{readingTime}</h2>
            </div>

            <h2 className="text-3xl ml-4">Bookmarked:{bookmarks.length} </h2>

            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark> )   
            }
        </div> 
)}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks 