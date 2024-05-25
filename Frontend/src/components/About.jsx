import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">

            Welcome to desi tadka India, where tradition meets taste. Our restaurant celebrates the rich culinary heritage of India, offering a diverse menu that spans the country's vibrant regions. From the spicy curries of the south to the aromatic biryanis of the north, every dish is crafted with authentic spices and fresh ingredients. Our chefs bring decades of experience, ensuring an unforgettable dining experience that honors traditional recipes while embracing contemporary flavors. Join us at desi tadka, where every meal is a journey through India’s culinary landscape, inviting you to indulge in the true essence of Indian cuisine.








            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
