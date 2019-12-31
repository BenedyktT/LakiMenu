import React from "react";
import Collins from "../images/cocktail/collins.jpg";
import Oldfashioned from "../images/cocktail/oldfashioned.jpg";
import WhiteRussian from "../images/cocktail/whiterussian.jpg";
import Espresso from "../images/cocktail/espresso.jpg";
import Margarita from "../images/cocktail/margarita.jpg";
import BlueLagoon from "../images/cocktail/bluelagoon.jpg";
import Gull from "../images/cocktail/gull.png";
import Boli from "../images/cocktail/boli.png";
import Garun from "../images/cocktail/beers/garun.png";
import Ulfur from "../images/cocktail/beers/ulfur.png";
import Hrefna from "../images/cocktail/beers/hrefna.png";
import Myrkvi from "../images/cocktail/beers/myrkvi.png";
import Snorri from "../images/cocktail/beers/snorri.png";
import Leifur from "../images/cocktail/beers/leifur.png";
import UlfurUlfur from "../images/cocktail/beers/ulfurulfur.png";

const Cocktails = () => {
  return (
    <main>
      <section className="section__cocktails menu-section">
        <div className="headline">
          <div className="headline__bg cocktails__bg">
            <div className="bg--overlay"></div>
          </div>
          <div className="headline__text">
            {" "}
            <h2>Cocktails</h2>
          </div>
        </div>
        <div className="cocktail-menu">
          <ul className="cocktail-menu__items">
            <li className="cocktail-menu__item">
              <div className="cocktail-menu__item--wrapper">
                <div className="cocktail-menu__item--img">
                  {" "}
                  <img src={Collins} alt="cocktail tom collins" />
                </div>
                <div className="cocktail-menu__item--name">
                  <h2>Tom Collins</h2>
                </div>
                <div className="cocktail-menu__item--desc">
                  <p>
                    The Tom Collins is a Collins cocktail made from gin, lemon
                    juice, sugar, and carbonated water. This "gin and sparkling
                    lemonade" drink is typically served in a Collins glass over
                    ice.
                  </p>
                </div>
              </div>
            </li>
            <li className="cocktail-menu__item">
              <div className="cocktail-menu__item--wrapper">
                <div className="cocktail-menu__item--img">
                  {" "}
                  <img src={Oldfashioned} alt="cocktail oldfashioned" />
                </div>
                <div className="cocktail-menu__item--name">
                  <h2>Old Fashioned</h2>
                </div>
                <div className="cocktail-menu__item--desc">
                  <p>
                    The Old Fashioned is a cocktail made by muddling sugar with
                    bitters, then adding alcohol, popularly whiskey but
                    sometimes brandy and finally a twist of citrus rind. It is
                    traditionally served in a short, round, tumbler-like glass,
                    which is called an Old Fashioned glass
                  </p>
                </div>
              </div>
            </li>
            <li className="cocktail-menu__item">
              <div className="cocktail-menu__item--wrapper">
                <div className="cocktail-menu__item--img">
                  {" "}
                  <img src={WhiteRussian} alt="cocktail white russian" />
                </div>
                <div className="cocktail-menu__item--name">
                  <h2>White Russian</h2>
                </div>
                <div className="cocktail-menu__item--desc">
                  <p>
                    A White Russian is a cocktail made with vodka, coffee
                    liqueur and cream served with ice in an Old Fashioned glass.{" "}
                  </p>
                </div>
              </div>
            </li>
            <li className="cocktail-menu__item">
              <div className="cocktail-menu__item--wrapper">
                <div className="cocktail-menu__item--img">
                  {" "}
                  <img src={Espresso} alt="cocktail espresso" />
                </div>
                <div className="cocktail-menu__item--name">
                  <h2>Espresso Martini</h2>
                </div>
                <div className="cocktail-menu__item--desc">
                  <p>
                    Espresso Martini is a cold, coffee-flavored cocktail made
                    with vodka, espresso coffee, coffee liqueur, and sugar
                    syrup.
                  </p>
                </div>
              </div>
            </li>
            <li className="cocktail-menu__item">
              <div className="cocktail-menu__item--wrapper">
                <div className="cocktail-menu__item--img">
                  {" "}
                  <img src={Margarita} alt="cocktail margarita" />
                </div>
                <div className="cocktail-menu__item--name">
                  <h2>Margarita</h2>
                </div>
                <div className="cocktail-menu__item--desc">
                  <p>
                    A margarita is a cocktail consisting of tequila, orange
                    liqueur, and lime juice often served with salt on the rim of
                    the glass.
                  </p>
                </div>
              </div>
            </li>
            <li className="cocktail-menu__item">
              <div className="cocktail-menu__item--wrapper">
                <div className="cocktail-menu__item--img">
                  {" "}
                  <img src={BlueLagoon} alt="cocktail blue lagoon" />
                </div>
                <div className="cocktail-menu__item--name">
                  <h2>Blue Lagoon</h2>
                </div>
                <div className="cocktail-menu__item--desc">
                  <p>
                    Blue Lagoon is a popular summer cocktail featuring blue
                    Curaçao. It's typically garnished with an orange slice due
                    to the flavor of the Curaçao.{" "}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="section__beer menu-section">
        <div className="headline" id="headline__not-first">
          <div className="headline__bg beers__bg">
            <div className="bg--overlay"></div>
          </div>
          <div className="headline__text">
            {" "}
            <h2>Beers</h2>
          </div>
        </div>
        <div className="beer-container">
          <p>DRAFT</p>
          <ul className="draft">
            <li className="draft__item">
              <div className="draft__item--left">
                <div data-aos="fade-right" className="draft__item--img">
                  <img src={Gull} alt="beer gull icelandic" />
                </div>
                <div className="draft__item--title">
                  <h2>Gull</h2>
                </div>
              </div>
              <div className="draft__item--price">
                <div className="price-small">
                  <p>0.3l &bull; 900kr</p>
                </div>
                <div className="price-large">
                  <p>0.5l &bull; 1100kr</p>
                </div>
              </div>
              <div className="draft__item--desc">
                <article>
                  Gull is one of Iceland's best know brands and has been enjoyed
                  by Icelanders since March 1st 1989, when the 70 year beer
                  prohibition in Iceland was lifted. Gull is our pride. It's the
                  racehorse we entrust to lead the way for our ambitious line of
                  beers
                </article>
              </div>
            </li>
            <li className="draft__item">
              <div className="draft__item--left">
                <div data-aos="fade-right" className="draft__item--img">
                  <img src={Boli} alt="icelandic beer boli" />
                </div>
                <div className="draft__item--title">
                  <h2>Boli</h2>
                </div>
              </div>
              <div className="draft__item--price">
                <div className="price-small">
                  <p>0.3l &bull; 900kr</p>
                </div>
                <div className="price-large">
                  <p>0.5l &bull; 1100kr</p>
                </div>
              </div>
              <div className="draft__item--desc">
                <article>
                  Boli beer is the product of a unique effort that has been the
                  characteristik mark of The Egill Skallagrímsson Brewery for a
                  whole century. The production process is longer, the malt is
                  masked twice and fermantation is slower and last but not least
                  Icelandic barley is used.{" "}
                </article>
              </div>
            </li>
            <hr />
          </ul>
        </div>
        <p id="bottle__center">BOTTLE</p>
        <ul className="bottle">
          <li className="bottle__item">
            <div
              className="bottle__img-cont"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <img src={Garun} alt="icelandic beer garun" />
            </div>
            <div className="bottle__name">
              <h2>GARUN</h2>
            </div>
            <div className="bottle__price">
              <p>1200kr</p>
            </div>
            <div className="bottle__desc">
              <p>
                Unfiltered, slightly cloudy ale brewed with Icelandic barley and
                organic Icelandic thyme in honor of Snorri Sturluson, chieftain
                at Borg, the manor our brewery is named after. The pungent aroma
                of the thyme juxtaposes the fresh, fruity taste, giving Snorri a
                unique character.
              </p>
            </div>
          </li>
          <li className="bottle__item">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="bottle__img-cont"
            >
              <img src={Ulfur} alt="icelandic beer ulfur" />
            </div>
            <div className="bottle__name">
              <h2>ULFUR</h2>
            </div>
            <div className="bottle__price">
              <p>1200kr</p>
            </div>
            <div className="bottle__desc">
              <p>
                Úlfur, Icelandic for “wolf” and an Icelandic given name, is a
                west coast, American-style IPA. Úlfur is dry hopped with
                American hops that give off a bitter and fruity aroma and a
                taste of citrus fruit (particularly grapefruit) and a delightful
                crispness that entices one to take another sip.
              </p>
            </div>
          </li>
          <li className="bottle__item">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="bottle__img-cont"
            >
              <img src={UlfurUlfur} alt="icelandic beer ulfur ulfur" />
            </div>
            <div className="bottle__name">
              <h2>ULFUR ULFUR</h2>
            </div>
            <div className="bottle__price">
              <p>1200kr</p>
            </div>
            <div className="bottle__desc">
              <p>
                We cried wolf. Twice. And then we used American hops to make
                this wonderfully bitter, yet fruity DIPA. That’ll teach us.
              </p>
            </div>
          </li>
          <li className="bottle__item">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="bottle__img-cont"
            >
              <img src={Leifur} alt="beer from iceland leifur" />
            </div>
            <div className="bottle__name">
              <h2>LEIFUR</h2>
            </div>
            <div className="bottle__price">
              <p>1200kr</p>
            </div>
            <div className="bottle__desc">
              <p>
                Warm southern winds, carrying an aroma of citrus and crushed
                pepper, rustle the vast, rosy spreads of Arctic thyme and
                heather. Hoist the sails!
              </p>
            </div>
          </li>
          <li className="bottle__item">
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="bottle__img-cont"
            >
              <img src={Snorri} alt="beer snorri" />
            </div>
            <div className="bottle__name">
              <h2>SNORRI</h2>
            </div>
            <div className="bottle__price">
              <p>1200kr</p>
            </div>
            <div className="bottle__desc">
              <p>
                Snorri contains Icelandic barley and arctic thyme in honor of
                Snorri Sturluson, chieftain at Borg; the estate our brewery is
                named after.
              </p>
            </div>
          </li>
          <li className="bottle__item">
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="bottle__img-cont"
            >
              <img src={Myrkvi} alt="beer icelandic myrkvi" />
            </div>
            <div className="bottle__name">
              <h2>MYRKVI</h2>
            </div>
            <div className="bottle__price">
              <p>1200kr</p>
            </div>
            <div className="bottle__desc">
              <p>
                Myrkvi is an unfiltered full-bodied Porter Ale with a dark
                twist. It is seasoned with coffee from Huila in the southwest of
                Colombia, specially roasted by Reykjavík Roasters.
              </p>
            </div>
          </li>
          <li className="bottle__item">
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              className="bottle__img-cont"
            >
              <img src={Hrefna} alt="beer hrefna" />
            </div>
            <div className="bottle__name">
              <h2>HREFNA</h2>
            </div>
            <div className="bottle__price">
              <p>1200kr</p>
            </div>
            <div className="bottle__desc">
              <p>
                Hrefna is an Icelandic given name meaning female crow. A strong
                Belgian style ale brewed with Icelandic crowberries and matured
                on oak.
              </p>
            </div>
          </li>
          <li className="bottle__item">
            <div
              data-aos="fade-right"
              data-aos-delay="700"
              className="bottle__img-cont"
            >
              <img src={Garun} alt="beer garun" />
            </div>
            <div className="bottle__name">
              <h2>GARUN</h2>
            </div>
            <div className="bottle__price">
              <p>1200kr</p>
            </div>
            <div className="bottle__desc">
              <p>
                Unfiltered, slightly cloudy ale brewed with Icelandic barley and
                organic Icelandic thyme in honor of Snorri Sturluson, chieftain
                at Borg, the manor our brewery is named after. The pungent aroma
                of the thyme juxtaposes the fresh, fruity taste, giving Snorri a
                unique character.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="section__coffee menu-section">
        <div className="headline" id="headline__not-first">
          <div className="headline__bg coffee__bg">
            <div className="bg--overlay"></div>
          </div>
          <div className="headline__text">
            {" "}
            <h2>COFFEE</h2>
          </div>
        </div>
        <div className="coffees">
          <ul className="coffee__items">
            <li className="coffee__item">
              <p className="coffee__item--desc">Espresso</p>
              <p className="coffee__item--price">350ISK</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--desc">Espresso doppio</p>
              <p className="coffee__item--price">400ISK</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--desc">Americano</p>
              <p className="coffee__item--price">350ISK</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--desc">Latte</p>
              <p className="coffee__item--price">450ISK</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--desc">Cappuccino</p>
              <p className="coffee__item--price">450ISK</p>
            </li>
            <li className="coffee__item">
              <p className="coffee__item--desc">Irish coffee</p>
              <p className="coffee__item--price">800ISK</p>
            </li>
            <hr />
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Cocktails;
