
const Title = () => (
  <a href="/">
    <img className="logo" src="https://lh3.googleusercontent.com/p/AF1QipMKTUs5jo3Hoihm-GazeAIg7Pn5Gmr07GQD5o6W=w1080-h608-p-no-v0" alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;