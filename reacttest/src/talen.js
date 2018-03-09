import React from 'react';
import axios from 'axios';
import './index.css';

class Talen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            edit: false
        }
        this.handler = this.handler.bind(this);
    }

    handler(e) {

        this.setState({ edit: !this.state.edit });
    }

    getUser() {
        axios
            .get("http://localhost:4000/users/1")
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
    deleteLanguage(event, taal){
        console.log(taal);
        this.state.user.languages = this.state.user.languages.filter(obj => obj != taal);

        axios.patch("http://localhost:4000/users/1", {
            languages : this.state.user.languages.filter(obj => obj != taal)
        })
        .then(response => {
            this.forceUpdate();
        })
        .catch(e => {
            console.log(e);
        })
    }

    render() {
        let languages, wijzigen;
        if (this.state.user) {
            if (this.state.user.languages.length > 0) {
                const listItems = this.state.user.languages.map((lang) =>
                    <li key={lang.taal}>{lang.taal} <span className='clickable' onClick={(e) => this.deleteLanguage(e, lang)}>Verwijderen</span></li>);
                languages = <ul>{listItems}</ul>;
            }
            else{
                languages = <p className="red">U heeft nog geen talen toegevoegd</p>
            }
        }
        if (!this.state.edit) {
            wijzigen = <a onClick={this.handler} className='clickable'>Voeg een taal toe</a>;
        }
        else {
            wijzigen = <Edittalen user={this.state.user} handler={this.handler} />
        }
        return (
            <div>
                {languages}
                {wijzigen}
            </div>
        )
    }
}

class Edittalen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //selectedTaal: {taal : null, beheersing: null},
            selectedTaal: '',
            selectedBeheersing: '',
            submit : false,
            user: props.user
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ user: props.user });
    }
    handleChangeTaal(event) {
        this.setState({selectedTaal: event.target.value}); 
        if(this.state.selectedBeheersing !== ''){
            this.setState({submit : true})
        }
    }
    handleChangeBeheersing(event) {
        this.setState({selectedBeheersing: event.target.value});  
        if(this.state.selectedTaal !== ''){
            this.setState({submit : true})
        }
    }
    handleSubmit(event){

        let newLanguage = {
            "taal": this.state.selectedTaal,
            "beheersing" : this.state.selectedBeheersing
        };

        this.state.user.languages.push(newLanguage);


        axios
        .patch("http://localhost:4000/users/1", {
            languages : this.state.user.languages
        })
        .then(response => {
            this.props.handler(event);
        })
        .catch(e => {
            console.log(e);
        });


    }
    render() {


        let talen = ["Nederlands", "Engels", "Frans", "Duits", "Fins", "Italiaans", "Spaans", "Portugees"];

        const taalItems = talen.map((taal) => <option value={taal} key={taal}>{taal}</option>);

        return (
            <div>
                <label htmlFor="talen">Selecteer een taal dat u beheerst</label>
                <select name="talen" id="talen" value={this.state.selectedTaal} onChange={(e) => this.handleChangeTaal(e)}>
                   <option disabled></option>
                    {taalItems}
                </select>
                <label htmlFor="beheersing">Selecteer hoe goed u deze beheerst</label>
                <select name="beheersing" id="beheersing"  value={this.state.selectedBeheersing} onChange={(e) => this.handleChangeBeheersing(e)}>
                   <option disabled></option>
                    <option value="1" key='1'>Matig</option>
                    <option value="2" key='2'>Goed</option>
                    <option value="3" key='3'>Uitstekend</option>
                </select>
                <input type="button" value="Toevoegen" disabled={!this.state.submit} onClick={(e) => this.handleSubmit(e)}/>
            </div>
        )
    }
}

export default Talen;