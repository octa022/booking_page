import React from 'react';
import image from './assets/images/img.jpg'
import './assets/styles/css/home.css';

function App() {
  return (
    <div className="App">

      {/* Header navbar*/}
      <header className="nav">
        <nav>
          <ul className="links">
            <li>
              <a href="" className="logo-upate">
                <img src="https://storage.googleapis.com/upate-public/logos/logo-final-1.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fas fa-plane-departure"></i>
                Vuelos
              </a>
            </li>
            <li>
              <a href="">
                <i className="fas fa-box"></i>
                Paquetes
              </a>
            </li>
            <li>
              <a href="">
                <i className="fas fa-bed"></i>
                Hoteles
              </a>
            </li>
            <li>
              <a href="">
                <i className="fas fa-bullhorn"></i>
                Promos
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-blogger-b"></i>
                Blog
              </a>
            </li>
          </ul>

          <ul className="info">
            <li>
              <a href="">
                <i className="fa fa-user"></i>
                0800 345 5100
              </a>
            </li>
            <li>
              <a href="">
                Contactenos
              </a>
            </li>
            <li>
              <a href="">
                Ayuda
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* End - Header navbar*/}


      <div className="container">

          {/* Section 1 */}
          <section>
            <div className="principal">

              <img src={image} alt="" />

              <article>
                <div className="description">
                  <div className="info">
                    <h1>Hotel Calella Palace Family</h1>
                    <p>3651 NW 25th St, Miami, Florida, Estados Unidos</p>
                    <span className="icons">
                      <i className="fas fa-box"></i>
                      <i className="fas fa-box"></i>
                      <i className="fas fa-box"></i>
                      <i className="fas fa-box"></i>
                    </span>
                  </div>

                    <span className="added">
                      <span className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <a href="" className="see-map">
                        <i className="fa fa-map-marker-alt"></i>
                        Ver mapa
                      </a>
                    </span>
                  </div>

                  <div className="reservation">
                    <div className="data">
                      <p> <span>Fechas:</span> 1 sep 2020 - 4 sep 2020</p>
                      <p> <span>Habitaciones: </span> 1 </p>
                      <p> <span>Personas:</span> 2</p>
                    </div>

                    <div className="total">
                      <p>
                        <strong>ARS 29.145,93</strong> <small>Total final</small>
                      </p>
                      <p>
                        <small>Impuestos y tasas incluidos</small>
                      </p>
                      <button className="btn-upate">ver habitaciones</button>
                    </div>
                  </div>

                  <div className="horary">
                    <h2 className="title">Horarios</h2>
                    <ul>
                      <li> check in <strong>3:00 PM</strong></li>
                      <li className="separator"></li>
                      <li> check out <strong>12:00 AM</strong></li>
                    </ul>
                  </div>

              </article>
            </div>
          </section>
          {/* End - Section 1 */}

          {/* Section 2 */}
          <section>
            <div className="learn_more">
              <h2 className="title">Conoce más</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam architecto earum voluptatibus magnam ea enim ad, maxime a amet temporibus dignissimos reiciendis praesentium fugit, quia, id. Labore totam quos obcaecati.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis quo, officiis enim laborum quas in ab odit, deserunt, explicabo obcaecati ullam hic quae architecto assumenda sunt neque illo voluptates.</p>
            </div>
          </section>
          {/* End - Section 2 */}

          {/* Section 3 */}
          <section>
            <div className="closeness">

              <h2 className="title">
                Cercanía con el hotel
                <a href="" className="see-map">
                  <i className="fa fa-map-marker-alt"></i>
                  Ver mapa
                </a>
              </h2>

              <p>
                <strong>Puntos de interés</strong>

                <span className="content"> Miami Jai Alai, Miami, Florida, Estados Unidos</span>

                <span className="distance"> 1.0 km</span>
              </p>

              <p>
                <strong>Estaciones de Tren</strong>

                <span className="content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, in distinctio porro laudantium aliquid corporis tempora ratione at illo similique atque, minima maxime voluptates sed, voluptatum natus. A, neque, architecto?</span>

                <span className="distance"> 1.0 km</span>
              </p>

            </div>
          </section>
          {/* End - Section 3 */}

          {/* Section 4 */}
          <section>
            <div className="services">
              <h2 className="title"> Servicios</h2>

              <ul>
                <li>
                  <i className="fa fa-wifi"></i>
                  Wi-Fi Gratis
                </li>
                <li>
                  <i className="fa fa-utensils"></i>
                  Restaurantes
                </li>
                <li>
                  <i className="fa fa-car"></i>
                  Aparcamiento
                </li>
                <li>
                  <i className="fas fa-swimmer"></i>
                  Piscina
                </li>
                <li>
                  <i className="fas fa-fan"></i>
                  Aire Acondicionado
                </li>
                <li>
                  <i className="fas fa-dumbbell"></i>
                  Gimnacio
                </li>
              </ul>

            </div>
          </section>
          {/* End - Section 4 */}

          {/* Section 5 */}
          <section>
            <div className="instructions">
              <h2 className="title">Instrucciones para el check-in</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus rem iste eveniet placeat illum nostrum iure labore sit nisi odit dicta incidunt, eaque maiores, sequi perferendis consectetur? Voluptatum, incidunt, autem.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis atque delectus officiis tempore consequatur saepe cumque recusandae sapiente voluptatem magnam? Magni eius tempora, impedit recusandae eum illo a harum alias.</p>
            </div>
          </section>
          {/* End - Section 5 */}

          {/* Section 6 */}
          <section>
            <div className="available">
              <h2 className="title">Habitaciones disponibles</h2>

              <table>
                <thead>
                  <tr>
                    <th>Tipo de habitación</th>
                    <th>Opciones</th>
                    <th>Precio de noche</th>
                    <th>Elegir</th>
                    <th>Detalle de reserva</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="type">
                      <img src={image} alt="" />
                      <span className="content">
                        <h3>habitación doble superior</h3>
                        <ul>
                          <li>
                            <i className="fa fa-wifi"></i>
                            Wi-Fi Gratis
                          </li>
                          <li>
                            <i className="fa fa-utensils"></i>
                            Restaurantes
                          </li>
                          <li>
                            <i className="fa fa-car"></i>
                            Aparcamiento
                          </li>
                        </ul>
                        <a href="" className="link"> Ver detalle de la habitacion</a>
                      </span>
                    </td>
                      <td className="options">
                        <ul className="list-style">
                          <li>Desayuno Gratis</li>
                          <li>Cancelacion gratis hasta el 20/10/2020 a las 23:59</li>
                        </ul>
                      </td>
                      <td className="price">
                        <span className="title-r">Precio por noche</span> <span>ars <strong>5.829</strong></span>
                      </td>
                      <td className="choose">
                        <input type="radio" id="" name="" value="" />
                      </td>
                      <td className="detail">
                        <span>
                          Precio por <br />
                          5 noches, 2 personas
                        </span>

                        <span className="price">
                          ars <strong>29.145,93</strong>
                          <small>Impuestos y tasas incluidos</small>
                        </span>
                        <button className="btn-upate">Reservar ahora</button>
                      </td>
                  </tr>

                </tbody>
              </table>

            </div>
          </section>
          {/* End - Section 6 */}

          {/* Footer */}
          <footer>
            <div>
              <span className="logo">
                <img src="https://storage.googleapis.com/upate-public/logos/logo-final-1.png" alt="" />
              </span>
              <span className="social-networks">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-blogger"></i>
              </span>
              <span>
                <small>Teléfono: 0800 345 5100</small>
                <small>Razón social: UPATE SAU</small>
              </span>
              <span>
                <small>Horario de atención: Lunes a viernes de 9 a 19hs.</small>
                <small>Legajo: 17.406 Cuit:30-71580308-5</small>
              </span>
              <span>
                <small>Honduras 552 1er piso-CABA</small>
              </span>
            </div>
              <div>
                <span className="links">
                  <a href="">
                      Ayuda
                  </a>
                  <a href="">
                      Políticas de cancelación
                  </a>
                  <a href="">
                      Políticas de privacidad
                  </a>
                  <a href="">
                      ¿Quiénes somos?
                  </a>
                </span>
                <span>
                  <small>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quisquam modi vel necessitatibus repellat! Quo consectetur aliquam nobis, nisi quisquam at repudiandae provident dignissimos illo ut ea suscipit dolorem quos!
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sint rem voluptatem dicta eligendi aspernatur officia numquam voluptate quis quisquam consequuntur illo praesentium totam repellendus asperiores, sequi, placeat minus impedit!
                  </small>
                </span>
              </div>
              <div>
                <span>
                  <img src="https://images.vexels.com/media/users/3/142693/isolated/preview/475e679a1e2d54a131b3d0c58a1743be-isotipo-redondo-de-la-tecnolog--a-t-by-vexels.png" alt="" />
                </span>
                <span>
                  <img src="https://images.vexels.com/media/users/3/142700/isolated/preview/97ea77f170e2019fa66d739e2e920b00-logo-de-curvas-cuadradas-by-vexels.png" alt="" />
                </span>
                <span>
                  <img src="https://images.vexels.com/media/users/3/142659/isolated/preview/ea1b353588f8f2e77ed95c884f12515b-curvas-rect--ngulos-icono-by-vexels.png" alt="" />
                </span>
              </div>
          </footer>
          {/* End - Footer */}

      </div>
      
    </div>
  );
}

export default App;
