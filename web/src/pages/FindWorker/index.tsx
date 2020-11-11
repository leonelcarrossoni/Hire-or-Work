import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg'


function FindWorker() {
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Awesome that you need a worker."
            description="Tell us about your need and our team will contact you soon."
            />

            <main>
                <fieldset>
                    <legend>Personal informations </legend>

                    <Input name="name"  label="Full Name" />
                    <Input name="company"  label="Company" />
                    <Input name="adress"  label="Adress" />
                    <Input name="tel"  label="Tel" />
                    <Input name="email"  label="E-mail" />
                    <Textarea name="bio" label="Give us a brief introduction of your need" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important warning"/>
                        Important! <br />
                        Fill in all the registration fields.
                    </p>
                    <button type="button">
                        Save registration
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default FindWorker;