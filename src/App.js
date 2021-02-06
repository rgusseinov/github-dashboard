import React from 'react'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="container">


          <div className="row">
            <div className="col-lg-6 mb-5">
              <h1> Здравствуйте, <b>Человек 12346</b> </h1>
            </div>

            <div className="col-lg-2">
              <p> Сменить статус </p>
            </div>            
          </div>
 

          <div className="row">
            <div className="col-lg-2 mb-5">
              <p> Ваш город </p>
            </div>
            <div className="col-lg-6">
            <select className="form-select" aria-label="Default select example">
                <option> Москва </option>
                <option> Омск </option>
                <option> Казань </option>                
              </select>
            </div>            
          </div>


          <div className="row">
            <div className="col-lg-2 mb-5">
              <p> Пароль </p>
            </div>
            <div className="col-lg-6">
              <input className="form-control" />
            </div> 

            <div className="col-lg-4">
              <span> Ваш пороль должен содержать не менее 5 символов </span>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-2 mb-5">
              <p> Пароль еще раз </p>
            </div>

            <div className="col-lg-6">
              <input type="email" className="form-control" />
            </div>    

            <div className="col-lg-4">
              <span> Пожалуйста, повторите пароль. Это поможем нам обезопасить </span>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-2 mb-5">
              <p> Электронная почта </p>
            </div>
            <div className="col-lg-6">
              <input type="email" className="form-control" />
            </div>
            
            <div className="col-lg-4">
              <span> Можно изменить адрес указанный при регистрации </span>
            </div>  
          </div>

          <div className="row">
            <div className="col-lg-2 mb-5">
              <p> Я согласен </p>
            </div>
            <div className="col-lg-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  Принимать актуальную информацию на email
                </label>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-2">
              <button className="btn btn-success"> Изменить </button>
            </div>
            <div className="col-lg-6">
              <p> Дата последнего изминения 05 февраля, 2021 г. в 11:30 </p>
            </div>            
          </div>


        </div>
      </div> 
    );
  }
}

export default App;
