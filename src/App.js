import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './Containers/MainContainer';
import toastr from 'toastr';

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-bottom-right',
  preventDuplicates: false,
  showDuration: '20000',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainContainer> 

          </MainContainer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
