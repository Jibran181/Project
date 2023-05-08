import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { BigNumber, ethers } from 'ethers';
import { BehaviorSubject, retry, Subject } from 'rxjs';
import { enviroment } from '../enviroments/enviroment';
const contractAbi = require('../abi/contract.abi.json');
@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService {
  private token: boolean = false;
  web3!: Web3;
  window: any;
  contract!: Contract;
  wallet: BehaviorSubject<Wallet> = new BehaviorSubject<Wallet>({
    connectedAccount: '',
    connected: false,
    splittedAccount: '',
    chainId: '',
  });
  signer: any;
  msgContract: any;
  constructor(private http: HttpClient) {
    this.loadWeb3();
    this.initContract();
  }

  async login() {
    await this.connect();
    return this.token;
  }

  async connect() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metamaskAccount = await web3.eth.getAccounts();

      let chain = await window.ethereum.request({ method: 'eth_chainId' });

      let wallet = {
        connectedAccount: metamaskAccount[0],
        connected: true,
        splittedAccount: this.splitAccount(metamaskAccount[0]),
        chainId: chain,
      };
      this.wallet.next(wallet);
      this.token = this.wallet.value.connected;
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'Non-Ether Browser detected. You should consider trying Metamask'
      );
    }
  }

  logout() {
    // Clear the access token
    this.token = false;
  }

  isLoggedIn() {
    // Check if the user is logged in based on the presence of the access token
    return this.token;
  }

  getToken() {
    return this.token;
  }

  getWallet() {
    return this.wallet;
  }

  private async initContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

    this.contract = new this.web3.eth.Contract(
      contractAbi,
      enviroment.CONTRACT_ADDRESS
    );

    // this.msgContract = new ethers.Contract(
    //   enviroment.CONTRACT_ADDRESS,
    //   contractAbi,
    //   provider
    // );
    // this.signer = provider.getSigner();
    // const diasigner = this.msgContract.connect(this.signer);
    // let a = await diasigner.getYourMessage();

    console.log('contract', this.contract.methods.getYourMessage());
  }
  // tuple = {
  //   message: '',
  // };
  // async callContract(account: any, arg1: ): Promise<void> {
  //   const result = await this.contract.methods
  //     .yourFunctionName(arg1, arg2, ...) // Replace with your function name and arguments
  //     .send({ from: account });
  //   console.log(result);
  // }

  async loadWeb3() {
    this.window = window as any;
    this.web3 = new Web3(this.window.ethereum);
    this.window.ethereum.on('chainChanged', (c: any) => {
      let w = this.getWallet();
      this.wallet.next({
        connectedAccount: w.value.connectedAccount,
        connected: w.value.connected,
        splittedAccount: w.value.splittedAccount,
        chainId: c,
      });
    });

    this.window.ethereum.on('accountsChanged', (a: any) => {
      let w = this.getWallet();
      this.wallet.next({
        connectedAccount: a[0],
        connected: w.value.connected,
        splittedAccount: this.splitAccount(a[0]),
        chainId: w.value.chainId,
      });
    });

    this.window.ethereum.on('disconnect', () => {
      let w = this.getWallet();
      this.wallet.next({
        connectedAccount: '',
        connected: w.value.connected,
        splittedAccount: this.splitAccount(''),
        chainId: w.value.chainId,
      });
    });
  }

  splitAccount(value: string) {
    return (
      value.substring(0, 5) +
      '......' +
      value.substring(value.length - 4, value.length)
    ).toString();
  }
}

declare let window: any;

export interface Wallet {
  connectedAccount: string;
  connected: boolean;
  splittedAccount: string;
  chainId: string;
}
