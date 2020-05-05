import React, { Component } from "react";
import axios from "axios";

export default class FormEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            poster: "",
            comment: "",
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        const url = "https://post-a-form.herokuapp.com/api/movies/";
        axios
            .post(url, this.state)
            .then((res) => res.data)
            .then((res) => {
                alert(`${res.title} has been added to the database`);
            })
            .catch((e) => {
                console.error(e);
                alert(`Error adding your film : ${e.message}`);
            });
    }
    render() {
        return (
            <div className="FormEmployee">
                <h1>What's your favourite film?</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>add your info here</legend>
                        <div className="form-data">
                            <label htmlFor="lastname">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="firstname">Poster url</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comments">Comments</label>
                            <textarea
                                type="textarea"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}
