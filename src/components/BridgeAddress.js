import React from 'react'
import coin_ats from '../assets/images/logos/coin_ats.svg';
import coin_ats20 from '../assets/images/logos/coin_ats20.svg';

export const BridgeAddress = ({ isHome, reverse, labelName}) => {
  const getAddress = () => isHome ?
    (<div className="home-address-container" />)
    :
    (<div className="foreign-address-container" />)
  
  var coin = labelName
  if (labelName == 'ATS') coin = <img src={coin_ats} />
  if (labelName == 'ATS20') coin = <img src={coin_ats20} />

  return isHome ?
    (<div className="bridge-home">
      <div className="bridge-home-container">
        <div className="home-logo-container">
          <div className={reverse ? 'foreign-logo' : 'home-logo'}>
           {coin}
          </div>
        </div>
      </div>
      {getAddress()}
    </div>)
    :
    (<div className="bridge-foreign">
      {getAddress()}
      <div className="bridge-foreign-container">
        <div className="foreign-logo-container">
          <div className={reverse ? 'foreign-logo' : 'home-logo'}>
            {coin}
          </div>
        </div>
      </div>
    </div>)
}
