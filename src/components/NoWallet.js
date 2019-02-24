import React, { Component } from 'react'
import noWalletIcon from '../assets/images/i@2x.png'
import { ModalContainer } from './ModalContainer'
import { inject, observer } from 'mobx-react'

@inject('RootStore')
@observer
export class NoWallet extends Component {
  state = {
    showModal: true
  }

  handleCancel = () => {
    this.setState({ showModal: false })
  }

  render() {
    const { RootStore: { web3Store: { walletInstalled } }, showModal: showNoWallet } = this.props
    const showModal = showNoWallet && !walletInstalled

    if (!showModal || !this.state.showModal) return null

    return (
      <ModalContainer showModal={showModal && this.state.showModal}>
        <div className="noWallet-alert">
          <div className="noWallet-image-container">
            <img className="noWallet-icon" src={noWalletIcon} alt="no wallet icon"/>
          </div>
          <div className="noWallet-alert-container">
            <h2 className="noWallet-title">Wallet not found</h2>
            <p className="noWallet-description">A wallet is not installed. Before continue, please install one (Metamask
              or Nifty Wallet) and return to this page to continue using the application.</p>
            <p className="noWallet-description">For further information on how to install any of both wallets, please
              click the buttons below.</p>
            <div className="noWallet-buttons">
              <a
                className="noWallet-metamask"
                href="https://poanet.zendesk.com/hc/en-us/articles/360007464553-MetaMask"
                rel="noopener noreferrer"
                target="_blank"
              >
                Metamask
              </a>   
{/*               
              <a
                className="noWallet-niftyWallet"
                href="https://poanet.zendesk.com/hc/en-us/articles/360008957634-Nifty-Wallet"
                rel="noopener noreferrer"
                target="_blank"
              >
                Nifty Wallet
              </a>
               */}
              <button className="noWallet-cancel" onClick={this.handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </ModalContainer>
    )
  }
}
