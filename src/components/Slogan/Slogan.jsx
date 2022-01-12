import React from "react";
import Card from "../../assets/desktop/isocard.svg";

function Slogan(props) {
  return (
    <section className="text-4xl my-14 font-extrabold text-white">
      <div className='text-center'>
        <div>
          Earn <span className="text-blue-700">More</span>
        </div>
        <p>Pay Less</p>
        <button className="btn-primary">
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
