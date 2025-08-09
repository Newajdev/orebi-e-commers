
const PrimeBtn = ({title, style}) => {
    return (
        <button className={`bg-black border-transparent border-[3px] text-white text-sm font-bold py-4 px-8 hover:bg-transparent hover:text-black hover:border-black duration-300 ${style}`}>{title}</button>
    );
};

export default PrimeBtn;