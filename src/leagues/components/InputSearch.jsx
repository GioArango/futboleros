
export const InputSearch = ({ inputName, inputValue, onChange, onSearchSubmit }) => {
    return (
        <form className="container row position-relative my-3" onSubmit={ onSearchSubmit }>
            <div className="d-flex justify-content-center row">
                <input 
                    type="text" 
                    className="form-control w-50" 
                    placeholder="¿Cuál es el país de la liga?"
                    name={ inputName }
                    value={ inputValue }
                    onChange={ onChange }
                />
            </div>
            <div className="d-flex justify-content-center row">
                <button 
                    type="submit" 
                    className="btn btn-primary mt-2 mx-2 col-3"
                >
                    Buscar
                </button>              
            </div>
        </form>
    )
}
