import { useState } from 'react';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import PrimeBtn from '../../components/PrimeBtn';
import SecondaryBtn from '../../components/SecondaryBtn';
import Accordium from '../../components/Accordium';
import ReviewCard from '../../components/ReviewCard';

const ProductDetails = () => {
    const [activeColor, setActiveColor] = useState(false)
    const [Quantity, setQuantity] = useState(0)
    const [open, setOpen] = useState(null)
    const [Active, setActive] = useState('Description')
    const [communicationrating, setRatingCommunication] = useState(0);
    const [productsrating, setRatingProducts] = useState(0);
    const [servicesrating, setRatingServices] = useState(0);


    const hendleColors = () => {
        setActiveColor(false)
    }
    // const hendleTabs = ()

    const items = [
        {
            id: 1,
            title: "FEATURES & DETAILS",
            details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            title: "SHIPPING INFO",
            details:
                "Free shipping on orders over $50. Delivery time: 3–5 business days.",
        },
        {
            id: 3,
            title: "RETURNS POLICY",
            details:
                "You can return items within 30 days for a full refund. Conditions apply.",
        },
    ];



    return (
        <div className='my-36'>
            <Container>
                {/* Products Images */}
                <div className='grid lg:grid-cols-2 gap-6 mb-16'>
                    <img className='bg-lightGray w-[780px] h-[780px]' />
                    <img className='bg-lightGray w-[780px] h-[780px]' />
                    <img className='bg-lightGray w-[780px] h-[780px]' />
                    <img className='bg-lightGray w-[780px] h-[780px]' />
                </div>
                {/* Products Detials */}
                <div>
                    <SectionTitle Title={'Product'} />
                    {/* Ratings */}
                    <div className='flex items-center gap-6'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={3}
                            readOnly
                        />
                        <p>1 Review</p>
                    </div>
                    {/* Prices */}
                    <div className='flex items-center gap-6 my-6'>
                        <p className='text-2xl text-lightGray line-through'>$88.00</p>
                        <p className='text-2xl font-bold'>$44.00</p>
                    </div>
                    <hr />
                    {/* color, size and quantity */}
                    <div>
                        <div className='my-6 h-12 flex items-center'>
                            <p className='text-xl font-bold uppercase w-[10%]'>Color: </p>
                            <div className='flex items-center gap-3'>
                                <div onClick={hendleColors} className={`h-6 w-6 rounded-full bg-red-400 hover:w-8 hover:h-8 duration-300 ${activeColor ? "w-8 h-8" : ""}`}></div>
                                <div onClick={hendleColors} className={`h-6 w-6 rounded-full bg-green-400 hover:w-8 hover:h-8 duration-300 ${activeColor ? "w-8 h-8" : ""}`}></div>
                                <div onClick={hendleColors} className={`h-6 w-6 rounded-full bg-yellow-400 hover:w-8 hover:h-8 duration-300 ${!activeColor ? "w-8 h-8" : ""}`}></div>
                                <div onClick={hendleColors} className={`h-6 w-6 rounded-full bg-purple-400 hover:w-8 hover:h-8 duration-300 ${activeColor ? "w-8 h-8" : ""}`}></div>
                                <div onClick={hendleColors} className={`h-6 w-6 rounded-full bg-teal-400 hover:w-8 hover:h-8 duration-300 ${activeColor ? "w-8 h-8" : ""}`}></div>
                            </div>
                        </div>
                        <div className='my-6 h-12 flex items-center'>
                            <p className='text-xl font-bold uppercase w-[10%]'>Size: </p>
                            <div className=''>
                                <select className="block w-full border border-gray-300 bg-white px-6 py-2 text-gray-700 shadow-sm  focus:border-blue-500 focus:ring  uppercase focus:ring-blue-200" name="" id="">
                                    <option value="s">s</option>
                                    <option value="m">m</option>
                                    <option value="l">l</option>
                                    <option value="xl">xl</option>
                                    <option value="xxl">xxl</option>
                                </select>
                            </div>
                        </div>
                        <div className='my-6 h-12 flex items-center mb-8'>
                            <p className='text-xl font-bold uppercase w-[10%]'>Quantity: </p>
                            <div className='border text-2xl flex justify-between gap-6 px-4 py-2'>
                                <div onClick={() => setQuantity(Quantity - 1)} className='bg-lightGray rounded-full w-8 h-8 text-white flex items-center justify-center cursor-pointer'>-</div>
                                <div className='w-10 text-center'>{Quantity}</div>
                                <div onClick={() => setQuantity(Quantity + 1)} className='bg-lightGray rounded-full w-8 h-8 text-white flex items-center justify-center cursor-pointer'>+</div>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className='my-6 h-12 flex items-center mb-8'>
                        <p className='text-xl font-bold uppercase w-[10%]'>STATUS: </p>
                        <p className='text-xl text-lightGray'>In stock </p>
                    </div>

                    <hr />
                    <div className='flex gap-6 py-8'>
                        <SecondaryBtn title={"Add to Wish List"} />
                        <PrimeBtn title={'Add to Cart'} />
                    </div>
                    <hr />
                    {/* Carosal */}
                    <div className='flex flex-col gap-2 py-8'>
                        {
                            items.map(item => <Accordium key={item.id} item={item} open={open} setOpen={setOpen} />)
                        }
                    </div>

                    {/* Descrioption and Reviews tab */}
                    
                    
                    <div className='flex gap-6 mt-20'>
                        <p onClick={() => setActive('Description')} className={`text-xl text-lightGray ${Active === 'Description' ? 'font-bold text-[#000000]' : ''}`}>Description</p>
                        <p onClick={() => setActive('Reviews')} className={`text-xl text-lightGray ${Active === 'Reviews' ? 'font-bold text-[#000000]' : ''}`}>Reviews (1)</p>
                    </div>
                    {/* Description Section */}
                    <div className={`mt-10 ${Active === 'Description' ? '' : 'hidden'}`}>
                        <p>This is Description Section</p>
                    </div>
                    {/* Review Section */}
                    <div className={`mt-10 ${Active === 'Reviews' ? '' : 'hidden'}`}>
                        <p className='text-lightGray'>1 review for this product</p>
                        <ReviewCard />
                    </div>

                    {/* Add A Review */}
                    <div className='w-1/2 my-32'>
                        <h4 className='text-xl font-bold'>Add a Review</h4>
                        <form className='mt-12 mb-7'>
                            <label className='text-base font-bold block mt-6'>Name</label>
                            <input type="text" name='name' className='border-b w-full mt-3 py-2 ' placeholder='Your name' />

                            <label className='text-base font-bold block mt-6'>Email</label>
                            <input type="email" name='email' className='border-b w-full mt-3 py-2 ' placeholder='Your E-mail Address' />

                            <label className='text-base font-bold block mt-6'>Message</label>
                            <textarea rows={4} type="text" name='message' className='border-b w-full mt-3 py-2 ' placeholder='Give us your Feedback of this Products' />

                            <div className='my-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-6'>
                                        <Rating
                                            style={{ maxWidth: 130 }}
                                            value={communicationrating}
                                            onChange={setRatingCommunication}
                                            isRequired
                                        />
                                        <p className='text-base mt-1'>{communicationrating} Star</p>
                                    </div>
                                    <p>For Communication</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-6'>
                                        <Rating
                                            style={{ maxWidth: 130 }}
                                            value={productsrating}
                                            onChange={setRatingProducts}
                                            isRequired
                                        />
                                        <p className='text-base mt-1'>{productsrating} Star</p>
                                    </div>
                                    <p>For Products</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-6'>
                                        <Rating
                                            style={{ maxWidth: 130 }}
                                            value={servicesrating}
                                            onChange={setRatingServices}
                                            isRequired
                                        />
                                        <p className='text-base mt-1'>{servicesrating} Star</p>
                                    </div>
                                    <p>For Services</p>
                                </div>
                            </div>


                            <PrimeBtn style={'px-20 mt-10'} title={'Post'}><input type="submit" /></PrimeBtn>
                        </form>

                    </div>








                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;