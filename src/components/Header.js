 const Title = () => (
    <a href="/">
    <img 
    className="logo"
    alt="logo"
     src="https://lh3.googleusercontent.com/p/AF1QipMKTUs5jo3Hoihm-GazeAIg7Pn5Gmr07GQD5o6W=w1080-h608-p-no-v0"></img>
      
     </a>
)
const Header= () => {
    return (
      <div className="header">
       <Title />
       
        <div className="nav-item">
       
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;