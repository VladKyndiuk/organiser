import "../../styles/PageNotFound.scss";
import { ReactComponent as Logo404 } from "../../icons/noun-404-error-4440886.svg";
function PageNotFound() {
  document.title = "Сторінку не знайдено";
  return (
    <div className="body">
      <Logo404 className="anima"></Logo404>
      <div className="title anima">Page Not Found</div>
    </div>
  );
}

export default PageNotFound;
