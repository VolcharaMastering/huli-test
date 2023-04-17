import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound(props) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate.goBack();
  };
  return (
    <section className="not-found">
      <div className="not-found__box">
        <h0 className="not-found__404">404</h0>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <p onClick={goBack} className="not-found__back">
        Назад
      </p>
    </section>
  );
}

export default NotFound;
