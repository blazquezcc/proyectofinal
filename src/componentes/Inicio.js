import React from "react";
import logo from "../Imagenes/logo.png";
const Inicio = () => {
    return(
        <section class="section about-section gray-bg" id="about">
            <div class="container">
            <br/><br/>
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-text go-to">
                            <h3 class="dark-color">Sobre FreestyleTrains</h3>
                            <h6 class="theme-color lead">Esta página trata sobre el mundo del Freestyle.</h6>
                            <p>En ella encontraras tanto noticias sobre el mundo tanto del Freestyle como del rap y varios formatos de entreno que suelen usar profesionales como Easy Mode, Hard Mode, entre otros que se usan en la liga profesional FREESTYLE MASTER SERIES (FMS).</p>
                            <div class="row about-list">
                                <div class="col-md-6">
                                   
                                    <div class="media">
                                        <label>Desde</label>
                                        <p>2022</p>
                                    </div>
                                    <div class="media">
                                        <label>Residencia</label>
                                        <p>España</p>
                                    </div>
                                    <div class="media">
                                        <label>Dirreción</label>
                                        <p>Córdoba, España</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>E-mail</label>
                                        <p>blazquezccf9@gmail.com</p>
                                    </div>
                                    <div class="media">
                                        <label>Phone</label>
                                        <p>666666666</p>
                                    </div>
                                    <div class="media">
                                        <label>Comunidad Discord</label>
                                        <p>https://discord.gg/rH7rDG5Z</p>
                                    </div>
                                    <div class="media">
                                        <label>Autor</label>
                                        <p>Sergio Blázquez Nieto</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-avatar">
                            <img src={logo} width="500px" title="" alt=""/>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div class="counter">
                    <div class="row">
                        <br/>
                        <div class="col-6 col-lg-3">
                            
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="7" data-speed="7">+7</h6>
                                <p class="m-0px font-w-600">Modos</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="30" data-speed="30">+30</h6>
                                <p class="m-0px font-w-600">Bases de todo tipo</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="1000" data-speed="1000">+1000</h6>
                                <p class="m-0px font-w-600">Palabras </p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="190" data-speed="190">Siempre</h6>
                                <p class="m-0px font-w-600">Las noticias más actuales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Inicio;