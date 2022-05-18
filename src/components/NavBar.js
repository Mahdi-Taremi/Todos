const NavBar = ({ unComletedTodos }) => {
  return (
    <header className="hedaer_NavBar">
      {unComletedTodos ? (
        <>
          {" "}
          <span>{unComletedTodos}</span>
          <h3> are not Comleted</h3>
        </>
      ) : (
        <h3>Set your todos</h3>
      )}
    </header>
  );
};

export default NavBar;
