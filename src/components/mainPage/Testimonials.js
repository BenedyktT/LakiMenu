import React from "react";
import { ReactComponent as ArrowLeft } from "../../images/logos/svg/glide-arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../images/logos/svg/glide-arrow-right.svg";
import Girl from "../../images/dziewczyna.jpg";
import Man from "../../images/testimonial.png";
import Man2 from "../../images/chlop2.jpg";
import Man3 from "../../images/chlop.jpg";
import Glide from "@glidejs/glide";

window.addEventListener("load", e => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader__fade");
});

const Testimonials = () => {
  return (
    <div className=""></div>
    /* <section className="section testimonials">
      <div className="section__bg testimonials__bg"></div>
      <div className="testimonials__text">
        <h1 className="section__headline">Testimonials</h1>
      </div>
      <div className="glide-testimonials">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div className="feed">
                <div className="feed__author">
                  <img
                    src={Girl}
                    width=""
                    height="50"
                    alt="girl"
                    className="feed__author--img"
                  />
                  <div className="feed__author--name">
                    <p>Margaret</p>
                  </div>
                  <div className="feed__author--location">
                    <p>San Francisco</p>
                  </div>
                </div>
                <div className="feed__review">
                  <div className="feed__review--stars">
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                  </div>
                  <div className="feed__review--title">
                    <h3>Modern Family-Run Hotel in beautiful Location</h3>
                  </div>
                  <div className="feed__review--body">
                    <p>
                      Hotel Laki is a modern hotel in a beautiful area of
                      Iceland. The rooms are well appointed and a nice size.
                      Good beds and linens. Nice bathrooms. Good breakfast. Some
                      rooms face the interior courtyard and others have
                      wonderful views of the lake - definitely spring for the
                      view. The restaurant is very good - the chef delivers high
                      quality regional specialties.
                    </p>
                  </div>
                  <div className="feed__review--date">
                    <p>August 2019</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="feed">
                <div className="feed__author">
                  <img
                    src={Man}
                    width=""
                    height="50"
                    alt="girl"
                    className="feed__author--img"
                  />
                  <div className="feed__author--name">
                    <p>Mél anie</p>
                  </div>
                  <div className="feed__author--location">
                    <p>France</p>
                  </div>
                </div>
                <div className="feed__review">
                  <div className="feed__review--stars">
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                  </div>
                  <div className="feed__review--title">
                    <h3>Perfect welcome</h3>
                  </div>
                  <div className="feed__review--body">
                    <p>
                      Perfect welcome all smiles when we arrived at 21:30 and
                      the restaurant closed at 22h. The restaurant is very
                      modern and the environment calm and nature. The food is
                      excellent and the prices quite reasonable compared to the
                      usual rates and given the quality of this one. Fine
                      restaurant with local food. We highly recommend.
                    </p>
                  </div>
                  <div className="feed__review--date">
                    <p>August 2019</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="feed">
                <div className="feed__author">
                  <img
                    src={Man2}
                    width=""
                    height="50"
                    alt=""
                    className="feed__author--img"
                  />
                  <div className="feed__author--name">
                    <p>Pommybri</p>
                  </div>
                  <div className="feed__author--location">
                    <p>Brisbane, Australia</p>
                  </div>
                </div>
                <div className="feed__review">
                  <div className="feed__review--stars">
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                  </div>
                  <div className="feed__review--title">
                    <h3>Great find!</h3>
                  </div>
                  <div className="feed__review--body">
                    <p>
                      Very friendly helpful staff and fish meals in the
                      restaurant to die for (and not too pricey). My partner
                      rated the seafood bisque (with shrimp and langoustine) as
                      the best she’s ever eaten. Great breakfast.{" "}
                    </p>
                  </div>
                  <div className="feed__review--date">
                    <p>February 2018</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="feed">
                <div className="feed__author">
                  <img
                    src={Man3}
                    width=""
                    height="50"
                    alt="men"
                    className="feed__author--img"
                  />
                  <div className="feed__author--name">
                    <p>dianamar1</p>
                  </div>
                  <div className="feed__author--location">
                    <p>San Juan, Puerto Rico</p>
                  </div>
                </div>
                <div className="feed__review">
                  <div className="feed__review--stars">
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                    <span>&#9733</span>
                  </div>
                  <div className="feed__review--title">
                    <h3>Beautiful</h3>
                  </div>
                  <div className="feed__review--body">
                    <p>
                      The restaurant has beautiful views (if it’s a clear day)
                      and the commons areas at the bar and near are very well
                      decorated. It’s give you this relax feeling that make you
                      want to sit and read a book. Staff is very helpful and
                      welcoming also. I will stay here again.
                    </p>
                  </div>
                  <div className="feed__review--date">
                    <p>March 2019</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <ArrowLeft />
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="menu__img"></div>
    </section> */
  );
};

export default Testimonials;
