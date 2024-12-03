import "./projectPage.css"

export const metadata = {
    title: "Mis proyectos",
}

function proyectosPage(){
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="titulo-de-proyectos">Mi Proyecto</h2>
            <div className="contenedor-de-proyectos">
                <div className="contenedor-de-proyectos tarjeta-de-proyectos">
                    <h3 className="titulo-de-proyectos">App de recetas saludables y personalizadas</h3>
                    <p className="detalle-de-proyectos">
                        Una app enfocada en recetas saludables que se adaptan a los objetivos de salud de los usuarios, como perder peso, ganar músculo o mantener una dieta equilibrada.
                    </p>
                    <a href="https://github.com/LavryDam/portfolio-recipes-project.git" target="_blank" className="enlace-de-proyecto">Descarga</a>
                    <h3 className="titulo-de-proyectos">Rastreador de Gastos</h3>
                    <p className="detalle-de-proyectos">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                        ratione vel inventore labore commodi modi quos culpa aut saepe!
                        Alias!
                    </p>
                    <a href="#" target="_blank" className="enlace-de-proyecto">Check it Out</a>
                </div>
            </div>
        </section>
    );
}

export default proyectosPage;