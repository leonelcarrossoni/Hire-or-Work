import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';

function WorkerForm() {
    const history = useHistory();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [Email, setE_mail] = useState('');
    const [tel, setTel] = useState('');
    const [birthday, setBirthday] = useState('');
    const [birthplace, setBirthplace] = useState('');

    const [zipcode, setZipcode] = useState('');
    const [homenumber, setHomenumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [englishlevel, setEnglishlevel] = useState('');
    const [otherlanguage, setOtherlanguage] = useState('');
    const [languagelevel, setLanguagelevel] = useState('');

    const [insurance, setInsurance] = useState('');
    const [utr, setUtr] = useState('');
    const [cscs, setCscs] = useState('');
    const [cscstype, setCscstype] = useState('');
    const [bio, setBio] = useState('');

    const [receiveemail, setReceiveemail] = useState('');
    const [receivewhats, setReceivewhats] = useState('');
    
    const [scheduleItems, setScheduleItems] = useState([
        { occupation: 0, experiencelevel: ''},
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, //Copia todos os items do array scheduleItems
            {occupation: 0, //Incluí as informações do novo schedule
            experiencelevel: '',
            }
        ]);
    }

    function setOccupationItemValue(position: number, field:string, value:string) {
        const updateOccupationItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updateOccupationItems);
    }

    function handleCreateUser(e: FormEvent) {
        e.preventDefault();

        api.post('users', {
            user, 
            email,
            password,

            name, 
            lastname, 
            Email, 
            tel, 
            birthday,
            birthplace,

            zipcode, 
            homenumber, 
            street, 
            city, 
            state,

            englishlevel,
            otherlanguage,
            languagelevel,

            insurance,
            utr,
            cscs,
            cscstype,
            bio,

            receiveemail,
            receivewhats,

            occupations: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push ('/'); //Para direcionar p/ pagina inicial
            
        }).catch(() => {
            alert('Erro no cadastro!')
        })
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="We're happy in help you find a new job." 
            description="The first step is to tell us a little more about you."
            />

            <main>
                <form onSubmit={handleCreateUser}>
                    <fieldset>
                        <legend>Login</legend>
                            <Input 
                                name="user"  
                                label="User" 
                                value={user} 
                                onChange={(e) => { setUser(e.target.value) }} 
                            />
                            <Input 
                                type="email" 
                                name="email"  
                                label="E-mail"
                                value={email} 
                                onChange={(e) => { setEmail(e.target.value) }}  
                            />
                            <Input 
                                type="password" 
                                name="password"  
                                label="Password"
                                value={password} 
                                onChange={(e) => { setPassword(e.target.value) }}  
                            />

                    </fieldset>

                    <fieldset>
                        <legend>Personal informations</legend>

                        <div className="double-input">
                            <Input 
                                name="name"  
                                label="Name"
                                value={name} 
                                onChange={(e) => { setName(e.target.value) }}  
                            />
                            <Input 
                                name="lastname"  
                                label="Last Name" 
                                value={lastname} 
                                onChange={(e) => { setLastname(e.target.value) }} 
                            />
                        </div>
                        <div className="double-input">
                            <Input 
                                name="Email"  
                                label="E-mail"
                                value={Email} 
                                onChange={(e) => { setE_mail(e.target.value) }} 
                            />
                            <Input 
                                type="tel" 
                                name="tel"  
                                label="Phone Number"
                                value={tel} 
                                onChange={(e) => { setTel(e.target.value) }} 
                                pattern="([0-9]{4})-([0-9]{6})" 
                            />
                        </div>
                        <div className="double-input">
                            <Input 
                                name="birthday"  
                                label="Date of Birth"
                                value={birthday} 
                                onChange={(e) => { setBirthday(e.target.value) }} 
                            />
                            <Input 
                                name="birthplace"  
                                label="Birthplace" 
                                value={birthplace} 
                                onChange={(e) => { setBirthplace(e.target.value) }} 
                            />
                        </div>                    

                    </fieldset>

                    <fieldset>
                        <legend>Adress</legend>

                        <div className="double-input">
                            <Input 
                                name="zipcode"  
                                label="Zip Code"
                                value={zipcode} 
                                onChange={(e) => { setZipcode(e.target.value) }} 
                            />
                            <Input 
                                name="homenumber"  
                                label="Number"
                                value={homenumber} 
                                onChange={(e) => { setHomenumber(e.target.value) }} 
                            />
                        </div>
                        <Input 
                            name="street"  
                            label="Street Adress"
                            value={street} 
                            onChange={(e) => { setStreet(e.target.value) }} 
                        />
                        <div className="double-input">
                            <Input 
                                name="city"  
                                label="City"
                                value={city} 
                                onChange={(e) => { setCity(e.target.value) }} 
                            />
                            <Input 
                                name="state"  
                                label="State" 
                                value={state} 
                                onChange={(e) => { setState(e.target.value) }} 
                            />
                        </div>

                    </fieldset>

                    <fieldset>
                        <legend>Language</legend>

                        <div className="double-input">
                            <Input 
                                name="english"  
                                label="English"
                                
                            />                        
                            <Select 
                                name="englishlevel"  
                                label="English Level"
                                value={englishlevel} 
                                onChange={(e) => { setEnglishlevel(e.target.value) }} 
                                options={[
                                    { value: '1', label: 'I dont speak'},
                                    { value: '2', label: 'I have little knowledge'},
                                    { value: '3', label: 'I can keep conversations'},
                                    { value: '4', label: 'Fluent'},                           
                                ]}
                            />
                            
                        </div>
                        <div className="double-input">
                            <Input 
                                name="otherlanguage"  
                                label="Other Language that you speek"
                                value={otherlanguage} 
                                onChange={(e) => { setOtherlanguage(e.target.value) }} 
                            />
                            <Select 
                                name="languagelevel"  
                                label="Language Level" 
                                value={languagelevel} 
                                onChange={(e) => { setLanguagelevel(e.target.value) }} 
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
                            <Input 
                                name="insurance"  
                                label="Insurance Number"
                                value={insurance} 
                                onChange={(e) => { setInsurance(e.target.value) }} 
                            />
                            <Input 
                                name="utr"  
                                label="UTR Number"
                                value={utr} 
                                onChange={(e) => { setUtr(e.target.value) }}  
                            />
                            
                        </div>
                        <div className="double-input">
                            <Input 
                                name="cscs"  
                                label="CSCS Card Number"
                                value={cscs} 
                                onChange={(e) => { setCscs(e.target.value) }} 
                            />
                            <Input 
                                name="cscstype"  
                                label="CSCS Card Type" 
                                value={cscstype} 
                                onChange={(e) => { setCscstype(e.target.value) }} 
                            />
                        </div>

                    </fieldset>

                    <fieldset>
                        <legend>
                            Your experiences
                            <button type="button" onClick={addNewScheduleItem}>
                                + New experience
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.occupation} className="double-input">
                                    <Select
                                        name="occupation"
                                        label="Occupation"
                                        value = {scheduleItem.occupation}
                                        onChange={e => setOccupationItemValue(index, 'occupation', e.target.value)}
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
                                    name="experiencelevel"  
                                    label="Experience Level"
                                    value = {scheduleItem.experiencelevel}
                                    onChange={e => setOccupationItemValue(index, 'experiencelevel', e.target.value)}
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
                        <Textarea 
                            name="bio" 
                            label="Tell about your experiences" 
                            value={bio} 
                            onChange={(e) => { setBio(e.target.value) }} 
                        />
                    </fieldset>

                    <fieldset >

                        {/* Verificar necessidade de icluir 'defaultChecked' */}
                        <input 
                            type="checkbox" 
                            name="receiveemail"
                            value={receiveemail} 
                            onChange={(e) => { setReceiveemail(e.target.value) }} 
                        /> I agree to receive information about <b>job opportunities</b> in my <b>email</b><br></br>
                        <input 
                            type="checkbox" 
                            name="receivewhats"
                            value={receivewhats} 
                            onChange={(e) => { setReceivewhats(e.target.value) }} 
                        /> I agree to receive information about <b>job opportunities</b> in my <b>whatsapp</b>

                    </fieldset>                

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Important warning"/>
                            Important! <br />
                            Fill in all the registration fields.
                        </p>
                        <button type="submit">
                            Save registration
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default WorkerForm;