import { MenuItem } from '../menuitem'
import './directorystyles.scss'
import { DirectoryData } from "./DirectoryData";

export const Directory = () => {
    return (
      
      <div className="directory-menu">
        {
          DirectoryData.map(({ id, title, imageUrl, size, linkUrl }) => {
            return (
              <MenuItem key={id} 
                title={title} id={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}
              />
            )
          })
        }
      </div>
    )
  }