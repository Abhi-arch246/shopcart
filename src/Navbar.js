import React from 'react'
import { useSelector } from 'react-redux'
function Navbar() {
    const shopobj = useSelector(store => store)
    return (
        <div>
            <h1 className='m-3 text-white'>Shopping List using Redux</h1>
            <h2 className='text-white'>Cart Count: {shopobj.shopcount.length} </h2>
        </div>
    )
}

export default Navbar