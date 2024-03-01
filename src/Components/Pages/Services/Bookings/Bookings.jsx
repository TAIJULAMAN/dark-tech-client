import { useContext, useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import { AuthContext } from "../../../Authentication/AuthProvider";

const Bookings = () => {

    const { user } = useContext(AuthContext);
        const [bookings, setBookings] = useState([]);
    
        const url = `http://localhost:5000/bookings?email=${user?.email}`;
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setBookings(data))
        }, [url]);

        const handleDelete = id => {
            const proceed = confirm('Are You sure you want to delete');
            if (proceed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            alert('deleted successful');
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
            }
        }
    
        const handleBookingConfirm = id => {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== id);
                        const updated = bookings.find(booking => booking._id === id);
                        updated.status = 'confirm'
                        const newBookings = [updated, ...remaining];
                        setBookings(newBookings);
                    }
                })
        }
    return (
        <div className="bg-base-300 space-y-5 p-5">
                  <h1 className="text-5xl text-center text-orange-500 uppercase">Total Bookings: {bookings.length}</h1>
                  <div className="overflow-x-auto w-full">
                      <table className="table w-full">
                          <thead className="bg-orange-300">
                              <tr>
                                  <th>
                                      <label>
                                          <input type="checkbox" className="checkbox" />
                                      </label>
                                  </th>
                                  <th>Image</th>
                                  <th>Service</th>
                                  <th>Date</th>
                                  <th>Price</th>
                                  <th>Status</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  bookings.map(booking => <BookingRow
                                      key={booking._id}
                                      booking={booking}
                                      handleDelete={handleDelete}
                                      handleBookingConfirm={handleBookingConfirm}
                                  ></BookingRow>)
                              }
                          </tbody>
        
                      </table>
                  </div>
              </div>
    );
};

export default Bookings;

