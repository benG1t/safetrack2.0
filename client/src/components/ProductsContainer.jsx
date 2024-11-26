import styled from 'styled-components'
import { useAllProductsContext } from '../pages/AllProducts'
import ProductSecond from './ProductSecond'

const ProductsContainer = () => {
  const { data } = useAllProductsContext()
  const { products } = data
  if (products.length === 0) {
    return (
      <>
        <h2>No jobs to display...</h2>
      </>
    )
  }
  return (
    <Wrapper>
      <h5> ___ products found</h5>
      <div className='products-container'>
        {products.map((product) => {
          return <ProductSecond key={product._id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default ProductsContainer
