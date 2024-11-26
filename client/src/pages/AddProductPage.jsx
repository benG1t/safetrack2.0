import styled from 'styled-components'
import { FormRow, SubmitBtn, FormRowSelect } from '../components'
import { useOutletContext, redirect } from 'react-router-dom'
import { Form } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { PRODUCT_CATEGORY } from '../utils/constants'

export const action = async ({ request }) => {
  const formData = await request.formData()
  try {
    await customFetch.post('/products', formData)
    toast.success('product added successfully ')
    return redirect('all-products')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const AddProductPage = () => {
  return (
    <Wrapper className='page-100'>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>profile</h4>
        <div className='form-center'>
          <div className='form-row'>
            <label htmlFor='image' className='form-label'>
              Select an image file (max 0.5 MB)
            </label>
            <input
              type='file'
              id='image'
              name='image'
              className='form-input'
              accept='image/*'
            />
          </div>
          <FormRow type='text' name='name' defaultValue='ben' />
          <FormRow type='text' name='company' defaultValue='company' />
          <FormRow type='text' name='description' defaultValue='description' />
          <FormRowSelect
            labelText='category'
            name='category'
            defaultValue={PRODUCT_CATEGORY.ENERGY}
            list={Object.values(PRODUCT_CATEGORY)}
          />
          <FormRow type='number' name='price' defaultValue='50' />
          <FormRow type='number' name='stock' defaultValue='4' />
          <FormRow type='text' name='featured' defaultValue='false' />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--clr-grey-10);
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

export default AddProductPage
