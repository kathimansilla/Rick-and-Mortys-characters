import '../styles/layout/Header.scss';

const Filters = ( {filteredByName, searchByName, filteredBySpecie, searchBySpecie } ) => {
    const handleInputName = (ev) => {
        filteredByName(ev.target.value);
    };

    const handleChangeSpecie = (ev) => {
        filteredBySpecie(ev.target.value);
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <form onSubmit={handleOnSubmit} className='header__filter'>
            <input className='header__filter--input' type="text" id='filterName' name='filterName' onInput={handleInputName} value={searchByName} placeholder='Buscar por nombre'
            />

            <select name='filterSpecie' id='filterSpecie' className='header__filter--select' onChange={handleChangeSpecie} value={searchBySpecie} >
                <option value="" disabled>Seleccione una especie</option>
                <option value='Human'>Humano</option>
                <option value='Alien'>Alien</option>
                <option value="">Todas las especies</option>
            </select>
        </form>
    );
};

export default Filters;