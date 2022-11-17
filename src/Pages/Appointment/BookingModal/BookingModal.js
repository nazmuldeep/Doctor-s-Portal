import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    // treatment is just another name of appointmentOptions with __staticRouterHydrationData,name slots 
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            paitent: name,
            slot,
            email,
            phone,
        }
        // Todo: send data to the Server 
        // and once data is saved then close the modal 
        // and display success 

        console.log(booking)
        setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, i) =>
                                    <option
                                        value={slot}
                                        key={i}
                                    >{slot}
                                    </option>)
                            }

                        </select>
                        <input name='name' type="text" placeholder="Your name" className="input w-full input-bordered  " />
                        <input name='email' type="email" placeholder="Your email" className="input w-full input-bordered  " />
                        <input name='phone' type="text" placeholder="Your phone number" className="input w-full input-bordered  " />
                        <br />
                        <input className="btn btn-accent input w-full " type="submit" value='submit' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;