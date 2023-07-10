import './Menuitemstyes.scss'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'

const MenuItem = ({  title, id, imageUrl, size, linkUrl } ) => {
  const navigateTo = useNavigate();

  return (
    <div
      onClick={()=>navigateTo(linkUrl)}
    className={`${size} menu-item `} key={id}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className='backgroundimage'
        >
      </div>
      <div className="content">
        <h1 className="title capitalize">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};


MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export { MenuItem };





