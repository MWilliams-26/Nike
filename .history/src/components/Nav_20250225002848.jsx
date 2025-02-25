import { header-Logo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="{header-Logo}" />
        </a>
      </nav>
    </header>
  )
}

export default Nav