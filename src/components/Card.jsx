
import Flex from './Flex';
import Image from './Image';
import Product from "../assets/SampleProduct.png"
import { FaHeart } from 'react-icons/fa';
import { FaCartShopping, FaRotate } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const Navigate = useNavigate()
    const hendleProductsDetails = () =>{
        Navigate('/shop/productsdetails')
        
    }
    return (
        <div onClick={hendleProductsDetails} className='w-[370px] h-[465px] relative  group'>

            <div className='absolute mt-6 ml-6 z-50'>
                <h3 className='text-white text-sm font-bold px-4 py-2 bg-black inline-flex rounded-sm'>New</h3>
            </div>

            <div className='h-[370px w-full relative'>
                <Image Source={Product}></Image>

                <div className='bg-white w-full h-[0px] group-hover:h-1/2 duration-500 absolute bottom-0 invisible group-hover:visible '>

                    <div className='flex flex-col gap-5 items-end p-6'>
                        <p className='opacity-0 group-hover:opacity-100  flex gap-3 items-center text-lightGray hover:text-black hover:cursor-pointer hover:font-bold'>
                            Add to Wish List
                            <FaHeart />
                        </p>
                        <p className='opacity-0 group-hover:opacity-100  flex gap-3 items-center text-lightGray hover:text-black hover:cursor-pointer hover:font-bold'>
                            Compare
                            <FaRotate />
                        </p>
                        <p className='opacity-0 group-hover:opacity-100  flex gap-3 items-center text-lightGray hover:text-black hover:cursor-pointer hover:font-bold'>
                            Add to Cart
                            <FaCartShopping />
                        </p>
                    </div>
                </div>
            </div>



            <div className='py-6 bg-white'>
                <Flex style={'justify-between'}>
                    <h2 className='text-xl font-bold text-black'>Basic Crew Neck Tee</h2>
                    <p className='text-lightGray text-base'>$44.00</p>
                </Flex>
                <p className='text-lightGray text-base mt-3'>Black</p>
            </div>

        </div>
    );
};

export default Card;