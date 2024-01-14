import styles from '../ContactList/contact-list.module.css';

const ContactList = ({ item, deleteContact }) => {
  const elements = item.map(({ id, name, number }) => (
    <li key={id} className={styles.contacts}>
      {name}: {number}{' '}
      <button
        onClick={() => deleteContact(id)}
        type="button"
        className={styles.delete}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default ContactList;
