import { Helmet } from "react-helmet-async";
import Title from "../../../components/Title";
import ChekOut from "./ChekOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCard from "../../../hooks/UseCard";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAY_GETWAY);
const Payments = () => {
    // const [, data] = useCard();
    // const price = data.reduce((sum, item) => sum + item.price, 0);

    const singledata = useLoaderData();
    return (
        <div>
            <Title title="Payments"></Title>
            <Helmet>
                <title>wolves | payments</title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <ChekOut data={singledata}></ChekOut>
            </Elements>
        </div>
    );
};

export default Payments;