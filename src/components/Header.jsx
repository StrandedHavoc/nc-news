import coffee from "../pictures/coffee.png";

const Header = () => {
  return (
    <header>
      <h1><img className="logo" src={coffee}></img>Coffee News<img className="logo" src={coffee}></img></h1>
      
    </header>
  );
};

export default Header;
