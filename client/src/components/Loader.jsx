import React from 'react'

const Loader = () => {
    return (
        <div className="progress" style={{display: 'flex', justifyContent: 'center', paddingTop: '1rem'}}>
            <div className="indeterminate"></div>
        </div>
    )
}

export default Loader
