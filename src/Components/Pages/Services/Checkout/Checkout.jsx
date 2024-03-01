import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import Button from "../../../Custom/Button";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation()
  const state = location.state

  const handleBookService = (event) => {
    event.preventDefault();
    if (!state) {
      console.error("Service data not available.");
      return;
    }
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img: state.img,
      date,
      service: state.title,
      service_id: state._id,
      price: state.price,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Service booked successfully");
        }
      })
      .catch((error) => {
        console.error("Error booking service:", error);
      });
  };

  if (!state) return <div>Loading...</div>;

  

  return (
    <div className="bg-base-300 p-5 space-y-5">
      <h2 className="text-center text-3xl">
     <span className="text-3xl text-orange-500 font-bold py-5"> Book Service</span>
        :{state?.title}</h2>
      <form  onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          {/* ..........................user mail.................................. */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          {/* .......................price of service....................... */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price of Service</span>
            </label>
            <input
              type="text"
              defaultValue={"$"+ state.price}
              className="input input-bordered"
            />
          </div>
        </div>

        {/* ........................submit button.......................... */}
        <div className="flex justify-center items-center my-5">
          <Button title="Book Service" />
        </div>
      </form>
    </div>
  );
};

export default Checkout;