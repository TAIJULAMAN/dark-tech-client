import ReviewCard from "./ReviewCard";
import img1 from "../../../../assets/reviews/badhon.jpg";
import img2 from "../../../../assets/reviews/bappy.jpg";
import img3 from "../../../../assets/reviews/opu.jpg";

const Reviews = () => {
    return (
        <div className=" text-center p-5 bg-base-300">
        <h1 className=" font-bold text-center text-3xl text-orange-500 uppercase my-5">
          Customers Reviews
        </h1>
  
        <div className=" flex flex-col lg:flex-row gap-5 justify-center px-5">
          <ReviewCard img={img1} title="Badhon" />
          <ReviewCard img={img2} title="Bappy" />
          <ReviewCard img={img3} title="Opu" />
        </div>
      </div>
    );
};

export default Reviews;
