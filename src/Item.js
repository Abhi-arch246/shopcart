import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
function Item({ item }) {
    const dispatch = useDispatch()
    const [show, setshow] = useState('none')
    const [newitem, setNewitem] = useState('')
    function deleteitem(item) {
        dispatch({ type: 'DELETE_ITEM', payload: item })
    }
    function edititem() {
        setshow('inline')
    }
    function submit() {
        dispatch({ type: 'SUBMIT', payload: { olditem: item, newitem: newitem } })
        setshow('none')
    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className='text-white'>{item}</h1>
                </div>

                <div className="col-md-4">
                    <button onClick={edititem} className='btn btn-primary m-2'>Edit</button>
                    <button onClick={() => deleteitem(item)} className='btn btn-danger m-2'>Delete</button>
                </div>
                <hr className='bg-white' />

            </div>
            <div className="col-md-8">
                <input type="text" style={{ display: show }} value={newitem} onChange={(e) => setNewitem(e.target.value)} />
                <button onClick={submit} className='btn btn-warning m-2' style={{ display: show }}>Submit</button>
            </div>
        </div>
    )
}

export default Item