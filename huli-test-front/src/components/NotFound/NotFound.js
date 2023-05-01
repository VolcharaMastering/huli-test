import React from "react";
import "./NotFound.css";

function NotFound(props) {
  return (
    <section className="not-found">
      <div className="not-found__box">
        <h0 className="not-found__404">404</h0>
        <p className="not-found__text">Страница не найдена</p>
      </div>
    </section>
  );
}

export default NotFound;
