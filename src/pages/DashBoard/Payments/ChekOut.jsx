import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";



const ChekOut = ({ data }) => {
    const {price, name, _id, image} = data;
    
    const stripe = useStripe();
    const elements = useElements()
    const [axiosSecure] = useAxiosSecure();
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('');
   
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setError(error.message);
        } else {
            setError('');
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'unknown'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            // save payment informatin
            const payment = { 
                email: user?.email, 
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                items: _id,
                status: 'paymented',
                itemsName: name,
                image: image

            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data)
                if(res.data.result.insertedId){
                        // display confirm
                }
            })
            
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="w-3/4">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="px-3 py-1 my-5 rounded bg-[#D11F18] text-white" type="submit" disabled={!stripe && !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {transactionId && <p className="text-green-500">Payment Successful</p>}
        </>
    );
};

export default ChekOut;