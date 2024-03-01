import { Link } from "react-router-dom";
import web1 from "../../../../assets/about/web1.avif";
import web2 from "../../../../assets/about/web2.avif";
import Button from "../../../Custom/Button";

const About = () => {
  return (
    <div className="bg-base-300 space-y-5">
      <h3 className="text-3xl text-orange-500 font-bold text-center uppercase p-5">
        About Us
      </h3>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={web1} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={web2}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            {/* <h3 className="text-3xl text-orange-500 font-bold">About Us</h3> */}
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              With a seasoned team boasting years of expertise, we at DARK TECH
              bring unparalleled qualifications to the table. Our extensive
              experience in the field ensures that your projects are handled
              with precision and proficiency. From intricate coding tasks to
              innovative design solutions, we have the knowledge and skills to
              deliver exceptional results.
            </p>
            <p className="py-6">
              With a proven track record of success, we pride ourselves on
              exceeding client expectations and driving tangible outcomes. Trust
              in our expertise to navigate the complexities of technology with
              ease, providing you with the confidence to embark on your digital
              journey. Partner with us and experience the difference firsthand.
            </p>
            <Link
              to="/services"
            >
              {" "}
              <Button title="See More" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
