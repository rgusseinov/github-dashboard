import React from 'react'
import './App.css';
import City from './components/City';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      input: {},
      errors: {}
    }
  }

  handleChange = (e) => {
    const input = this.state.input
    input[e.target.name] = e.target.value
    // console.log(`input value`, input)
    this.setState({
      input
    })
  
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.validate()){
      console.log(`Form successfully completed!`)

    }

  }

  validate(){
    let isValid = true
    const errors = {}
    const input = this.state.input


    if (!input['city']){
      isValid = false
      errors['city'] = 'Укажите город'
    }

    if (!input['name']){
      isValid = false
      errors['name'] = 'Укажите имя'
    }

    if (!input['password']){
      isValid = false
      errors['password'] = 'Укажите пароль'
    }

    if (!input['passwordRepeat']){
      isValid = false
      errors['passwordRepeat'] = 'Укажите пароль еще раз'
    }

    if (!input['email']){
      isValid = false
      errors['email'] = 'Укажите email'
    }

    // console.log(`errors`, errors)
    this.setState({
      errors
    })
    return isValid
  }

  render(){
      const errors = this.state.errors
      const input = this.state.input
            
      return (
        <React.Fragment>
        <div className="App">
          <div className="container">

          <form className="row g-3 needs-validation" noValidate>

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
                <label htmlFor="validationCustom01" className="form-label"> Ваш город </label>
              </div>
              <div className="col-lg-6">
                <City 
                  cities={this.props.cities}
                  city={this.state.input.city}
                  cityRef = {this.cityRef}
                  handleChange={this.handleChange}
                />
              <div className="invalid">{errors.city}</div>
              </div>
            </div>

              <div className="row">
                <div className="col-lg-2 mb-5">
                  <label htmlFor="validationCustom01" className="form-label"> Имя </label>
                </div>
                <div className="col-lg-6">
                  <input type="text" 
                    onChange={this.handleChange}
                    value={this.state.input.name}
                    className="form-control"
                    id="validationCustom01"
                    name="name" required
                  />                  
                  <div className="invalid">{errors.name}</div>                
                </div>
                <div className="col-lg-4">
                  <span> Введите имя </span>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-2">
                  <label htmlFor="validationCustom02" className="form-label"> Пароль </label>
                </div>
                <div className="col-lg-6">
                  <input type="password"
                    onChange={this.handleChange}
                    value={this.state.input.password}
                    className="form-control"
                    id="validationCustom02"
                    name="password" 
                    required 
                  />
                  <div className="invalid">{errors.password}</div>
                </div>
                <div className="col-lg-4">
                  <span> Ваш пороль должен содержать не менее 5 символов </span>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-2 mb-5">
                  <label htmlFor="validationCustom02" className="form-label"> Пароль еще раз </label>
                </div>
                <div className="col-lg-6">
                  <input type="passwordRepeat"
                    onChange={this.handleChange}
                    value={this.state.input.passwordRepeat}
                    className="form-control"
                    id="validationCustom02"
                    name="passwordRepeat" 
                    required 
                  />
                <div className="invalid">{errors.passwordRepeat}</div>
                </div>
                <div className="col-lg-4">
                  <span> Можно изменить адрес указанный при регистрации </span>
                </div>
              </div>


              <div className="row">
                <div className="col-lg-2 mb-5">
                  <label htmlFor="validationCustom01" className="form-label"> Электронная почта </label>
                </div>
                <div className="col-lg-6">
                  <input type="email" 
                    onChange={this.handleChange}
                    value={this.state.input.email}
                    className="form-control"
                    id="validationCustom01"
                    name="email" required
                  />
                  <div className="invalid">{errors.email}</div>
                </div>
                <div className="col-lg-4">
                  <span> Введите email </span>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-2 mb-5">
                  <label htmlFor="validationCustom01" className="form-label"> Я согласен </label>
                </div>
                <div className="col-lg-6">                  
                  { input.iagree ?
                    <input
                      type="checkbox" 
                      onChange={this.handleChange}
                      value={this.state.input.iagree}
                      className="form-control form-check-input"
                      id="validationCustom01"
                      name="iagree"
                      checked /> : 
                      <input
                      type="checkbox" 
                      onChange={this.handleChange}
                      value={this.state.input.iagree}
                      className="form-control form-check-input"
                      id="validationCustom01"
                      name="iagree" /> }
                  <div className="invalid">{errors.iagree}</div>
                </div>
                <div className="col-lg-4">
                  <span>  Принимать актуальную информацию на email  </span>
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
        </React.Fragment>
      );
    }
}

export default App;
