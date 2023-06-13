import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Section from "../Section/Section";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Wolves | home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Section></Section>
        </div>
    );
};

export default Home;