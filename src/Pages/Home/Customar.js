import React from 'react';
import quote from '../../assets/icons/quote.svg';
import customer1 from '../../assets/images/people1.png';
import customer2 from '../../assets/images/people2.png';
import customer3 from '../../assets/images/people3.png';

const Customar = () => {
    const reviewers = [
        {
            _id: 1,
            name: 'fahim',
            review: 'good service',
            location: 'dhaka',
            img: customer1
        },
        {
            _id: 2,
            name: 'hossain',
            review: 'best doctor',
            location: 'norshigdi',
            img: customer2
        },
        {
            _id: 3,
            name: 'salman',
            review: 'love it',
            location: 'cumillah',
            img: customer3
        }
    ]
    return (
        <section className='mt-28'>
            <div className='flex justify-between'>
                <div >
                    <h4 className="text-xl font-bold text-primary">Testimonial</h4>
                    <h3 className='text-3xl'>What Our Patients Says</h3>
                </div>
                <div  >
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviewers.map(reviewer =>
                        <div key={reviewer._id}>
                            <div class="card w-lg bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iusto accusantium minima, quaerat tenetur perspiciatis?</p>
                                    <div className='flex items-center  mt-5'>
                                        <div class="avatar">
                                            <div class="w-16  mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img   src={reviewer.img} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='text-xl'>{reviewer.name}</h4>
                                            <p>{reviewer.location}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )
                }
            </div>

        </section>
    );
};

export default Customar;