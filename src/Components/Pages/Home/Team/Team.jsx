import Button from "../../../Custom/Button";

const Team = () => {
         const data = [
         {
           img: "",
           name: "Md Fahad Bin Bashar",
           specialties: "Full Stack Developer",
         },
         {
           img: "/src/assets/Team/mayin.jpg",
           name: "Mayin Uddin",
          specialties: "Full Stack Developer",
         },
         {
           img: "/src/assets/Team/tohir.jpg",
           name: "Tohirul Islam",
           specialties: "Full Stack Developer",
         },
         {
           img: "",
           name: "Borhan Uddin",
           specialties: "Full Stack Developer",
         },
         {
          img: "",
          name: "Md Alamin Saifur",
           specialties: "Front End Developer",
         },
         {
           img: "/src/assets/Team/khorshed.jpg",
          name: "Khorshed Alam",
           specialties: "Front End Developer",
         },
         {
             img: "/src/assets/Team/aman.jpg",
             name: "Shah Aman",
             specialties: "Front End Developer",
           },
      ];
  return (
    <div className="bg-base-300 space-y-5">
      <h1 className="text-center text-3xl font-bold text-orange-500 uppercase p-5">
        Our Team Members
      </h1>
      <div className="carousel carousel-center max-w-full p-4 space-x-4">
      {data.map((member, index) => (
  <div key={index} className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img
                src={member.img}
                alt="member"
                className="rounded-xl w-[300px] h-[300px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{member.name}</h2>
              <p>{member.specialties}</p>
              <div className="card-actions">
                <Button title="See Profile" />
              </div>
            </div>
          </div>
        </div> 
           ))}
      </div>
    </div>
  );
};

export default Team;
