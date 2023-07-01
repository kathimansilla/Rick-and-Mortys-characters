import '../styles/layout/Header.scss';

const Filter = () => {
    const handleInput = (ev) => {

    };

    const handleOnSubmit = (ev) => {
        ev.prevent.default();
    };
    return (
        <form onSubmit={handleOnSubmit} className='header__filter'>
            <label htmlFor="filter" className='header__filter--label'>Nobody belongs anywhere, nobody exists on purpose, everybody's going to die. <br /> Come filter your character</label>
            <input className='header__filter--input' type="text" id='filter' name='filter'
            onInput={handleInput}/>
        </form>
    );
};

export default Filter;