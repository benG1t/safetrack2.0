import styled from 'styled-components'
import bg4 from '../assets/bg4.jpg'
import logo from '../assets/logo.JPG'
import { contactinfo } from '../utils/constants'

const Contact = () => {
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url("${bg4}")`,
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
      className='section'
    >
      <div className='section-center'>
        <div className='img-container'>
          <img src={logo} alt='logo' className='img' />
        </div>
        <div className='contact-info'>
          <h3>Get in Touch</h3>
          {contactinfo.map((item) => {
            const { id, icon, title, contactone, contacttwo } = item
            return (
              <div className='contact-item' key={id}>
                <h4 className='contact-title'>
                  <span className='contact-icon'>{icon} </span>
                  {title}
                </h4>
                <h5 className='contact-text'>
                  {contactone} <br />
                  {contacttwo}
                </h5>
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  /* background: var(--clr-grey-8); */

  .section-center {
    display: grid;
    gap: 2rem;
    justify-content: center;
  }
  .img-container {
    height: 10rem;
    max-width: 15rem;
    background: transparent;
    margin-bottom: 5rem;
  }
  .img {
    border-radius: 50%;
    /* border-radius: var(--radius); */
  }
  .contact-info {
    margin: 1rem 0;
  }
  .contact-item {
    margin-bottom: 1.75rem;
  }
  h3 {
    color: var(--clr-grey-7);
    margin-bottom: 2rem;
  }
  .contact-title {
    color: var(--clr-primary-7);
    font-weight: 400;
  }
  .contact-text {
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    color: var(--clr-grey-8);
  }
  @media (min-width: 576px) {
    .section-center {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export default Contact
