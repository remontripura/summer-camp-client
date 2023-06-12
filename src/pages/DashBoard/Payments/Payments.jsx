import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";
import ChekOut from "./ChekOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_PAY_GETWAY);
const Payments = () => {
    return (
        <div>
            <Title title="Payments"></Title>
            <Helmet>
                <title>wolves | payments</title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <ChekOut></ChekOut>
            </Elements>
        </div>
    );
};

export default Payments;