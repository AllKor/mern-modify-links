import React, { useCallback, useContext, useEffect, useState } from 'react'
import LinksList from '../components/LinksList'
import Loader from '../components/Loader'
import { AuthContext } from '../context/authContext'
import { useHttp } from '../hooks/http.hook'

const LinksPage = () => {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback( async () => {
        try {
            const fetched = await request(`/api/link`, 'GET', null, {Authorization: `Bearer ${token}`})
            setLinks(fetched)
        } catch (error) {
            
        }
    },[request, token])

    useEffect(() => {
        fetchLinks() 
        
    }, [fetchLinks])

    if(loading) {
        return <Loader />
    }

    return (
        <div>
            {!loading && <LinksList links={links} />}
        </div>
    )
}

export default LinksPage
