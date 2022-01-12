import React, { FC, PropsWithChildren, ReactElement, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AppContext from '../../context/AppContext'

interface routeProps {
    children: PropsWithChildren<ReactElement>
}

const PrivateRoute: FC<routeProps> = ({ children }) => {

    const { state } = useContext(AppContext)

    return (
        state.logged ? children : <Navigate to='/login' />
    )

}

export default PrivateRoute
