import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  // Scroll to the top of the page on location change
  useEffect(() => {
    const unlisten = history.listen(location => {
      if (location.action === "POP") {
        return; // Use default scroll behavior when pressing back
      }
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default withRouter(ScrollToTop);
