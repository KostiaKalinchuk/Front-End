import React from 'react'
// import { render } from 'react-dom'
import Styles from './Styles'
import {Form, Field} from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));





const FormCreate = ({onSubmit, initialValues}) => (
    <Styles>
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({handleSubmit, reset, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label>Choose your gender</label>
                        <div>
                            <label>
                                <Field
                                    name="gender"
                                    component="input"
                                    type="radio"
                                    value="male"
                                    checked
                                />{' '}
                                male
                            </label>
                            <label>
                                <Field
                                    name="gender"
                                    component="input"
                                    type="radio"
                                    value="female"
                                />{' '}
                                female
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Country</label>
                        <Field name="country" component="select">
                            <option/>
                            <option value="Ukraine">Ukraine</option>
                            <option value="USA">USA</option>
                            <option value="Poland">Poland</option>
                        </Field>
                    </div>
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    </Styles>
);

export default FormCreate;