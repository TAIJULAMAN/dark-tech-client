
const Button = ({title}) => {
    return (
        <div>
     <button className=" bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out">
        {title}
      </button>
    </div>
    );
};

export default Button;