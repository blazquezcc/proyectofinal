import React from "react";
import ascensoFmsEspana from "../Imagenes/ascenso-fms-espana.jpg";
import fmsInterJornada2 from "../Imagenes/fms-inter-jornada2.jpg";
import fmsPeruJ5Cancelada from "../Imagenes/fms-peru-j5-cancelada.jpg";
import participantesLigaVenom from "../Imagenes/participantes-liga-venom.jpg";
const Noticias = () => {
    return (
        <div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={fmsPeruJ5Cancelada} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Se cancela la jornada 5 de FMS Perú 2022</h5>
                            <p class="card-text">Finalmente tras una previa de 2 horas, han anunciado que no se puede disputar la jornada por motivos ajenos. Aquí te dejamos el comunicado oficial.</p>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Saber más.
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Estamos trabajando para poder solucionarlo, las autoridades nos solicitan posponer el evento al martes 7 de junio a las 7PM (Hora Local). Pedimos disculpas a todas la personas afectadas y sobretodo las personas que acudieron presencialmente y que estaban esperando para acceder al reciento ante la negativa de las autoridades y a los miles que se mantenían esperando conectados para ver la transmisión.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="card-text"><small class="text-muted"> 4 de junio de 2022</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={participantesLigaVenom} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Estos son los 16 participantes de la Final Internacional de Liga Venom 2022</h5>
                            <p class="card-text">Ya conocemos a los 16 participantes que se enfrentarán este sábado 4 de junio de 2022 en la Final Internacional de Liga Venom 2022.</p>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Saber más.
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        LOBO ESTEPARIO 🇲🇽, ZTICMA 🇲🇽, MAJESTIC 🇲🇽, MAQUIAVÉLICO 🇲🇽, LEWIN 🇲🇽, SWEET PAIN 🇪🇸, SARA SOCAS 🇪🇸, ZASKO MASTER 🇪🇸, MARITHEA 🇨🇴, LUMIERE 🇨🇴, BOSS 🇺🇸, GODIE 🇺🇸, EL MENOR 🇨🇱, CACHA 🇦🇷, PIERO PISTAS 🇵🇪, RVS 🇨🇷
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="card-text"><small class="text-muted">3 de junio de 2022</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={fmsInterJornada2} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Horario y dónde ver la jornada 2 de FMS Internacional 2022</h5>
                            <p class="card-text">Tras dos semanas de espera ya tenemos aquí la segunda jornada y última que veremos este año 2022 de FMS Internacional.</p>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Saber más.
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        Horario 16:00h 🇬🇹 🇨🇷 17:00h 🇲🇽 🇪🇨 🇵🇪 🇨🇴 🇵🇦 18:00h 🇨🇱 🇺🇸 🇻🇪 🇩🇴 🇧🇴 🇨🇺 🇵🇷 19:00h 🇦🇷 🇺🇾 🇵🇾 00:00h 🇪🇸
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="card-text"><small class="text-muted">25 de mayo de 2022</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={ascensoFmsEspana} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Así está el ascenso a FMS España tras la Regional de Red Bull Madrid 2022</h5>
                            <p class="card-text">Mnak consiguió la victoria este pasado sábado en la Semifinal Regional de Red Bull Batalla Madrid tras vencer a Botta en la final.</p>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Saber más.
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        1	JESÚS LC	60.500 -2	NACHO LCM	44.100 -3	VIVI	40.950 -4	MOUNTS	38.800 -5	LE33	26.150 --6	MARIO VI	26.100 -7	COLETIYAS	23.200 -8	BOTTA	22.400 -9	JDR	21.250 -10	MICHU	19.950
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="card-text"><small class="text-muted">10 de mayo de 2022</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Noticias;