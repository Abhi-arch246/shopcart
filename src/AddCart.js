import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
function AddCart() {
    const dispatch = useDispatch()
    const [itemname, setItemname] = useState("")
    function additem() {
        dispatch({ type: 'ADD_ITEM', payload: itemname })
        setItemname('')
    }
    return (
        <div>
            <h2 className='mt-5 text-white'>Add items to the list</h2>
            <div className='row justify-content-center'>
                <div className="col-md-6 d-inline">

                    <input type="text" value={itemname} onChange={(e) => { setItemname(e.target.value) }} placeholder="Enter the item" className='form-control w-75 m-2' style={{ display: 'inline' }} />
                    <button onClick={additem} className='btn btn-success'>Add Item</button>
                </div>

            </div>
        </div>
    )
}

export default AddCart