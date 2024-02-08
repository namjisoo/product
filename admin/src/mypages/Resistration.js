import styled from "styled-components";
import Button from "../component/Button";
import styles from "./MyPage.module.css";
import SideBar from "./SideBar";
import ResistrationList from "./My-List/ResistrationList";

function Resistration() {
  return (
    <div className={styles.containerBox}>
      <SideBar />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>병원&middot;약국등록</h1>
        <ResistrationList />
        <div className={styles.retouch_a}>
          <Button type="submit" className={styles.correction}>
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Resistration;
