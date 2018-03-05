import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import Editpersonalia from './editpersonalia';
import Showtalen from './talen';


class Personalia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      edit: false
    }
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    console.log(this.state.edit)
    if (this.state.edit === true) {
      console.log("BOEEEEE");
      this.getUser();
    }
    this.setState({ edit: !this.state.edit });
  }

  getUser() {
    axios
      .get("http://localhost:3004/users/1")
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .then(
        this.forceUpdate()
      )
      .catch(e => {
        console.log(e);
      });

  }

  componentDidMount() {

    this.getUser();
    
  }

  render() {
    console.log(this.state.user);
    return (
      <div>
        {this.state.edit ? <Editpersonalia user={this.state.user} handler={this.handler} /> : <Showpersonalia user={this.state.user} handler={this.handler} />}
      </div>
    )

  }

};

class Showpersonalia extends React.Component {

  render() {
    let firstname, lastname, address, age, email, sex;

    if (this.props.user) {
      const user = this.props.user;

      if (user.firstname != null && user.firstname !== '') {
        firstname = <span>Naam: {user.firstname} </span>
      } else { firstname = <p className="red">Voornaam nog niet ingevuld</p> }

      if (user.lastname != null && user.lastname !== '') {
        lastname = <span> {user.lastname}</span>
      } else { lastname = <p className="red">Achternaam nog niet ingevuld</p> }

      if (user.address != null && user.address !== '') {
        address = <p>Adres: {user.address}</p>
      } else { address = <p className="red">Adres is nog niet ingevuld</p> }

      if (user.age != null && user.age !== '') {
        age = <p>Leeftijd: {user.age}</p>
      } else { age = <p className="red">Leeftijd is nog niet ingevuld</p> }

      if (user.email != null && user.email !== '') {
        email = <p>Email: {user.email}</p>
      } else { email = <p className="red">Emailadres is nog niet ingevuld</p> }

      if (user.sex != null && user.sex !== '') {
        sex = <p>Geslacht: {user.sex}</p>
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
        <input type="button" value="wijzigen" onClick={this.props.handler} />
      </div>
    );
  }

}



ReactDOM.render(
  <Personalia />,
  document.getElementById('personalia')
);

ReactDOM.render(
  <Showtalen />,
  document.getElementById('talen')
);
