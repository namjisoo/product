import React from "react";
import classNames from "classnames";
// 클래스 한꺼번에 여러개 주기 위한
import styles from "./Container.module.css";

const Container = ({ className, children }) => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};

export default Container;
