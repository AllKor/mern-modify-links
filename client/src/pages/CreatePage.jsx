import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { useHttp } from '../hooks/http.hook'

const CreatePage = () => {
    const {request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [link, setLink] = useState('')

    const pressHandler = async (event) => {
        if(event.key === 'Enter') {
            try {
               const data = await request('/api/link/generate', 'POST', {from: link}, {Authorization: `Bearer ${auth.token}`}) 
               history.push(`/detail/${data.link._id}`)
               
            } catch (error) {}
        }
    }
    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input id="link" type="text" value={link} onChange={(e) => setLink(e.target.value)} onKeyPress={pressHandler} />
                    <label className='black-text' htmlFor="link">Введите ссылку</label>
                </div>
            </div>
        </div>
    )
}

export default CreatePage
