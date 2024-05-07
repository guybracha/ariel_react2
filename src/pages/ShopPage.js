import React from 'react'
import ShopForm from '../comp/ShopForm'
import ShopList from '../comp/ShopList'

export default function ShopPage() {
  return (
    <div className='container'>
      <ShopForm/>
      <ShopList/>
    </div>
  )
}
