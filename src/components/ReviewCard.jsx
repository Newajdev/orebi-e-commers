import { Rating } from "@smastrom/react-rating";

const ReviewCard = () => {
    return (
        <div className="border-y py-4 my-4">
            <div className='flex justify-between items-center'>
                <div className='flex gap-6 items-center'>
                    <p>John Ford</p>
                    <Rating
                        style={{ maxWidth: 80 }}
                        value={3}
                        readOnly
                    />
                </div>
                <p className='text-lightGray'>6 months ago</p>
            </div>
            <p className='text-lightGray mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
    );
};

export default ReviewCard;