import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'

const datapeople = [
  {
    id: 1,
    image: one,
    name: 'shola bakare',
    quote: 'Safe track delivered within a timely manner.',
  },
  {
    id: 2,
    image: two,
    name: 'cynthia onu',
    quote:
      'I have been using the inverter,solar panels,charge controller and batteries for years now with no issue.',
  },
  {
    id: 3,
    image: three,
    name: 'emeka eze',
    quote:
      'I love that my company can get all the security gadgets we need in one place.',
  },
  {
    id: 4,
    image: four,
    name: 'bright nneji',
    quote: 'Safe track is the best.',
  },
]

function Testimonials() {
  const [people, setPeople] = useState(datapeople)
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  //   useEffect(() => {
  //     let slider = setInterval(() => {
  //       setIndex(index + 1)
  //     }, 5000)
  //     return () => {
  //       clearInterval(slider)
  //     }
  //   }, [index])

  return (
    <Wrapper id='testimonial'>
      <div className='title'>
        <h2>TESTIMONIALS</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, quote } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .title {
    margin-top: 1rem;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: var(--clr-grey-1);
  }

  .section-center {
    margin: 0 auto;
    margin-top: 2rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  .person-img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid var(--clr-grey-8);
    box-shadow: var(--dark-shadow);
    margin-left: auto;
    margin-right: auto;
  }
  article h4 {
    text-transform: uppercase;
    color: var(--clr-primary-5);
    margin-bottom: 0.25rem;
  }
  .title {
    text-transform: capitalize;
    margin-bottom: 0.75rem;
    color: var(--clr-grey-3);
  }
  .text {
    max-width: 35em;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 2;
    color: var(--clr-grey-5);
  }
  .icon {
    font-size: 3rem;
    margin-top: 1rem;
    color: var(--clr-primary-5);
  }
  .prev,
  .next {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: var(--clr-grey-5);
    color: var(--clr-white);
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    background: var(--clr-primary-5);
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
    .title {
      margin-top: 8rem;
    }
  }
  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
`

export default Testimonials
