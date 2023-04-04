import { useNavigate } from "react-router-dom";
import Logomin from "../assets/logo_min.jpg";

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <a href="/" onClick={handleClick}>
        <img src={Logomin} alt="Logo_De_Laure_et_depices" />
      </a>
    </div>
  );
}

export default Logo;
