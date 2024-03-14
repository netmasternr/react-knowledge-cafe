import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    // console.log(bookmark)
    const {Title} = bookmark;

    return (
       <div className='bg-slate-200  m-4 p-3 rounded-lg'>
            <h3 className='text-2xl'>{Title}</h3>
       </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}

export default Bookmark;