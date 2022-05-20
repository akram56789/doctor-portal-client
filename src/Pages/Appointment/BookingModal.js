import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP')
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            patient: user.email,
            phone: event.target.phone.value,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                //to close the modal
                console.log(data);
                if (data.success) {
                    toast(`appointment is set, ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`you already booked an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null)

            })




    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='mb-5'>
                        <h3 className="font-bold text-lg text-secondary text-center">Booking for: {name}</h3>    <label htmlFor="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5  justify-items-center'>
                        <input type="text"
                            disabled
                            value={format(date, 'PP')}
                            className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input type="text"
                            name='name'
                            disabled
                            value={user?.displayName || ''}

                            className="input input-bordered w-full max-w-xs" />

                        <input type="email"
                            name='email'
                            disabled
                            value={user?.email || ''}
                            className="input input-bordered w-full max-w-xs" />
                        <input type="number"
                            name="phone"
                            placeholder="Phone"
                            className="input input-bordered w-full max-w-xs" />

                        <input type="submit"
                            value='Submit'
                            placeholder="Type here"
                            className="btn btn-accent text-white font-normal	 input input-bordered w-full max-w-xs" />
                    </form>




                </div>
            </div>
        </div>
    );
};

export default BookingModal;