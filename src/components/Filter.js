import '../styles/layout/Header.scss';

const Filter = ( {filteredByName, searchByName} ) => {
    const handleInputFilter = (ev) => {
        filteredByName(ev.target.value);
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
    };
    return (
        <form onSubmit={handleOnSubmit} className='header__filter'>
            <label htmlFor="filter" className='header__filter--label'></label>
            <input className='header__filter--input' type="text" id='filter' name='filter' onInput={handleInputFilter} value={searchByName} placeholder='Buscar por nombre'
            />
        </form>
    );
};

export default Filter;