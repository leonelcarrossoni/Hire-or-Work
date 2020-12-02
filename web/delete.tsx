{/* <fieldset>
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
                </fieldset> */}






{/* <fieldset>
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
                </fieldset> */}