import React from 'react'
import "./stripe.css"
import StripeCheckout from 'react-stripe-checkout';
import image from '../images/signin.png'

function stripe() {
    const onToken = (token) => {
        console.log(token)
    }
    return (
        <div className="Stripe">
            <div className="form-stripe">
                <form className="form-main" action="/action_page.php">
                    <label className="label" for="fname">First Name</label>
                    <input className="input" type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label className="label" for="lname">Last Name</label>
                    <input className="input" type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label className="label" for="country">Country</label>
                    <input className="input" type="text" id="lname" name="lastname" placeholder="Your Country here.." />

                    <label className="label" for="country">Street Address</label>
                    <input className="input" type="text" id="lname" name="lastname" placeholder="Your Address here.." />

                    <label className="label" for="country">State</label>
                    <input className="input" type="text" id="lname" name="lastname" placeholder="Your State here.." />

                    <label className="label" for="country">Phone No#</label>
                    <input className="input" type="text" id="lname" name="lastname" placeholder="Your Phone here.." />

                    <label className="label" for="country">Email</label>
                    <input className="input" type="text" id="lname" name="lastname" placeholder="Your Email here.." />

                </form>
            </div>
            <br />
            <div className="Pay-with-card">
                <StripeCheckout
                    token={onToken}
                    name="FoodPort"
                    image={image}
                    currency="usd"
                    amount="190909"
                    stripeKey="pk_test_51J5C8JLwMYFuVwcJpbQ11WOXgTvDiN8VHT0KkDG1R3OpRxGAZSmB072QxdrPVcKVeiebK9aOt10IHvOvfeUpfkoP00OqXNDT48"
                />
            </div>

        </div>
    )
}
export default stripe