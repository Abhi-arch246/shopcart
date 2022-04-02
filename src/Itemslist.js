import React from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'
function Itemslist() {
    const itemobj = useSelector(store => store)

    const items = itemobj.shopcount.map(item => {
        return (
            <Item item={item} />

        )
    })
    return (
        <div className="row justify-content-center pt-5">
            <div className='col-md-6'>{items}</div>

        </div>
    )
}

export default Itemslist