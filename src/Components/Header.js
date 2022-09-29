function Header({ textColor, title, anotherOne }) {
  const style = { fontSize: "40px", color: textColor };

  return (
    <div style={style}>
      {title} {anotherOne}
    </div>
  );
}

// default export
export default Header;
