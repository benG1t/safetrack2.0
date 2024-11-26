import React from 'react'
import styled from 'styled-components'
import { about } from '../utils/constants'
import bg1 from '../assets/bg1.jpg'

const Services = () => {
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url("${bg1}")`,
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
      className='section'
      id='about'
    >
      <div className='title'>
        <h2>about us</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center services-info'>
        {about.map((item) => {
          const { id, icon, service, description } = item
          return (
            <article key={id}>
              <span>{icon}</span>
              <h4>{service}</h4>
              <p>{description}</p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h2 {
    text-align: center;
    text-transform: uppercase;
    color: var(--clr-grey-8);
  }
  article {
    text-align: center;
    border-radius: var(--radius);
    margin: 1rem 0;
    border: 1px solid var(--clr-grey-8);
    padding: 2rem;
  }
  p {
    color: var(--clr-grey-7);
  }
  article:hover {
    background-color: var(--clr-primary-1);
    p {
      color: var(--clr-grey-7);
    }
  }
  span {
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 4.5rem;
    height: 4.5rem;
    background: var(--clr-primary-3);
    margin: 0 auto;
    svg {
      font-size: 2rem;
      color: white;
      background: transparent;
    }
  }
  h4 {
    padding-top: 1rem;
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--clr-grey-8);
  }
  .underline {
    margin-bottom: 2rem;
  }

  .services-info {
    display: grid;
    column-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`

export default Services
