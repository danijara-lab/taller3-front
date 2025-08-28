export default function Vacantes() {

    return (
        <form className="row g-3">
            <div className="col-md-4">
                <label htmlFor="validationDefault01" className="form-label">Nombre de Vacante</label>
                <input type="text" className="form-control" id="validationDefault01" value="Mark" required> </input>
            </div>
            <div className="mb-3">
                <label htmlFor="validationTextarea" className="form-label">Descripción de Vacante</label>
                <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                <div className="invalid-feedback">
                    Please enter a message in the textarea.
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationDefault03" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="validationDefault03" required> </input>
                </div>
            </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Crear vacante</button>
                </div>
        </form>
    );
}

