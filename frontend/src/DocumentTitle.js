import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function DocumentTitle({ location }) {
  useEffect(() => {
    let page = location.pathname.substring(
      location.pathname.lastIndexOf("/") + 1
    );

    page = page.replace("-", " ");

    if (page === "") {
      page = "home";
    }

    page = page
      .split(" ")
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");

    document.title = `Daniel Lister - ${page}`;
  }, [location.pathname]);
  return null;
}

export default withRouter(DocumentTitle);
