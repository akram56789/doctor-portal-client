import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)

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