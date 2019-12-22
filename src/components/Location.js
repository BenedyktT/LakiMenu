import React from "react";

import MapComponent from "./MapComponent";

const Location = () => {
  
  return (
    <section className="about__subpage" data-aos="zoom-in">
      <article className="article-text">
        <h1 className="text text__headline">Hours and location</h1>
        <p className="text text__address">
          Efri-Vik <br />
          880 Kirkjubæjarklaustur <br />
          <a href="tel:+354-412-4600">+354 412 4600</a>
        </p>
        <p className="text text__open">
          Open <br /> 12a.m. - 22p.m. <br />
          Everyday
        </p>
        <hr />
        <p>
          Kirkjubæjarklaustur's geographical location makes it better known than
          other villages its size. It is the only place between Vík and Höfn
          which offers services, which includes a fuel station, a bank, a post
          office and a supermarket.
          <br /> Nearby tourist attractions include the Laki craters, the Eldgjá
          and Skaftafell, all in Vatnajökull National Park. An attraction close
          to the village is Kirkjugólf ("Church floor"), a natural pavement of
          basalt. <br /> These are basalt columns in the earth, but only the
          tops can be seen, and as the name suggests, they have the appearance
          of a paved church floor. This lava formation has similar origins to
          the Giant's Causeway in Ireland. All these attractions contribute to
          Kirkjubæjarklaustur being a popular stopping point for tourists.
        </p>
      </article>
      <hr />
      <div>
        <MapComponent />
      </div>
    </section>
  );
};

export default Location;
