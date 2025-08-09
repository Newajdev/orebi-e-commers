import Image from "../../../components/Image";
import ads_01 from "../../../assets/Ad_1.jpg"
import ads_02 from "../../../assets/Ad_2.jpg"
import ads_03 from "../../../assets/Ad_3.jpg"

const AdsSection = () => {
    return (
        <div className="grid grid-cols-2 gap-20 py-32">
            <div>
                <Image Source={ads_01}></Image>
            </div>
            <div className="flex flex-col justify-between">
                <Image Source={ads_02}></Image>
                <Image Source={ads_03}></Image>
            </div>
        </div>
    );
};

export default AdsSection;