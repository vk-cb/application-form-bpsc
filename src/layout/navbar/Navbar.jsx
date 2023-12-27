import React from "react";
import styles from "./Navbar.module.scss";
import { IoMdLogOut } from "react-icons/io";
function Navbar() {
 

  return (
    <div className={styles.mainNavbar}>
      <div className={styles.logo}>
        <img src="/assets/images/logo.svg" alt="" />
      </div>
      <div className={styles.heading}>
        <p>Bihar Public Service Commission, Patna</p>
        <span>BPSC Assistant (Priliminary) Examination</span>
        <p>बीपीएससी सहायक (प्रारंभिक )परीक्षा</p>
      </div>
      <div className={styles.logout}>
      <IoMdLogOut/>
      </div>
      
    </div>
  );
}

export default Navbar;
