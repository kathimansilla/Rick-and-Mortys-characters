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
            <label htmlFor="filter" className='header__filter--label'>Nobody belongs anywhere, nobody exists on purpose, everybody's going to die. <br /> Come filter your character</label>
            <input className='header__filter--input' type="text" id='filter' name='filter' onInput={handleInputFilter} value={searchByName}
            />
        </form>
    );
};

export default Filter;