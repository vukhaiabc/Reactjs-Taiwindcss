import React from "react";

import { FaUserAlt } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
import { useSpring, animated} from "react-spring";
function Content() {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  const card = useSpring({ cards: 9999, from: { cards: 0 } });
  return (
    <section>
      <div className="bg-gradient-to-b from-blue-600 to-cyan-300 rounded-lg w-[240px] mx-auto py-8">
        <div className="flex items-center justify-center gap-7">
          <FaUserAlt size={"24px"} />
          <div>
            <div className="text-2xl font-bold">
                <animated.div>
                    {customer.customers.to((val) => Math.floor(val) )}
                </animated.div>
            </div>
            <span className="text-13 font-bold">Customers</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-7 mt-6">
          <FaRegIdCard size={"24px"} />
          <div>
            <div className="text-2xl font-bold">
                
                <animated.div>
                    {card.cards.to(val => Math.floor(val))}
                </animated.div>
              
            </div>
            <span className="text-13 font-bold">Cards Issued</span>
          </div>
        </div>
      </div>
      <div className="text-14 w-[100%] mt-[90px] font-semibold">
        <div className="check-content">
          <img src={checkIconMobile} alt="checkpoint" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="checkpoint" />
          <p>no external fees</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="checkpoint" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
