import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

function Header(props) {
  const history = useHistory();

  return (
    <header>
      <h1>WiStore Products</h1>
      <p>
        İpucu: Test için erdem.guntay@wit.com.tr adresini 9fxIH0GXesEwH_I
        şifresini kullanabilirsin.
      </p>
      <Button color="primary" onClick={() => history.push("/")}>
        Login
      </Button>
    </header>
  );
}

export default Header;
