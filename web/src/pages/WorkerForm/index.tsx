import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function WorkerForm() {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: ''},
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, //Copia todos os items do array scheduleItems
            {week_day: 0, //Incluí as informações do novo schedule
            from: '',
            to:''}
        ]);
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="We're happy in help you find a new job." 
            description="The first step is to tell us a little more about you."
            />

            <main>
                <fieldset>
                    <legend>Login</legend>
                        <Input name="user"  label="User" />
                        <Input type="e-mail" name="email"  label="E-mail" />
                        <Input type="password" name="password"  label="Password" />

                </fieldset>

                <fieldset>
                    <legend>Personal informations</legend>

                    <div className="double-input">
                        <Input name="name"  label="Name" />
                        <Input name="last-name"  label="Last Name" />
                    </div>
                    <div className="double-input">
                        <Input name="email"  label="E-mail" />
                        <Input 
                            type="tel" 
                            name="phone"  label="Phone Number"
                            pattern="([0-9]{4})-([0-9]{6})" 
                        />
                    </div>
                    <div className="double-input">
                        <Input name="birthday"  label="Date of Birth" />
                        <Input name="birthplace"  label="Birthplace" />
                    </div>                    

                </fieldset>

                <fieldset>
                    <legend>Adress</legend>

                    <div className="double-input">
                        <Input name="zipcode"  label="Zip Code" />
                        <Input name="number"  label="Number" />
                    </div>
                    <Input name="street"  label="Street Adress" />
                    <div className="double-input">
                        <Input name="city"  label="City" />
                        <Input name="state"  label="State" />
                    </div>

                </fieldset>

                <fieldset>
                    <legend>Language</legend>

                    <div className="double-input">
                        <Input name="english"  label="English" />                        
                        <Select 
                        name="english-level"  
                        label="English Level" 
                        options={[
                            { value: '1', label: 'I dont speak'},
                            { value: '2', label: 'I have little knowledge'},
                            { value: '3', label: 'I can keep conversations'},
                            { value: '4', label: 'Fluent'},                           
                        ]}
                        />
                        
                    </div>
                    <div className="double-input">
                        <Input name="other-language"  label="Other Language that you speek" />
                        <Select 
                        name="language-level"  
                        label="Language Level" 
                        options={[
                            { value: '1', label: 'I dont speak'},
                            { value: '2', label: 'I have little knowledge'},
                            { value: '3', label: 'I can keep conversations'},
                            { value: '4', label: 'Fluent'},                           
                        ]}
                        />
                    </div>

                </fieldset>

                <fieldset>
                    <legend>Documentation</legend>
                    
                    <div className="double-input">
                        <Input name="insurance"  label="Insurance Number" />
                        <Input name="utr"  label="UTR Number" />
                    </div>
                    <div className="double-input">
                        <Input name="cscs"  label="CSCS Card Number" />
                        <Input name="cscs type"  label="CSCS Card Type" />
                    </div>

                </fieldset>

                <fieldset>
                    <legend>
                        Your experiences
                        <button type="button" onClick={addNewScheduleItem}>
                            + New experience
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="double-input">
                                <Select
                                    name="function"
                                    label="Function"
                                    options={[
                                        { value: 'Carpentry', label: 'Carpentry'},
                                        { value: 'Bricklaying', label: 'Bricklaying'},
                                        { value: 'Refurbishment', label: 'Refurbishment'},
                                        { value: 'Painting', label: 'Painting'},
                                        { value: 'Eletrics', label: 'Eletrics'},
                                        { value: 'Plumbing', label: 'Plumbing'},
                                        { value: 'HandyMan', label: 'Handy Man'},
                                        { value: 'Gardering', label: 'Gardering'},
                                        { value: 'Motorist', label: 'Motorist'},
                                        { value: 'Cleaner', label: 'Cleaner'},
                                    ]}
                                />
                                <Select 
                                name="experience-level"  
                                label="Experience Level" 
                                options={[
                                    { value: '1', label: 'Up to 1 year'},
                                    { value: '2', label: '1-2 years'},
                                    { value: '3', label: '3-5 years'},
                                    { value: '4', label: 'More than 5 years'},                           
                                ]}
                                />
                            </div>
                        );
                    })}
                    <Textarea name="bio" label="Tell about your experiences" />
                </fieldset>

                <fieldset >

                    <input type="checkbox" id="receive-email" /> I agree to receive information about <b>job opportunities</b> in my <b>email</b><br></br>
                    <input type="checkbox" id="receive-email"/> I agree to receive information about <b>job opportunities</b> in my <b>whatsapp</b>

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

export default WorkerForm;