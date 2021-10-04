
import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../features/BasketSlice'
import CheckoutProduct from './CheckoutProduct'
import { useHistory } from 'react-router'
import StripeCheckout from 'react-stripe-checkout';
import Currency from 'react-currency-formatter';
import {loadStripe} from '@stripe/stripe-js'
function Checkout() {
    const stripePromise=loadStripe();
    const items = useSelector(selectItems);
    const history=useHistory()
    const total = useSelector(selectTotal)
    function createCheckout (){
        history.push('/stripe')
    }
    const onToken = (token) => {
        console.log(token)
    }
    
    return (
        <div>
            <main style={{ display: 'flex' ,flexDirection:'row' ,justifyContent:'space-around',flexWrap:'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', padding: 5, justifyContent: 'space-between', backgroundColor: 'white' }}>
                    <h1 style={{ borderBottom: '1px solid whitesmoke', paddingBottom: 4 }}>
                        {items.length === 0 ? "Empty Basket" : "Your Shopping Basket"}
                    </h1>
                    <div>
                        {items && items?.length ? items.map((item, i) => {
                            return <CheckoutProduct
                                key={i}
                                img={item?.img || ''}
                                title={item?.title||''}
                                price={item?.price||''}
                                description={item?.description}
                            />
                        }
                        ) : null}
                    </div>
                </div>
                <div>
                    {items.length>0 && (
                        <>
                        <h3>Subtotal({items.length}):
                        <span>
                            <Currency quantity={total} currency="USD"/>
                        </span>
                        </h3>
                        
                        <Button role="Link" onClick={() => createCheckout()}> Proceed To CheckOut</Button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}
export default Checkout
