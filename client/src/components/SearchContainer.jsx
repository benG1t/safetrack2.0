import styled from 'styled-components'
import { FormRow, FormRowSelect } from '.'
import { Form, useSubmit, Link } from 'react-router-dom'
import {
  PRODUCT_FEATURED,
  PRODUCT_CATEGORY,
  PRODUCT_SORT_BY,
} from '../utils/constants'
import { useAllProductsContext } from '../pages/AllProducts'

const SearchContainer = () => {
  const { searchValues } = useAllProductsContext()
  const { search, category, featured, sort } = searchValues
  const submit = useSubmit()

  const debounce = (onChange) => {
    let timeout
    return (e) => {
      const form = e.currentTarget.form
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        onChange(form)
      }, 2000)
    }
  }
  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>search form</h5>
        <div className='form-center'>
          <FormRow
            type='search'
            name='search'
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form)
            })}
          />

          <FormRowSelect
            labelText='product category'
            name='category'
            list={['all', ...Object.values(PRODUCT_CATEGORY)]}
            defaultValue={category}
            onChange={(e) => {
              submit(e.currentTarget.form)
            }}
          />
          <FormRowSelect
            labelText='product featured'
            name='featured'
            list={['all', ...Object.values(PRODUCT_FEATURED)]}
            defaultValue={featured}
            onChange={(e) => {
              submit(e.currentTarget.form)
            }}
          />
          <FormRowSelect
            name='sort'
            defaultValue={sort}
            list={[...Object.values(PRODUCT_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form)
            }}
          />
          <Link
            to='/dashboard/all-products'
            className='btn form-btn delete-btn'
          >
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
export default SearchContainer
