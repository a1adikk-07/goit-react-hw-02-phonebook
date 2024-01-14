import styles from '../ContactList/contact-list.module.css';

const ContactList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id} className={styles.contacts}>
      {name}: {number}{' '}
      <button onClick={() => deleteContact(id)} type="button">
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
