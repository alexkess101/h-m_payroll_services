import React, {Component} from 'react';

export default class  extends Component {
    constructor() {
        super();

        this.setState={
            name: '',
            email: '',
            subject:'',
            message:''
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleName=this.handleName.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handleSubject=this.handleSubject.bind(this);
        this.handleMessage=this.handleMessage.bind(this);
    }

    handleSubmit() {
        event.preventDefault();
        console.log("Hello there");
    }

    handleName(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleSubject(event) {
        this.setState({
            subject: event.target.value
        })
    }

    handleMessage(event) {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        return (
            <div className="contact-container">
                <div className="contact-wrapper">
                    <div className="title">
                        Contact Us
                    </div>

                    <div className="the-goods">
                        <div className="left-side">
                        
                        </div>

                        <div className="right-side">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="name" value={this.name} onChange={this.handleName} placeholder="Name"/>
                                <input type="email" name="email" value={this.email} onChange={this.handleEmail} placeholder="Email"/>
                                <input type="text" name="subject" value={this.subject} onChange={this.handleSubject} placeholder="Subject"/>
                                <textarea name="message" value={this.message} onChange={this.handleMessage} placeholder="message"></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}