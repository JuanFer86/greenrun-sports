import React, { FC, PropsWithChildren, ReactElement, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AppContext from '../../context/AppContext';

//duda con el children
interface routeProps {
    children: PropsWithChildren<ReactElement>
}

const PublicRoute: FC<routeProps> = ({ children }) => {

    const { state } = useContext(AppContext)

    return (
        state?.logged ? <Navigate to='/' /> : children
    )
}

export default PublicRoute
