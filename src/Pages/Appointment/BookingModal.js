import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div className='mb-5'>
                        <h3 class="font-bold text-lg text-secondary text-center">Booking for: {name}</h3>    <label for="booking-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5  justify-items-center'>
                        <input type="text"
                            disabled
                            value={format(date, 'PP')}
                            class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text"
                            name='name'
                            placeholder="Your Name"
                            class="input input-bordered w-full max-w-xs" />
                        <input type="number"
                            name="phone"
                            placeholder="Phone"
                            class="input input-bordered w-full max-w-xs" />
                        <input type="email"
                            name='email'
                            placeholder="Email"
                            class="input input-bordered w-full max-w-xs" />

                        <input type="submit"
                            value='Submit'
                            placeholder="Type here"
                            class="btn btn-accent text-white font-normal	 input input-bordered w-full max-w-xs" />
                    </form>




                </div>
            </div>
        </div>
    );
};

export default BookingModal;