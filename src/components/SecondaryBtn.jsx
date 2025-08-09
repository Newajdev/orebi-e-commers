

const SecondaryBtn = ({style, title}) => {
    return (
        <button className={`bg-transparent border-black border-[3px] text-black text-sm font-bold py-4 px-8 hover:bg-black hover:text-white hover:border-transparent duration-300 ${style}`}>{title}</button>
    );
};

export default SecondaryBtn;