
import './index.css';
import CardData from './components/cardData';
import reactToWebComponent from 'convert-react-to-web-component';

const middleware = (value:any) => (
  value.includes('{') ? undefined : value
);

const Options: any = {
  name: 'card-data',
  attributes: ['headline', 'description', 'img'],
  middleware
 }

reactToWebComponent(CardData, Options);

