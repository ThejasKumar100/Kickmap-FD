<script lang="ts">
    import type { PageData } from './$types';
    import { db } from '../../firebaseConfig';
    import { collection, addDoc } from 'firebase/firestore';

    export let data: PageData;
  // TypeScript script will go here
  let eventName: string = '';
  let eventDate: string = '';
  let eventTime: string = '';
  let eventLocation: string = '';
  let eventDescription: string = '';
  let eventRSVPLink: string = '';
  let eventFlyer: File | null = null;
  
  // Function to handle the form submission
  const submitForm = () => {
    const formData = new FormData();
    formData.append('eventName', eventName);
    formData.append('eventDate', eventDate);
    formData.append('eventTime', eventTime);
    formData.append('eventLocation', eventLocation);
    formData.append('eventDescription', eventDescription);
    formData.append('eventRSVPLink', eventRSVPLink);
    
    if (eventFlyer) {
      formData.append('eventFlyer', eventFlyer);
    }
  };

</script>

<style>
  .event-form-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .event-form-header {
    background-color: #EC7524;
    color: white;
    padding: 20px;
    font-size: 24px;
    text-align: center;
  }

  label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }

  .submit-button {
    background-color: #EC7524;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }

  .submit-button:hover {
    background-color: #d15300;
  }
</style>

<div class="event-form-container">
  <div class="event-form-header">
    Tell us more about your event
  </div>
  <form on:submit|preventDefault={submitForm}>
    <label for="eventName">*Name of Event:</label>
    <input id="eventName" type="text" bind:value={eventName} required>

    <label for="eventDate">*Date:</label>
    <input id="eventDate" type="date" bind:value={eventDate} required>

    <label for="eventTime">*Start Time:</label>
    <input id="eventTime" type="time" bind:value={eventTime} required>

    <label for="eventLocation">*Location:</label>
    <input id="eventLocation" type="text" bind:value={eventLocation} required>

    <label for="eventDescription">Description:</label>
    <textarea id="eventDescription" bind:value={eventDescription}></textarea>

    <label for="eventRSVPLink">RSVP Link:</label>
    <input id="eventRSVPLink" type="url" bind:value={eventRSVPLink}>

    <label for="eventFlyer">Digital Flyer/Poster:</label>
    <input id="eventFlyer" type="file">

    <button class="submit-button" type="submit">Submit</button>
  </form>
</div>
