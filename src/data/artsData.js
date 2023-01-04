import { v4 as uuidv4 } from 'uuid';
import Electric from '../assets/art/electric-min.JPG';
import Onion from '../assets/art/onion.jpg';
import Naut from '../assets/art/naut-min.jpg';
import Ie from '../assets/art/ie.png';
import Shrimp from '../assets/art/shrimpy.JPG';
import Griz from '../assets/art/griz.JPG';
import Bat from '../assets/art/darkknight.jpg';
import Charles from '../assets/art/charles2.png';
import Sheep from '../assets/art/blacksheep.png';

const artsData = [
  {
    id: uuidv4(),
    name: 'Bold City Electric Co.',
    desc:
      'Logo/Image i drew with pen and edited in adobe illustrator. Developed on silk screen for screen printed media. ',
    img: Electric,
  },
  {
    id: uuidv4(),
    name: 'Onion Anatomy',
    desc:
      'Onion illustration done in a vintage, anatomical like style. Pen on paper and edited in illustrator.',
      img: Onion,
  },
  {
    id: uuidv4(),
    name: 'Nautilus',
    desc:
      'Nautilus portrait done with pen, arcrylic paint on canvas.',
    img: Naut,
  },
  {
    id: uuidv4(),
    name: 'Infinite Earths Logo',
    desc:
      'Logo i made for a local, Infinite Earths, in Orlando, Florida. Pen on paper and edited in illustrator.',
    img: Ie,
  },
  {
    id: uuidv4(),
    name: 'Modified Shrimp',
    desc:
      'Modified shrimp illustration showing extreme deformation in gmo foods. Pen and prisma colors paint markers. Developed on silk screen for screen printed media.',
    img: Shrimp,
  },
  {
    id: uuidv4(),
    name: 'Grizzly Atoms Logo',
    desc:
      'Logo i made for a local band, The Grizzly Atoms, in Orlando, Florida. Pen on paper and edited in illustrator.',
    img: Griz,
  },
  {
    id: uuidv4(),
    name: 'Dark Knight',
    desc:
      'A fun batman image i made with a cool tagline on top. Pen on paper and edited in illustrator.',
    img: Bat,
  },
  {
    id: uuidv4(),
    name: 'Charles Stout',
    desc:
      'Illustration i did for a local brewery, Debine, in Dunedin, FLorida. Fun illustration of brewers dog, done for can label on a limited seasonal stout. Edited in illustrator.',
    img: Charles,
  },
  {
    id: uuidv4(),
    name: 'Black Sheep Farms',
    desc:
      'Illustration done for farm type packaging logo. Pen on paper and edited in illustrator. ',
    img: Sheep,
  },
];

export default artsData;