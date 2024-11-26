import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link, Form } from 'react-router-dom'

const ProductSecond = ({ image, name, price, _id, featured }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} />
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
        <h5>{featured ? 'true' : 'false'}</h5>
      </footer>
      <div className='buttons'>
        <Link to={`../edit-product/${_id}`} className='btn edit-btn'>
          Edit
        </Link>
        <Form method='post' action={`../delete-product/${_id}`}>
          <button type='submit' className='btn delete-btn'>
            Delete
          </button>
        </Form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .container {
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.4rem;
  }
`
export default ProductSecond
