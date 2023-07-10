import './ColletionPreview.scss'
import { CollectionItem } from '../Collection/CollectionItem'
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom'

const CollectionPreview = ({ title, items }) => {
  // const navigateTo = useNavigate()
// RETURN LIST OF DIVS 
  return (
    
    <div className='collection-preview'>
      <h1 className='title' >{title.toUpperCase()} </h1>
      <div className='preview'>

        {items.filter((item, idx) => idx < 4).map(({ id, ...othercollectionptops}) => {
          // MAPPING THROUGH THE ITEMS COLLECTION TO DISPLAY THE RESPECT ITEMS
          return (
            <CollectionItem  key= {id} { ...othercollectionptops} />
          )
        })}
      </div>
    </div>
  )
}
CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Include other props expected in each item object
    })
  ).isRequired,
}
export {CollectionPreview}

