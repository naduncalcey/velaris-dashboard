import React from "react";
import { Add } from "iconsax-react";
import { styled } from "styled-components";

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 26px;
  h2 {
    color: #353535;
    font-size: 36px;
    font-weight: 800;
  }
  p {
    color: #ccc;
    font-size: 16px;
    font-weight: 400;
  }
  .btn-holder {
    display: flex;
    align-items: end;
    button {
      border: none;
      padding: 11px 20px;
      border-radius: 6px;
      background: #8c69ff;
      display: flex;
      gap: 10px;
      color: #fff;
    }
  }
`;

const ActionBarComponent = () => {
  return (
    <ActionBar>
      <div>
        <h2>Customers</h2>
        <p>Customer accounts</p>
      </div>
      <div className="btn-holder">
        <button>
          <Add size="20" color="#fff" />
          Add Account
        </button>
      </div>
    </ActionBar>
  );
};

export default ActionBarComponent;
