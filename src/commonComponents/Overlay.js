import { ReactComponent as IconClose } from "../assets/shared/icon-close.svg";
import "./Overlay.css";

function Overlay(props) {
  const { setSidebarOpen } = props;
  return (
    <>
      <div className="sidebar__logo-close" onClick={() => setSidebarOpen(false)}>
        <IconClose />
      </div>

      <ul className="nav__right-panel overlay--sidebar">{props.children}</ul>
    </>
  );
}

export default Overlay;
