import { toast } from 'react-toastify'
import customFetch from '../utils/customFetch'
import { redirect } from 'react-router-dom'

export async function action({ params }) {
  try {
    await customFetch.delete(`/products/${params.id}`)
    toast.success('Product deleted successfully')
  } catch (error) {
    toast.error(error.response.data.msg)
  }
  return redirect('/dashboard/all-products')
}
