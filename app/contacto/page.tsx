import "./contactPage.css"

export const metadata = {
    title: "Contacto",
}

function contactoPage(){
    return(
        <div className="form-div">
            <h1>Déjame un mensaje</h1>
            <form className="form">
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Email" required />
                <input 
                    type="tel" 
                    placeholder="Teléfono" 
                    pattern="^\+?[0-9]{1,10}$" 
                    maxLength={10} 
                    title="Debe ser un número de 10 dígitos" 
                    required
                />
                <textarea rows={5} placeholder="Si tienes algo que decirme..."></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default contactoPage;