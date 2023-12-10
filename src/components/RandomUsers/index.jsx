import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { loadUsers } from "../../api";
import styles from "./RandomUsers.module.scss";

function RandomUsers() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false); //чи іде завантаження
  const [error, setError] = useState(null); // помилка якщо вона є
  const [results, setResults] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    loadUsers({ page, results })
      .then((data) => {
        setUsers(data.results);
        setIsFetching(false);
      })
      .catch((err) => {
        setError(err);
        setIsFetching(false);
      })
      .finally(() => setIsFetching(false));
  }, [results, page]);

  const handleResultChange = ({ target: { value } }) => setResults(value);

  const prev = () => setPage(page === 1 ? 1 : -1);
  const next = () => setPage(page + 1);

  return (
    <>
      <section>
        <label>
          Result on page:{""}
          <input
            type="number"
            value={results}
            onChange={handleResultChange}
            min="1"
            max="20"
          />
        </label>
        <button onClick={prev}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </section>

      {isFetching && <BeatLoader />}
      {error && <div style={{ color: "red" }}> !!!ERROR!!!</div>}
      <ul className={styles.usersList}>
        {!isFetching &&
          !error &&
          users.map((u) => <li key={u.login.uuid}>{JSON.stringify(u)}</li>)}
      </ul>
    </>
  );
}

export default RandomUsers;
