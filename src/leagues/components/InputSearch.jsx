
export const InputSearch = ({ inputName, inputValue, onChange, onSearchSubmit }) => {
    return (
        <form className="d-flex justify-content-center row w-50" onSubmit={onSearchSubmit}>
            <div className="row">
                <div className="input-group">
                    <div className="input-group input-group-lg mb-3">
                        <input
                            type="text"
                            className="form-control text-center rounded-start border border-end-0"
                            placeholder="Type a league's country"
                            name={inputName}
                            value={inputValue}
                            onChange={onChange}
                        />
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
