import React from 'react'
import './App.css';
import City from './components/City';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.cityRef = React.createRef()
    this.passwordRef = React.createRef()
    this.passwordRepeatRef = React.createRef()
    this.emailRef = React.createRef()
    this.iAgreeRef = React.createRef()    
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const regExp = /(?=.*[A-Z])/
    
    if (regExp.test(this.passwordRef.current.value)){
      console.log(`password:`, this.passwordRef.current.value)
    }
    
    
  }

  render(){
      // console.log(`cities`, this.myRef);

      return (
        <div className="App">
          <div className="container">

          <form ref={this.formRef}>
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
                <City 
                  cities={this.props.cities} 
                  cityRef = {this.cityRef}
                />
              </div>            
            </div>


            <div className="row">
              <div className="col-lg-2 mb-5">
                <p> Пароль </p>
              </div>
              <div className="col-lg-6">
                <input id="password" ref={this.passwordRef} type="password" className="form-control" />
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
                <input id="passwordRepeat" ref={this.passwordRepeatRef} type="password" className="form-control" />
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
                <input type="email" id="email" ref={this.emailRef} className="form-control" />
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
                  <input ref={this.iAgreeRef} className="form-check-input" type="checkbox" value="" id="iAgree"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Принимать актуальную информацию на email
                  </label>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-lg-2">
                <button className="btn btn-success" onClick={this.handleSubmit}> Изменить </button>
              </div>
              <div className="col-lg-6">
                <p> Дата последнего изминения 05 февраля, 2021 г. в 11:30 </p>
              </div>            
            </div>

            </form>
          </div>
        </div> 
      );
    }
}

export default App;
