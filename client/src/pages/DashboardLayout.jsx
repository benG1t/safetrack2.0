import styled from 'styled-components'
import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from 'react-router-dom'
import { BigSidebar, Loading } from '../components'
import { createContext, useContext, useEffect, useState } from 'react'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user')
    return data
  } catch (error) {
    return redirect('/dashboard')
  }
}

const DashboardContext = createContext()

const DashboardLayout = () => {
  const { user } = useLoaderData()
  const navigate = useNavigate()
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <DashboardContext.Provider
      value={{
        user,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <BigSidebar />
          <div>
            <div className='dashboard-page'>
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(DashboardContext)

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`

export default DashboardLayout
