import Card from "../../../components/Card";
import SectionTitle from "../../../components/SectionTitle";

const BestSeller = () => {
    return (
        <div className="my-24">
            <SectionTitle Title={'Our Bestsellers'}/>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default BestSeller;