import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function WorkerForm() {
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="We're happy in help you find a new job." 
            description="The first step is to tell us a little more about you."
            />

            <main>
                <fieldset>
                    <legend>Personal informations</legend>

                    <Input name="name"  label="Full Name" />
                    <Input name="avatar"  label="Avatar" />
                    <Input name="whatsapp"  label="Whatsapp" />
                    <Input name="email"  label="E-mail" />
                    <Textarea name="bio" label="Tell about your experiences" />

                </fieldset>

                <fieldset>
                    <legend>About your skills</legend>

                    <Input name="speciality"  label="Speciality" />
                    <Select name="experience"  label="Level of Experience" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important warning"/>
                        Important! <br />
                        Fill in all the data.
                    </p>
                    <button type="button">
                        Save registration
                    </button>
                </footer>

            </main>
        </div>
    )
}

export default WorkerForm;