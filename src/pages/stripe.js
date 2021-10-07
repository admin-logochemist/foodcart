import React,{useState,useEffect} from 'react'
import "./stripe.css"
import { useSelector } from "react-redux";
import { selectUser } from '../features/UserSlice'
import { addToBasket, selectItems, selectTotal } from '../features/BasketSlice';
import CheckoutProduct from './CheckoutProduct';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import Currency from 'react-currency-formatter';
import Button from '@restart/ui/esm/Button';
import axios from './axios'
const Stripe=()=> {
    const user= useSelector(selectUser)
    const items=useSelector(selectItems)
    const total=useSelector(selectTotal)
    const stripe=useStripe()
    const elements = useElements()
    const [succeded, setSucceded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [errors, setErrors] = useState(null)
    const [disabled, setDisabled] = useState(null)
    const [clientSecret, setClientSecret] = useState(true)
    useEffect(() => {
     const getClientSecret=async()=>{
         const response = await axios({
             method:'post',
             url:`/payments/createTotal=${total}`
         })
         setClientSecret(response.data.clientSecret)
     }
     getClientSecret()
    }, [items])
    const handleSubmit=async(event)=>{
        event.preventDefault()
setProcessing(true)
    }
    const handleChange=event=>{
        setDisabled(event.empty);
        setErrors(event.errors ? event.errors.messege:"")
    }
    return (
        <div className="payment">
            <div className="payment__container">
            <h1>Checkout({items.length}):</h1>
                <div className="payment__section">
              
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>London UK</p>
                        </div>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items in Delivery</h3>
                        <div className="payment__items">
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
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Section</h3>
                        <div className="payment__detail">
                            <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            {items.length>0 && (
                        <>
                        <h5 className="total">Order Total({items.length}):
                        <span>
                            <Currency quantity={total} currency="USD"/>
                        </span>
                        <br/>
                        <Button disabled={processing|| disabled||succeded}
                        >
                            <span>{processing?<p>Proccessing</p>:"Buy Now"}</span>
                        </Button>
                        </h5>
                        
                        {errors && <div>{errors}</div>}
                        </>
                      
                    )}
                            </form>
                             
                        </div>
                    </div>
                </div>
                

           <div>

           </div>
            </div>
        </div>
    )
}

export default Stripe
