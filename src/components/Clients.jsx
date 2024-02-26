import React from "react";
import { clients } from "../constants";
import style from "../style";

const Clients = () => {
  return(
    <section className={`${style.flexCenter} my-4`}>
        <div className={`${style.flexCenter} flex-wrap w-full`}>
            {clients.map((client) => (
                <div key={client.id} className={`flex-1 ${style.flexCenter} sm:min-2-[192px] min-w-[120px] m-5`}>
                    <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>
    </section>
  )
};

export default Clients;
