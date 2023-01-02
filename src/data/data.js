import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/';
import Tmt from '../assets/images/tmtScreenShot1-min.png';
import Portfolio from '../assets/images/reactportfolio-min.png';
import ToolImg from '../assets/images/toolScreenShot-min.png';
import Cook from '../assets/images/0-min.png';

const data = [
  {
    id: uuidv4(),
    name: 'The Missing Teeth Ecommerce Store',
    desc:
      'Developed a full stack e-commerce application using the MERN stack and implemented secure payment through stripe.Integrated a Redux like store for global state management using React Hooks and the React Context API, to avoid prop drilling. Advance CRUD for products, categories, cart data and user info. Added offline capabilities using indexedDB. Stunning layout made with material ui css. Created and edited images using Figma',
    img: Tmt,
  },
  {
    id: uuidv4(),
    name: 'React Portfolio',
    desc:
      '',
    img: Portfolio,
  },
  {
    id: uuidv4(),
    name: 'ca-TOOL-ogue',
    desc:
      '',
    img: ToolImg,
  },
  {
    id: uuidv4(),
    name: "Now We're Cookin'",
    desc:
      '',
    img: Cook,
  },
//   {
//     id: uuidv4(),
//     name: '',
//     desc:
//       '.',
//     img: ProjectImg,
//   },
];

export default data;