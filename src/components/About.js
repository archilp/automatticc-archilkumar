import React from "react";
import NavBar from "./NavBar";
import logo from "./Logo.jpg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <NavBar />
      {/* <img src={logo} alt="" /> */}

      <div className="main">
        <div className="goals">
          <h1>-Mission-</h1>
          <p>Improve car buying process to be as efficient as possible</p>

          <h1>-Willingness to iterate-</h1>
          <p>Ability to iterate software continuously to customer and dealership needs</p>

          <h1>-Solving a real customer problem-</h1>
          <p>Car buying is time consuming, untrustworthy, and a bad experience</p>
        </div>

        <div className="info">
          <h1>About</h1>
          <p>
            Automatticc is an online portal/marketplace that facilitates the experience and
            transaction of a used vehicle purchase between a car buyer and the physical
            brick-and-mortar dealership where the vehicle is located. Automatticc does not aim to
            eliminate used car dealerships nor redesign their existing business practices. Rather,
            it offers them another option to add to their existing marketing strategies in relation
            to customer acquisition, experience, and final sale of the vehicle. With a customer
            first approach, Automatticc makes the car buying process simple, straightforward, and
            stress-free for both the buyer and seller. Using Automatticc, car buyers can schedule a
            test drive, finance, trade, and buy a vehicle all online. The experience created is one
            of total control and peace of mind as customers can complete their test drive, purchase,
            and sign all documentation autonomously, on their own and at their intended pace. In
            addition, all pricing is to be transparent and upfront to ensure that there is no
            pressure, negotiation, or surprises. As a result, all those hours of awkward small talk,
            back and forth bickering, and endless waiting are eliminated.
          </p>

          <p>
            Automatticc presents dealerships the most effective option to better connect with their
            customers through our system providing consumers an autonomous, stress-free car buying
            experience. The typical dealership model of today hasn’t changed since the 1950’s and
            needs to be updated. While other online and transparent car buying models are becoming
            more popular, none of them give the customer total control in combination with an
            in-person experience. Car buying today is difficult, it does not have to be anymore.
          </p>

          <p>
            In today’s car shopping world, people already know what they want, so why do they need
            to spend hours with a salesman who knows less than the buyer. In today's world of
            ecommerce, people not only like, but are accustomed to completing most, if not all, of
            their purchases online and on their own. Little to no car dealerships offer this as an
            option. (95% of purchases still happen at the dealership)
          </p>

          <p>
            However, dealerships are still critical to the vehicle sales. Purchasing a vehicle is
            the second largest investment the average individual makes in their lifetime. While it
            is tremendously convenient to complete the entire process online, most are not going to
            make that kind of serious commitment and long term investment without at least trying
            the car out first. People need to see, touch, hear, and even smell the product you’re
            going to be spending the next 5-7 years with on average. With this in mind, today’s
            consumers are different than yesterday’s. People not only want, but expect to do things
            on their own. With the average buyer spending weeks completing research before they even
            step foot into a dealership, todays’ consumers are more informed than ever. In the
            research state of car buying, digital shoppers spend an average of 13 hours online
            conducting research, finding cars, comparing prices, and reading reviews (CarGurus). 42%
            of car shoppers know the exact make and model they want before they start shopping
            (CarGurus). They know what they want, they already have an idea of what they should be
            paying, and they definitely don’t want to get scammed. 80% of car shoppers wouldn’t buy
            a used car without a 3rd party price validation (CarGurus).
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
