import userIcon from "./user-icon.jpeg";
import logo from "./logo.png";
import styles from "./Header.module.css";
console.log(styles);
function Header(props) {
  const { isLogin, navList } = props;

  //   if (isLogin) {
  //     return <img src={userIcon} alt="" />;
  //   }
  //   return <button>Login</button>;

  //   return (
  //     <header>
  //       {isLogin ? <img src={userIcon} alt="" /> : <button>Login</button>}
  //     </header>
  //   );
  //   return <header>{isLogin && <img src={userIcon} alt="" />}</header>

  const mapLinks = (link, i) => (
    <li key={i}>
      <a href={link.src}>{link.aTitle}</a>
    </li>
  );

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <nav>
        <ul className={styles.linksList}>{navList.map(mapLinks)}</ul>
      </nav>
      {isLogin ? (
        <img className={styles.userImg} src={userIcon} alt="user" />
      ) : (
        <div>
          <button>Login in</button>
          <button>Regestration</button>
        </div>
      )}
    </header>
  );
}

export default Header;
