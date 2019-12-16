import React from "react";

const Menu = () => {
  return (
    <main className="margin-top-8">
      <div className="menu-headline">
        <h2>Lunch & Dinner</h2>
      </div>
      <aside className="side-navbar">
        <ul className="side-navbar__items">
          <li className="side-navbar__item">
            <a href="#starters">
              <div>starters</div>
            </a>
          </li>
          <li className="side-navbar__item">
            <a href="#main-dishes">
              <div>main dishes</div>
            </a>
          </li>
          <li className="side-navbar__item">
            <a href="#desserts">
              <div>desserts</div>
            </a>
          </li>
          <li className="side-navbar__item">
            <a href="#group-menu">
              <div>group menu</div>
            </a>
          </li>
        </ul>
      </aside>
      <section id="starters" className="starters menu-section">
        <div className="headline">
          <div className="headline__bg starters__bg">
            <div className="bg--overlay"></div>
          </div>
          <div className="headline__text">
            <h2>Starters</h2>
          </div>
        </div>
        <div className="menu__list menu--short">
          <ul className="menu">
            <li>
              <p className="menu--item">Cognac based langoustine soup</p>
              <p className="menu--price">2600kr</p>
              <hr />
            </li>
            <li>
              <p className="menu--item">Fresh salad</p>
              <p className="menu--describtion">
                With roasted cashew nuts and olives.
              </p>
              <p className="menu--price">1950kr</p>
              <hr />
            </li>
            <li>
              <p className="menu--item">Soup of the day</p>
              <p className="menu--describtion">Ask the waiter</p>
              <p className="menu--price">1450kr</p>
              <hr />
            </li>
          </ul>
        </div>
      </section>
      <section id="main-dishes" className="main-dishes menu-section">
        <div className="headline">
          <div className="headline__bg main-dishes__bg">
            <div className="bg--overlay"></div>
          </div>
          <div className="headline__text">
            {" "}
            <h2>Main dishes</h2>
          </div>
        </div>
        <div className="menu__list">
          <ul className="menu">
            <li>
              <p className="menu--item">Pan fried local charr</p>
              <p className="menu--describtion">
                With parsley root purée, fried vegetables and lemongrass sauce.
              </p>
              <p className="menu--price">3.600kr</p>
              <hr />
            </li>
            <li>
              <p className="menu--item">Gígur beef burger</p>
              <p className="menu--describtion">
                With onion jam, bacon, and cheese served with french fries and
                cocktail sauce.
              </p>
              <p className="menu--price">3000kr</p>
              <hr />
            </li>
            <li>
              <p className="menu--item">Slow cooked lamb shank </p>
              <p className="menu--describtion">
                With fried root vegetables, baked potato and lamb glaze.
              </p>
              <p className="menu--price">3600kr</p>
              <hr />
            </li>
            <li>
              <p className="menu--item">Chicken breast</p>
              <p className="menu--describtion">
                With baked potato, fresh salad, demi glaze and sour cream
              </p>
              <p className="menu--price">3000kr</p>
              <hr />
            </li>
            <li>
              <p className="menu--item">Fried rice noodles</p>
              <p className="menu--describtion">
                With soya, egg and vegetables, add chicken or shrimps for ISK
                600
              </p>
              <p className="menu--price">1.900kr / 2.500kr</p>
              <hr />
            </li>
          </ul>
        </div>
      </section>
      <section id="desserts" className="desserts menu-section">
        <div className="headline">
          <div className="headline__bg desserts__bg">
            <div className="bg--overlay"></div>
          </div>
          <div className="headline__text">
            {" "}
            <h2>Desserts</h2>
          </div>
        </div>
        <div className="menu__list menu--short">
          <ul className="menu">
            <li>
              <p className="menu--item">Vanilla skyr</p>
              <p className="menu--describtion">
                with berry sauce, crumble and berries.
              </p>
              <p className="menu--price">1400kr</p>
              <hr />
            </li>
            <li>
              <p className="menu--item">Warm chocolate brownie</p>
              <p className="menu--describtion">
                With vanilla ice cream and berry sauce.
              </p>
              <p className="menu--price">1500kr</p>
              <hr />
            </li>
            <li>
              <p className="menu--item">Ice cream trio from Sudurfoss</p>
              <p className="menu--describtion">
                With chocolate sauce and berries.
              </p>
              <p className="menu--price">1200kr</p>
              <hr />
            </li>
          </ul>
        </div>
      </section>
      <section id="group-menu" className="group menu-section">
        <div className="headline">
          <div className="headline__bg group__bg">
            <div className="bg--overlay"></div>
          </div>
          <div className="headline__text">
            {" "}
            <h2>Group Menu</h2>
          </div>
        </div>
        <div className="menu__list">
          <ul className="menu__items">
            <li className="menu__item group__menu">
              <h2 className="menu__item-headline">Menu 1</h2>
              <ul className="menu__item-content">
                <li>
                  <p>
                    Tomato – paprika soup with basil pesto and parmigiano cheese{" "}
                  </p>
                </li>
                <li>
                  <p>
                    Roasted lamb with swede puree, root vegetables and lamb –
                    berry demi glace
                  </p>
                </li>
                <li>
                  <p>Local ice cream variation </p>
                </li>
              </ul>
              <hr />
            </li>
            <li className="menu__item group__menu">
              <h2 className="menu__item-headline">Menu 2</h2>
              <ul className="menu__item-content">
                <li>
                  <p>Cauliflower-broccoli cream soup </p>
                </li>
                <li>
                  <p>
                    Local arctic char with parsnip puree, grilled vegetables and
                    lemongrass sauce{" "}
                  </p>
                </li>
                <li>
                  <p>Chocolate cake with wiped cream </p>
                </li>
              </ul>
              <hr />
            </li>
            <li className="menu__item group__menu">
              <h2 className="menu__item-headline">Menu 3</h2>
              <ul className="menu__item-content">
                <li>
                  <p>Wild mushroom cream soup with parmigiano cheese </p>
                </li>
                <li>
                  <p>
                    Grilled chicken breast with baked potatoes, sun dried
                    tomatoes and creamy rosemary sauce{" "}
                  </p>
                </li>
                <li>
                  <p>Skyr cake with raspberry sauce </p>
                </li>
              </ul>
              <hr />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Menu;
