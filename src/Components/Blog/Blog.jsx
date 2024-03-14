import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
       const {Title, Cover, Author, Author_img, Reading, Posted_date, Hashtags} = blog;

    return (
        <div className='mb-20'>
            <img className='w-full' src={Cover} alt={`Cover picture of the title ${Title}`}/>

            <div className='flex justify-between space-y-3'>
                <div className='flex'>
                    <img className='w-14' src={Author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{Reading} Min read</span>
                    <button onClick={() => handleAddToBookmark (blog)} className='ml-2 bg-red-600 border-2 rounded-lg p-1 text-2xl'><BsBookmarks></BsBookmarks></button>
                </div>
            </div>


            <h2 className='text-4xl'>{Title}</h2>

            <p>
                {
                   Hashtags.map((hash, index) => <span key={index}><a href="">#{hash}</a></span>) 
                }
            </p>
           
            <button className='bg-red-500 rounded-lg p-1' onClick={()=> handleMarkAsRead(Reading)}>mark as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog; 