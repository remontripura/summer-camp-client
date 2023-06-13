import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {
    const { user } = useAuth([]);
    const [axiosSecure] = useAxiosSecure();
    const { data: myclass = [] } = useQuery(['myclass'], async () => {
        const res = await axiosSecure.get('/payments')
        return res.data;
    })
    const myenrolled = myclass.filter(mycl => mycl.email === user.email);
    return (
        <div>
            <Helmet>
                <title>Wolves | payment history</title>
            </Helmet>
            <Title title="Payment History"></Title>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myenrolled.map((iclass, index) => <tr key={iclass._id}>
                                <td>{index + 1}</td>
                                <td>{iclass.email}</td>
                                <td>${iclass.price}</td>
                                <td>{iclass.transactionId}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;