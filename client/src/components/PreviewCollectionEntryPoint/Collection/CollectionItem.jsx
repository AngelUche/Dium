import './CollectionItem.scss'
import PropTypes from 'prop-types';

const CollectionItem = ({name,price ,id, imageUrl}) => {
  return (
    <div className='collection-item' key={id}>
      <div className='image'
        style={{
        backgroundImage: `url(${imageUrl})`
      }}>
        <div className="collection-footer">
          <span className='name'>{ name}</span>
          <span className='price'>${ price}</span>
        </div>
      </div>
      
    </div>
  )
}

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export { CollectionItem }
