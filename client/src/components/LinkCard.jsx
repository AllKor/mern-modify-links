import React from 'react'

const LinkCard = ({link}) => {
    const {from, to, clicks, date} = link
    
    return (
        <div>
            <h2>Ссылка</h2>
            <p>Ваша ссылка: <a href={to} target="_blank" rel="noreferrer">{to}</a></p>
            <p>Исходная ссылка: {from}</p>
            <p>Количество кликов по ссылке: <strong>{clicks}</strong></p>
            <p>Дата создания: <strong>{new Date(date).toLocaleDateString()}</strong> </p>
        </div>
    )
}

export default LinkCard
