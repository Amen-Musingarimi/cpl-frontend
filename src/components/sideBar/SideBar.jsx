import React from 'react';
import classes from './SideBar.module.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const SideBar = () => {
  return (
    <nav className={classes.sideBarContainer}>
      <h3 className={classes.logo}>CPL</h3>
      <div className={classes.linksContainer}>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>HOME</p>
          <Link className={classes.homeLink}>
            <AiFillHome />
            <p className={classes.homeText}>Overview</p>
          </Link>
        </div>
        <div className={classes.homeLinkCont}>
          <p className={classes.linkHeading}>HOME</p>
          <Link className={classes.homeLink}>
            <AiFillHome />
            <p className={classes.homeText}>Overview</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
