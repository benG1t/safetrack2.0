import styled from 'styled-components'
import { FormRow, FormRowSelect } from '../components'
import { useLoaderData } from 'react-router-dom'
import { Form, useNavigation, redirect } from 'react-router-dom'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { PRODUCT_CATEGORY } from '../utils/constants'

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/products/${params.id}`)
    return data
  } catch (error) {
    toast.error(error.response.data.msg)
    return redirect('/dashboard/all-products')
  }
}
export const action = async ({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    await customFetch.patch(`/products/${params.id}`, data)
    toast.success('Product edited successfully')
    return redirect('/dashboard/all-products')
  } catch (error) {
    toast.error(error.response.data.msg)
    return error
  }
}
const EditProduct = () => {
  const { product } = useLoaderData()
  console.log(product)

  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper className='page-100'>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>Product</h4>
        <div className='form-center'>
          <FormRow type='text' name='name' defaultValue={product.name} />
          <FormRow type='text' name='company' defaultValue={product.company} />
          <FormRow
            type='text'
            name='description'
            defaultValue={product.description}
          />
          <FormRowSelect
            labelText='category'
            name='category'
            defaultValue={product.category}
            list={Object.values(PRODUCT_CATEGORY)}
          />
          <FormRow type='number' name='price' defaultValue={product.price} />
          <FormRow type='number' name='stock' defaultValue={product.stock} />
          <FormRow
            type='text'
            name='featured'
            defaultValue={product.featured}
          />
          <button
            type='submit'
            className='btn btn-block form-btn '
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>
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
export default EditProduct
