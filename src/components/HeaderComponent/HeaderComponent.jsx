import React from 'react'
import { HeaderDiv } from './HeaderComponent.Style';
import UserLogo from '../../assets/images/logouser.png';
import { Notification } from "iconsax-react";

const HeaderComponent = () => {
  return (
    <HeaderDiv>
        <div className='icon'>
            <Notification size="24" color="#CCCCCC"/>
            <div className="online"></div>
        </div>
        <div className="account">
            <div className='logo'>
                <img src={UserLogo} alt="user-icon" />
            </div>
            <div className='info'>
                <h4>Nadun Nissanka</h4>
                <p>CS Manager</p>
            </div>
        </div>
        
    </HeaderDiv>
  )
}

export default HeaderComponent;