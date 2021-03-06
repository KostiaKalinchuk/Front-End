import React from 'react'
// import { render } from 'react-dom'
import Styles from './Styles'
import {Form, Field} from 'react-final-form'
import country from "./Countries"

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const FormCreate = ({ onSubmit, initialValues }) => (
    <Styles>
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            validate={values => {
                const errors = {};
                if (!values.firstName) {
                    errors.firstName = "Required";
                }
                if (!values.lastName) {
                    errors.lastName = "Required";
                }
                if (!values.email) {
                    errors.email = "Required";
                }
                if (!values.country) {
                    errors.country = "Required";
                }
                return errors;
            }}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field name="firstName" type="text" placeholder="First Name">
                            {obj => {
                                return (
                                    <div>
                                        <input
                                            {...obj.input}
                                            type={obj.type}
                                            placeholder={obj.placeholder}
                                        />
                                        {obj.meta.error &&
                                        obj.meta.touched && <span>{obj.meta.error}</span>}
                                    </div>
                                );
                            }}
                        </Field>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field name="lastName" type="text" placeholder="Last Name">
                            {obj => {
                                return (
                                    <div>
                                        <input
                                            {...obj.input}
                                            type={obj.type}
                                            placeholder={obj.placeholder}
                                        />
                                        {obj.meta.error &&
                                        obj.meta.touched && <span>{obj.meta.error}</span>}
                                    </div>
                                );
                            }}
                        </Field>
                    </div>
                    <div>
                        <label>Email</label>
                        <Field name="email" type="email" placeholder="Email">
                            {obj => {
                                return (
                                    <div>
                                        <input
                                            {...obj.input}
                                            type={obj.type}
                                            placeholder={obj.placeholder}
                                        />
                                        {obj.meta.error &&
                                        obj.meta.touched && <span>{obj.meta.error}</span>}
                                    </div>
                                );
                            }}
                        </Field>
                    </div>
                    <div>
                        <label>Gender</label>
                        <Field name="gender" type="radio" value="male">
                            {obj => {
                                return (
                                    <div>
                                        <label>male</label>
                                        <input {...obj.input} type={obj.type} />
                                        {obj.meta.error &&
                                        obj.meta.touched && <span>{obj.meta.error}</span>}
                                    </div>
                                );
                            }}
                        </Field>
                        <Field name="gender" type="radio" value="female">
                            {obj => {
                                return (
                                    <div>
                                        <label>female</label>
                                        <input {...obj.input} type={obj.type} />
                                        {obj.meta.error &&
                                        obj.meta.touched && <span>{obj.meta.error}</span>}
                                    </div>
                                );
                            }}
                        </Field>
                    </div>
                    <div>
                        <label>Country</label>
                        <Field name="country">
                            {obj => {
                                return (
                                    <div>
                                        <select {...obj.input}>
                                            {country.map(i => <option value={i}>{i}</option>)}
                                        </select>
                                        {obj.meta.error &&
                                        obj.meta.touched && <span>{obj.meta.error}</span>}
                                    </div>
                                );
                            }}
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