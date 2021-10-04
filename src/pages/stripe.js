import React from 'react'
import "./stripe.css"
import StripeCheckout from 'react-stripe-checkout';

function stripe() {
    const onToken = (token) => {
        console.log(token)
    }
    return (
        <div className="Stripe">
            <StripeCheckout
                token={onToken}
                name="Testing Foodport"
                currency="usd"
                amount="19090"
                stripeKey="pk_test_51J5C8JLwMYFuVwcJpbQ11WOXgTvDiN8VHT0KkDG1R3OpRxGAZSmB072QxdrPVcKVeiebK9aOt10IHvOvfeUpfkoP00OqXNDT48"
            />
        </div>
    )
}
export default stripe