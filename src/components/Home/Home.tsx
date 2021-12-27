import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/lab';
import DatePicker from '@mui/lab/DatePicker';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import './Home.scss';

export default function Home() {
  const [medicalArea, setMedicalArea] = useState('');
  const [title, setTitile] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState<any>(null);
  const [endTime, setEndTime] = useState<any>(null);

  const changeValue = (event: any) => {
    event.preventDefault();
    setMedicalArea(event.target.value);
  };

  const handleSubmitEvent = (event: any) => {
    event.preventDefault();

    // here we should have like an array where to add multiple events
    // but for the example now i'm saving only as an object
    const nObj: any = Object.assign(
      {},
      { title, description, startTime, endTime, date, doctor: medicalArea }
    );
    if (nObj) {
      localStorage.setItem('events', JSON.stringify(nObj));
    }
  };

  return (
    <div className='home'>
      <h1>Manage appointments</h1>
      <div className='manager'>
        <div className='form'>
          <h2>Add new event </h2>
          <form onSubmit={handleSubmitEvent}>
            <div className='group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                name='title'
                id='title'
                required
                maxLength={50}
                onChange={event => setTitile(event.target.value)}
              />
            </div>
            <div className='group'>
              <label htmlFor='desc'>Description</label>
              <textarea
                name='description'
                id='desc'
                required
                maxLength={500}
                onChange={event => setDescription(event.target.value)}
              ></textarea>
            </div>
            <div className='group'>
              <label htmlFor='desc'>Attendees</label>
            </div>
            <div className='group'>
              <label htmlFor='name'>Date</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={date}
                  onChange={value => setDate(value)}
                  renderInput={(params: JSX.IntrinsicAttributes) => (
                    <TextField {...params} />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className='group'>
              <label></label>
              <TextField
                id='startTime'
                label='Start Time'
                type='time'
                required
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ width: 150 }}
                name='startTime'
                onChange={event => setStartTime(event.target.value)}
              />
            </div>
            <div className='group'>
              <TextField
                id='endTime'
                label='End time'
                type='time'
                required
                InputLabelProps={{
                  shrink: true
                }}
                sx={{ width: 150 }}
                name='endTime'
                onChange={event => setEndTime(event.target.value)}
              />
            </div>
            <div className='group'>
              <InputLabel id='label'>Doctor Name</InputLabel>
              <Select
                labelId='label'
                id='label'
                value={medicalArea}
                label='Medical Area'
                onChange={changeValue}
              >
                <MenuItem value={'1'}>Doctor 1</MenuItem>
                <MenuItem value={'2'}>Doctor 2</MenuItem>
                <MenuItem value={'3'}>Doctor 3</MenuItem>
              </Select>
            </div>
            <input type='submit' value='Submit' />
          </form>
        </div>
        <div className='list'>
          <h2>List of events</h2>
          <p>
            Display list of events from the local stoarge and add remove and
            update
          </p>
        </div>
      </div>

      <div className='manager'></div>
    </div>
  );
}
