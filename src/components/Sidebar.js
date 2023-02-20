import '../css/Sidebar.css';
import React from 'react';
import logo from '../images/logo.png';
import PieChartIcon from '@mui/icons-material/PieChart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="/" title="Userpilot" className="sidebar-logo">
        <img src={logo} alt="Userpilot" />
      </a>
      <nav>
        <ol className="sidebar-list list">
          <li>
            <a href="/" title="" className="item">
              <PieChartIcon className="material-icons"></PieChartIcon>
              Overview
            </a>
          </li>
          <li>
            <a href="/" title="" className="item">
              <ConfirmationNumberIcon className="material-icons"></ConfirmationNumberIcon>
              Tickets
            </a>
          </li>
          <li>
            <a href="/" title="" className="item">
              <LightbulbIcon className="material-icons"></LightbulbIcon>
              Ideas
            </a>
          </li>
          <li>
            <a href="/" title="" className="item active">
              <PersonIcon className="material-icons"></PersonIcon>
              Users
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Sidebar;
