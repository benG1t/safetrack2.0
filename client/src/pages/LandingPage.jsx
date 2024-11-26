import main from '../assets/landing.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const LandingPage = () => {
  return (
    <StyledWrapper>
      <div className='section-center page'>
        {/* info */}
        <div className='info'>
          <h1>
            safetrack <span>security</span>
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login
          </Link>
        </div>
        <img src={main} alt='landinding img' className='img main-img' />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  .section-center {
    width: 90vw;
    margin: auto auto;
    max-width: 1120px;
  }
  .page {
    min-height: calc(100vh - 2rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--clr-primary-5);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`

export default LandingPage
