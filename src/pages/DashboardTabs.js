import * as React from 'react';
import "./DashboardTabs.css";
import { useHistory } from "react-router-dom";
import { Sidebars } from './Sidebars';

const DashboardTabs = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/addResturant");
  }

  function handleClicked() {
    history.push("/addfoodcart");
  }

  return (
    <div className="div">
      <div>
      <Sidebars/>
      </div>
      <div style={{
        padding: 50
      }}>
      <h1 style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>Dashboard</h1>
                  <h2 style={{ fontWeight: 'bold' }}>Welcome to Dashboard</h2>
                </div>
                <div className="btn-one">
                  <button style={{ color: 'white', backgroundColor: '#d70000', border: 'hidden', padding: 15, margin: 10, borderRadius: 20 }} onClick={() => { handleClicked() }}>Add FoodCart</button>
                  <button style={{ color: 'white', backgroundColor: '#d70000', border: 'hidden', padding: 15, margin: 10, borderRadius: 20 }} onClick={() => { handleClick() }}>Add Restaurents</button>
      </div>
    </div>
  );
}

export default DashboardTabs
