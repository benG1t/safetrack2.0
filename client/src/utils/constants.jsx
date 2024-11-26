import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
import { GiPadlock, GiSteeringWheel } from 'react-icons/gi'
import { FaTruck, FaPeopleCarry } from 'react-icons/fa'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

// ABOUT US
export const about = [
  {
    id: 1,
    icon: <GiPadlock />,
    service: 'security',
    description:
      'Safetrack Security/logistic’s mission is to continually strive to deliver quality security services by maintaining the latest registered industry standards and employing highly trained and motivated Installers and registered personnel.',
  },
  {
    id: 2,
    icon: <FaTruck />,
    service: 'installation',
    description:
      'We engage in a Rapid Nationwide delivery/installation and state residence response which is concerned with our company’s ability to satisfy customer service requirements in a timely manner.',
  },
  {
    id: 3,
    icon: <GiSteeringWheel />,
    service: 'procurement',
    description:
      'we are more concerned and engage in sales of spy/security indoor and outdoor gadgets like spy watch,spy pens,spy glasses,Peppersprays and other security and non lethal human friendly gadgets for individuals,home use and offices.',
  },
  {
    id: 4,
    icon: <FaPeopleCarry />,
    service: 'training',
    description:
      'Our trainings are specially for individuals who Intend to Field in cctv/surveillance installations and proper coverage and monitoring of various types of controls rooms and events organizational control.',
  },
]

// CONTACT
export const contactinfo = [
  {
    id: 1,
    icon: <FaLocationArrow />,
    title: 'address',
    contactone: '10 Ijieola Street,',
    contacttwo: 'Ikeja Lagos,Nigeria',
  },
  {
    id: 2,
    icon: <MdEmail />,
    title: 'email',
    contactone: 'safetrack_secure@outlook.com,',
    contacttwo: 'augustineapekhume@gmail.com',
  },
  {
    id: 3,
    icon: <BsFillTelephoneFill />,
    title: 'phone',
    contactone: '(234) 8055-041-602,',
    contacttwo: '(234) 8037-829-276',
  },
]

export const PRODUCT_CATEGORY = {
  ENERGY: 'energy',
  SECURITY: 'security',
}
export const PRODUCT_FEATURED = {
  TRUE: 'true',
  FALSE: 'false',
}
export const PRODUCT_SORT_BY = {
  NEWEST_FIRST: 'newest',
  OLDEST_FIRST: 'oldest',
  ASCENDING: 'a-z',
  DESCENDING: 'z-a',
}

export const products_url = 'https://www.course-api.com/react-store-products'

export const single_product_url = `https://www.course-api.com/react-store-single-product?id=`

// export const products_url = 'http://localhost:5100/api/v1'

// export const single_product_url = `http://localhost:5100/api/v1/products?id=`
