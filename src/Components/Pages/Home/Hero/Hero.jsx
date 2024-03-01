import { Link } from "react-router-dom";
import Button from "../../../Custom/Button";
const Hero = () => {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col justify-center space-y-5 lg:px-32 px-5 text-white bg-[url('/src/assets/hero/hero.avif')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 lg:space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight uppercase">
          Empowering Tomorrow! Welcome to Dark tech.
        </h1>
        <p>
          Your premier destination for cutting-edge technology solutions. We
          specialize in website development, app creation, and software
          solutions, tailored to meet your unique needs. With a focus on
          innovation and quality, we deliver exceptional results that drive
          success. Whether you are a startup or an established enterprise, we
          are here to help you thrive in the digital landscape. Trust us to
          bring your ideas to life and propel your business forward. Join us as
          we pave the way for a brighter, more connected future. Welcome to the
          forefront of technology with Dark Tech.
        </p>
       <div className="my-5">
       <Link to="/services">
          <Button title="See Services" />
        </Link>
       </div>
      </div>
    </div>
  );
};

export default Hero;
