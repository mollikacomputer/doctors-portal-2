import React from "react";
import QuoteImg from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Testimonial from "./Testimonial";
const Testimonials = () => {
    const reviews = [
      {
        _id:1,
        name:'William',
        photo:people1,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus.',
        location:'New York'
      },
      {
        _id:2,
        name:'Mary',
        photo:people2,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus.',
        location:'New York'
      },
      {
        _id:3,
        name:'May',
        photo:people3,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus.',
        location:'New York'
      }
    ]
  return (
    <div className="my-32">
      <div className="flex justify-between">
        <div className="">
          <h3 className="text-primary text-start">Testimonials</h3>
          <h2 className="text-3xl text-start">What Our Patients Says</h2>
        </div>
        <div>
        <img className="w-12 lg:w-24" src={QuoteImg} alt="Album" />
        </div>
      </div>
      <div className="grid grid-cols-1, md:grid-cols-2, lg:grid-cols-3 gap-5 mt-16">
       {
         reviews.map(review => <Testimonial 
          key={review._id}
          review = {review}
          >
            </Testimonial>)
       }

      </div>
    </div>
  );
};

export default Testimonials;
