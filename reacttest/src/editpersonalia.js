import React from 'react';
import axios from 'axios';

class Editpersonalia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    componentWillReceiveProps(props) {

        this.setState({ user: props.user });
    }

    handleChange(element, event) {

        let newUser = Object.assign({}, this.state.user);    //creating copy of object
        newUser[element] = event.target.value;                        //updating value
        this.setState({ user: newUser });

    }

    handleSubmit(event) {

        axios
            .patch("http://localhost:4000/users/1", {
                firstname: this.state.user.firstname,
                lastname: this.state.user.lastname,
                age: this.state.user.age,
                sex: this.state.user.sex,
                address: this.state.user.address,
                email: this.state.user.email
            })
            .then(response => {
                this.props.handler(event)
            })
            .catch(e => {
                console.log(e);
            });



    }

    render() {
        let firstname, lastname, age, sex, address, email;

        if (this.props.user && this.state.user) {

            // elementen mogen niet null zijn voor in het input field => lege string declareren
            if (this.state.user.firstname == null) { this.state.user.firstname = '' }
            if (this.state.user.lastname == null) { this.state.user.lastname = '' }
            if (this.state.user.age == null) { this.state.user.age = '' }
            if (this.state.user.sex == null) { this.state.user.sex = '' }
            if (this.state.user.address == null) { this.state.user.address = '' }
            if (this.state.user.email == null) { this.state.user.email = '' }
            firstname = <input type="text" name="name" value={this.state.user.firstname} onChange={(e) => this.handleChange('firstname', e)} />;
            lastname = <input type="text" name="name" value={this.state.user.lastname} onChange={(e) => this.handleChange('lastname', e)} />;
            age = <input type="number" name="name" value={this.state.user.age} onChange={(e) => this.handleChange('age', e)} />;


            //sex = <input type="text" name="name" value={this.state.user.sex} onChange={(e) => this.handleChange('sex', e)} />;

            sex = <span>
                <label for="man">Man</label>
                <input type="radio" id="man" value="Man"  checked={this.state.user.sex === "Man"}  name="sex" onChange={(e) => this.handleChange('sex', e)}/>
                <label for="vr">Vrouw</label>
                <input type="radio" id="vr" value="Vrouw" checked={this.state.user.sex === "Vrouw"} name="sex" onChange={(e) => this.handleChange('sex', e)}/>
            </span>;

            address = <input type="text" name="name" value={this.state.user.address} onChange={(e) => this.handleChange('address', e)} />;
            email = <input type="text" name="name" value={this.state.user.email} onChange={(e) => this.handleChange('email', e)} />;
        }

        return (
            <form>
                <label>
                    Voornaam: {firstname}
                </label> <br />
                <label>
                    Achternaam: {lastname}
                </label><br />
                <label>
                    Leeftijd: {age}
                </label><br />
                <label>
                    Geslacht: {sex}
                </label><br />
                <label>
                    Address: {address}
                </label> <br />
                <label>
                    Email: {email}
                </label>

                <br />
                <input type="button" value="Submit" onClick={(e) => this.handleSubmit(e)} />
            </form>
        )
    }

}

export default Editpersonalia;