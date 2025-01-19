import Checkout from '@/components/sections/Checkout'
import StripeWrapper from '@/components/sections/StripeWrapper'
import React from 'react'

const page = () => {
  return (
    <StripeWrapper>
    <Checkout/>
    </StripeWrapper>

)
}

export default page