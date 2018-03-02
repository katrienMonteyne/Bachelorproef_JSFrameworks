import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';


class Personalia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      edit: true
    }

  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/users/1")
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {

    return (
      <div>
        {this.state.edit ? <Editpersonalia user={this.state.user} /> : <Showpersonalia user={this.state.user} />}
      </div>
    )

  }

};

class Showpersonalia extends React.Component {

  render() {
    let firstname, lastname, address, age, email, sex;

    if (this.props.user) {
      const user = this.props.user;

      if (user.firstname != null && user.firstname != '') {
        firstname = <p>{user.firstname}</p>
      } else { firstname = <p className="red">Voornaam nog niet ingevuld</p> }

      if (user.lastname != null && user.lastname != '') {
        lastname = <p>{user.lastname}</p>
      } else { lastname = <p className="red">Achternaam nog niet ingevuld</p> }

      if (user.address != null && user.address != '') {
        address = <p>{user.address}</p>
      } else { address = <p className="red">Adres is nog niet ingevuld</p> }

      if (user.age != null && user.age != '') {
        age = <p>{user.age}</p>
      } else { age = <p className="red">Leeftijd is nog niet ingevuld</p> }

      if (user.email != null && user.email != '') {
        email = <p>{user.email}</p>
      } else { email = <p className="red">Emailadres is nog niet ingevuld</p> }

      if (user.sex != null && user.sex != '') {
        sex = <p>{user.sex}</p>
      } else { sex = <p className="red">Geslacht is nog niet ingevuld</p> }
    }

    return (
      <div>
        {firstname}
        {lastname}
        {address}
        {age}
        {email}
        {sex}
      </div>
    );
  }

}

class Editpersonalia extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {firstname: null}
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log('Boe');
    this.props.user.firstname = event.target.value;
  }

  render() {

    let user = null;
    let firstname, lastname, age, sex, address, email;

    if(this.props.user){
      user = this.props.user;
      this.setState({
        user: this.props.user
      });
      // elementen mogen niet null zijn voor in het input field => lege string declareren
      if(user.firstname  == null){ user.firstname =''}
      if(user.lastname  == null){ user.lastname =''}
      if(user.age  == null){ user.age =''}
      if(user.sex  == null){ user.sex =''}
      if(user.address  == null){ user.address =''}
      if(user.email  == null){ user.email =''}
      firstname = <input type="text" name="name" value={user.firstname} onChange={this.handleChange}/>;
      lastname = <input type="text" name="name" value={user.lastname}/>
      age = <input type="text" name="name" value={user.age}/>
      sex = <input type="text" name="name" value={user.sex}/>
      address = <input type="text" name="name" value={user.address}/>
      email = <input type="text" name="name" value={user.email}/>
    }


    return (
      <form>
        <label>
          Voornaam: {firstname}
        </label> <br/>
        <label>
          Achternaam: {lastname}
        </label><br/>
        <label>
          Leeftijd: {age}
        </label><br/>
        <label>
          Geslacht: {sex}
        </label><br/>
        <label>
          Address: {address}
        </label> <br/>
        <label>
          Email: {email}
        </label>

        <br/>
        <input type="submit" value="Submit" />
      </form>
    )
  }


}

ReactDOM.render(
  <Personalia />,
  document.getElementById('personalia')
);
