import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return(
    <section>
        <div>
            {clients.map((client) => (
                <div>
                    <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>
    </section>
  )
};

export default Clients;
