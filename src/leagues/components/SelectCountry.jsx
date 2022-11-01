
export const SelectCountry = ({ inputName, inputValue, onChange, countries, onSearchSubmit }) => {
    
    return (
        <form className="d-flex justify-content-center row w-50" onSubmit={onSearchSubmit}>
            <div className="row">
                <div className="input-group">
                    <div className="input-group input-group-lg mb-3">
                        <select className="form-select" aria-label="Default select example" name={inputName} defaultValue={inputValue} onChange={onChange}>
                            <option defaultValue=''>Select a country</option>
                            {
                                countries.map(country => (
                                    <option key={country.name} value={country.name}>{country.name}</option>
                                ))
                            }
                        </select>
                        <button
                            type="submit"
                            className="input-group-text"
                        >
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>

    )
}
