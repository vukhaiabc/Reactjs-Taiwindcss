import React from "react";
import Card from "../../assets/desktop/isocard.svg";

function Slogan(props) {
  return (
    <section className="text-4xl my-14 font-extrabold text-white md:grid md:grid-cols-3 md:items-center md:text-5xl">
      <div className='text-center md:col-span-1 md:col-start-2'>
        <div>
          Earn <span className="text-blue-700">More</span>
        </div>
        <p>Pay Less</p>
        <button className="btn-primary md:py-4 md:px-10 text-3xl">
          Start
        </button>
      </div>

      <div className="flex mt-[50px] justify-center">
        <img src={Card} alt="Card" />
      </div>
    </section>
  );
}

export default Slogan;
