import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <Link className='title' to={'/shop/' + title.toLowerCase()}  >{ title?.toUpperCase() }</Link>
    <div className="preview">
      {
        items.filter((item, idx) => idx < 4).map((item) => (<CollectionItem key={item.id} item={item} />))
      }
    </div>
  </div>
)

export default CollectionPreview;