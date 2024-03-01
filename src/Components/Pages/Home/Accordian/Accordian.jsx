const Accordian = () => {
  return (
    <div className="join join-vertical w-full bg-base-300  px-5 py-5 space-y-5">
      <h1 className="p-5 text-3xl text-center text-orange-500 font-bold uppercase">
        (FAQs) on Our Services and Expertise!
      </h1>
      <div className="collapse collapse-arrow join-item shadow rounded-lg">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What services does Dark Tech offer?
        </div>
        <div className="collapse-content">
          <p>
            Dark Tech specializes in website development, app development, and
            software development. We offer end-to-end solutions to meet your
            digital needs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item shadow rounded-lg">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          How experienced is Dark Tech in the tech industry?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            Dark Tech has been in the tech industry for 1 years, accumulating
            extensive experience in delivering high-quality solutions to clients
            across various sectors.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item shadow rounded-lg">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Can Dark Tech handle both small-scale and large-scale projects?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            Yes, Dark Tech is capable of handling projects of all sizes. Whether
            it is a small website, a complex app, or enterprise-level software,
            we have the expertise and resources to deliver.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item shadow rounded-lg">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          What technologies does Dark Tech specialize in?
        </div>
        <div className="collapse-content">
          <p>
            Dark Tech is proficient in a wide range of technologies including
            but not limited to HTML/CSS, JavaScript, Python, Java, Swift, React
            Native, Flutter, and more. We stay updated with the latest
            advancements to ensure cutting-edge solutions for our clients.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item shadow rounded-lg">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          How does Dark Tech ensure the security of the projects it develops?
        </div>
        <div className="collapse-content">
          <p>
            Security is a top priority for Dark Tech. We employ
            industry-standard security protocols and conduct thorough testing
            throughout the development process to identify and mitigate any
            vulnerabilities.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item shadow rounded-lg">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          What sets Dark Tech apart from other development companies?
        </div>
        <div className="collapse-content">
          <p>
            Dark Tech stands out for its commitment to innovation, quality, and
            customer satisfaction. We combine technical expertise with
            creativity and a customer-centric approach to deliver solutions that
            exceed expectations and drive tangible results for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
