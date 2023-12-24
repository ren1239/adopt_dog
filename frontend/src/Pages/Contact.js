import React from "react";
import dog_face from "../Assets/landing2.jpg";

function Contact() {
  return (
    <div>
      <div className="Nav-Spacer h-8"></div>
      <h1 className="text-3xl font-extralight font-newsreader text-center py-4">
        Welcome to <span className="text-primary">Dog Rescue </span>
        Manukau!{" "}
      </h1>
      <div className="w-screen mx-auto overflow-hidden   h-[40vh]">
        <img
          src={dog_face}
          alt="landing"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="w-screen">
        <div className=" md:px-36">
          <div className="  grid md:grid-cols-3 py-4 ">
            <h3 className="col-span-1 gap-2 md:my-8  font-extralight font-newsreader text-center ">
              OUR START
            </h3>
            <p className="md:col-span-2 text-xs mx-16 my-8 font-extralight leading-6 md:text-left ">
              {" "}
              At Dog Rescue Manukau, we believe every dog deserves a loving,
              forever home. Our journey began as a compassionate mission led by
              Ruth Bay, a dedicated 55-year-old primary school teacher. Her
              passion for animal welfare and her tireless commitment have been
              the guiding force behind our organization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 py-4 ">
            <h3 className="col-span-1 md:my-8  font-extralight font-newsreader text-center ">
              OUR TEAM
            </h3>
            <p className="md:col-span-2 text-xs mx-16 my-8 font-extralight leading-6 md:text-left">
              {" "}
              We are more than just a shelter; we are a family. Our team is
              composed of volunteers who are the backbone of our community.
              These incredible individuals donate their time, energy, and love,
              ensuring that our furry friends receive the care and attention
              they need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 py-4 ">
            <h3 className="col-span-1 md:my-8  font-extralight font-newsreader text-center ">
              OUR HOME
            </h3>
            <p className="md:col-span-2 text-xs mx-16 my-8 font-extralight leading-6 md:text-left ">
              {" "}
              Nestled in the picturesque surroundings of Whitford, our shelter
              operates on a beautiful farm, generously donated for our cause.
              This serene environment provides a perfect temporary home for our
              dogs, offering them space, comfort, and the joy of nature as they
              wait for their forever families.
            </p>
          </div>
          <div className="grid md:grid-cols-3 py-4 ">
            <h3 className="col-span-1 md:my-8  font-extralight font-newsreader text-center ">
              OUR MISSION
            </h3>
            <p className="md:col-span-2 text-xs mx-16 my-8 font-extralight leading-6 md:text-left ">
              Currently, we are the temporary family for over 50 delightful
              dogs, each with their unique personality and story. Our goal is
              simple yet profound – to find a loving, permanent home for each of
              these deserving souls. We believe that by connecting the right
              people with the right pets, we can create happy futures for both.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
