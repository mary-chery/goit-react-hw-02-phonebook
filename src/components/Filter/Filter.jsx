import css from '../app.module.css';

export const Filter = ({ filter, handleSearchChange }) => {
  return (
    <div className={css.filterContainer}>
      <h3 className={css.filterTitle}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Ім'я може містити лише літери, апостроф, дефіс та пробіли. Наприклад, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleSearchChange}
      />
    </div>
  );
};
