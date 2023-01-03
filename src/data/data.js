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
      'Used React to create the app’s user interface. Used reusable components to compose each part of the landing page. Used React-Bootstrap, Vanilla.js and CSS to create beautiful visual elements. Implemented React Hooks to manage STATE in functional components.',
    img: Portfolio,
  },
  {
    id: uuidv4(),
    name: 'ca-TOOL-ogue',
    desc:
      'Developed a full stack application using the MERN stack. Made for handyman services. Built this app with React while managing STATE through Asynchronous Redux actions. Used the react context API to implement a Redux like store to manage STATE globally. Implemented the React Router DOM to allow nested RESTful routing. Sign and verify JSON Web Tokens as part of the authentication process along with login functionality and user-based navigation in React.',
    img: ToolImg,
  },
  {
    id: uuidv4(),
    name: "Now We're Cookin'",
    desc:
      'Developed this application using Javascript, Materialize, JQuery, HTML, and CSS. Used Google Maps API to fetch grocery store data closest to the user and on the store entered by the user. Used Edamam API to create a list of recipes based on any ingredient entered by the user. Styled application using Materialize CSS.',
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