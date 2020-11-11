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
                    <legend>Personal informations</legend>

                    <Input name="name"  label="Full Name" />
                    <Input name="avatar"  label="Avatar" />
                    <Input name="whatsapp"  label="Whatsapp" />
                    <Input name="email"  label="E-mail" />
                    <Textarea name="bio" label="Tell about your experiences" />

                </fieldset>

                <fieldset>
                    <legend>About your skills</legend>

                    <Select 
                    name="speciality"  
                    label="Speciality" 
                    options={[
                        { value: 'Bricklaying', label: 'Bricklaying'},
                        { value: 'Refurbishment', label: 'Refurbishment'},
                        { value: 'Carpentry', label: 'Carpentry'},
                        { value: 'HandyMan', label: 'Handy Man'},
                        { value: 'Eletrics', label: 'Eletrics'},
                        { value: 'Plumbing', label: 'Plumbing'},
                        { value: 'Painting', label: 'Painting'},
                        { value: 'Gardering', label: 'Gardering'},
                    ]}
                    />

                    <Select 
                    name="experience"  
                    label="Level of Experience"
                    options={[
                        { value: 'Expert', label: 'Expert'},
                        { value: 'Medium', label: 'Medium'},
                        { value: 'Some', label: 'Some Experience'},
                        { value: 'No', label: 'No Experience'},
                    ]} 
                    />

                </fieldset>

                <fieldset>
                    <legend>
                        Avaible times
                        <button type="button" onClick={addNewScheduleItem}>
                            + New time
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Week day"
                                    options={[
                                        { value: '0', label: 'Sunday'},
                                        { value: '1', label: 'Monday'},
                                        { value: '2', label: 'Tuesday'},
                                        { value: '3', label: 'Wednesday'},
                                        { value: '4', label: 'Thursday'},
                                        { value: '5', label: 'Friday'},
                                        { value: '6', label: 'Satudarday'},
                                    ]}
                                />
                                <Input name="from" label="From" type="time" />
                                <Input name="to" label="To" type="time" />
                            </div>
                        );
                    })}
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