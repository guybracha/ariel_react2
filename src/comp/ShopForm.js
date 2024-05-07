import React, { useState } from 'react'
export default function ShopForm() {
    const [nameVal, setNameVal] = useState("");
    const [amountVal, setAmountVal] = useState("1");

    const onSub = (e) => {
        e.preventDefault();
    }
  return (
    <div className='col-md-6 mt-4'>
      <form onSubmit={onSub}>
        <label>Name:</label>
        <input onChange={e => setNameVal(e.currentTarget.value)} type="search" className='form-control' />
        <labe>Amount:</labe>
        <input value={e => setAmountVal(e.currentTarget.value)} type="number" className='form-control' />
        <button className='mt-3 btn btn-success'>Add</button>
      </form>
    </div>
  )
}