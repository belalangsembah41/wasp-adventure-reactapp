import React from "react";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import About from "../assets/about.png";
import HeroImg from "../assets/hero.png";
import AirBnb from "../assets/airbnb.png";
import Alianz from "../assets/alianz.png";
import SgAir from "../assets/sg-air.png";
import Bali from "../assets/bali.jpg";
import Majorca from "../assets/majorca.jpg";
import Iceland from "../assets/iceland.jpg";
import Santorini from "../assets/santorini.jpg";
import GreatWall from "../assets/wall.jpg";
import DestinationCard from "../components/DestinationCard";
import TestimonialCard from "../components/TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const destinationSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "130px",
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="container mx-auto w-full max-w-screen-2xl flex flex-col-reverse items-center justify-center p-5 md:flex-row">
        <div className="flex flex-col items-center p-8 md:items-start">
          <h1 className="text-3xl font-bold text-center md:text-left lg:text-4xl">
            Tropical Adventure with Authentic Experience
          </h1>
          <p className="text-center mt-5 md:text-left lg:text-lg lg:mt-8">
            Eros pulvinar urna elementum vel lacus aliquet eget. Sem quis
            egestas augue dui vel egestas et amet et.
          </p>
          <div class="mt-5 lg:mt-8">
            <button
              type="button"
              class="bg-[#DAE2B6] py-2 px-5 rounded-lg text-md border-none outline-none hover:bg-[#CCD6A6] font-semibold lg:text-lg"
            >
              Discover More
            </button>
          </div>
        </div>
        <div className="w-full max-w-md lg:max-w-xl shadow-lg">
          <img src={HeroImg} className="w-full rounded-md" />
        </div>
      </div>

      {/* Support Vendor */}
      <div className="container mx-auto w-full max-w-screen-2xl bg-[#DAE2B6] p-5 flex items-center md:justify-evenly">
        <div className="w-full max-w-[180px] mx-4">
          <img src={AirBnb} className="w-full" />
        </div>
        <div className="w-full max-w-[180px] mx-4">
          <img src={Alianz} className="w-full" />
        </div>
        <div className="w-full max-w-[180px] mx-4">
          <img src={SgAir} className="w-full" />
        </div>
      </div>

      {/* Destinations */}
      <div className="container w-full max-w-screen-2xl mx-auto p-10">
        <div className="px-6">
          <h1 className="text-2xl font-semibold">Best Destinations</h1>
          <p className="text-lg">Find your destinations in many regions</p>
        </div>
        <div>
          <Slider {...destinationSettings}>
            <DestinationCard
              imgBox={Bali}
              title="Bali Island"
              Location="Indonesia"
            />
            <DestinationCard
              imgBox={Majorca}
              title="Majorca Beach"
              Location="Spain"
            />
            <DestinationCard
              imgBox={Santorini}
              title="Santorini"
              Location="Greece"
            />
            <DestinationCard
              imgBox={Iceland}
              title="Iceland"
              Location="Iceland"
            />
            <DestinationCard
              imgBox={GreatWall}
              title="Great Wall"
              Location="China"
            />
          </Slider>
        </div>
      </div>

      {/* About */}
      <div className="bg-[#DAE2B6] px-5 py-8 container w-full max-w-screen-2xl mt-5 mx-auto">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start">
          <div className="w-full max-w-[550px] shadow-lg">
            <img
              src={About}
              className="w-full object-cover rounded-md shadow-lg"
            />
          </div>
          <div className="px-8 mt-5 lg:mt-0 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl font-bold lg:mt-2 lg:text-4xl">
              Travel the world with us
            </h1>
            <p className="text-center max-w-xl mt-5 lg:text-lg lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              voluptate odio, sed enim animi, autem laudantium reprehenderit
              ipsum eveniet distinctio asperiores esse consequatur, quibusdam
              qui nostrum ex consequuntur! Sit, aspernatur!
            </p>
            <button className="bg-[#A6BB8D] hover:bg-[#91A47B] py-1 px-10 rounded-md font-semibold my-4 text-lg lg:mt-8">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container w-full max-w-screen-2xl mx-auto p-10">
        <div className="px-6">
          <h1 className="text-2xl font-semibold">Testimonials</h1>
          <p className="text-lg">What they say</p>
        </div>
        <div>
          <Slider {...settings}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Slider>
        </div>
      </div>

      {/* Footer */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
