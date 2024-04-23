<script lang="ts">
    import type { PageData } from './$types';
    import { db } from '../../firebaseConfig';
    import { collection, addDoc } from 'firebase/firestore';
    import { getStorage, ref, uploadBytes } from 'firebase/storage'; // Import missing functions


    export let data: PageData;
  // TypeScript script will go here
  let eventName: string = '';
  let eventDate: string = '';
  let eventTime: string = '';
  let eventCategory: string = '';
  let eventHost: string = '';
  let eventSchool: string = '';
  let eventType: string = '';
  let eventLocation: string = '';
  let eventDescription: string = '';
  let eventRSVPLink: string = '';
  let eventFlyer: File | null = null;

  let categories = ['Conference', 'Seminar', 'Workshop', 'Social'];
  let schools = ['School of Engineering', 'School of Business', 'School of Arts'];
  let eventTypes = ['Public', 'Private', 'Online', 'Hybrid'];
  
  function handleFileChange(event: Event) { 
    const input = event.target as HTMLInputElement; 
    if (input.files) {
      eventFlyer = input.files[0];
    }
  }

  // Function to handle the form submission
  const submitForm = async () => {
    try {
      const docRef = await addDoc(collection(db, 'events'), {
        eventName,
        eventDate,
        eventTime,
        eventLocation,
        eventDescription,
        eventRSVPLink,
        eventCategory,
        eventHost,
        eventSchool,
        eventType,

        // TODO: Store path or URL to the file in Firebase Storage
      });
      console.log('Document written with ID: ', docRef.id);
      if (eventFlyer) {
        const storage = getStorage();
        const storageRef = ref(storage, `flyers/${docRef.id}/${eventFlyer.name}`);
        await uploadBytes(storageRef, eventFlyer).then((snapshot) => {
          console.log('Uploaded a file!');
        });

        // TODO: update the document with the flyer's URL
      }

      alert('Event successfully submitted!');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('Error submitting event.');
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
    <input id="eventFlyer" type="file" on:change={handleFileChange}>

    <!-- Inside the form in your existing Svelte component -->
<label for="eventCategory">*Category:</label>
<select id="eventCategory" bind:value={eventCategory} required>
  <option value="" disabled selected>Select category</option>
  <!-- Loop through an array of categories -->
  {#each categories as category}
    <option value="{category}">{category}</option>
  {/each}
</select>

<label for="eventHost">*Organizer:</label>
<input id="eventHost" type="text" bind:value={eventHost} required>

<label for="eventSchool">*School:</label>
<select id="eventSchool" bind:value={eventSchool} required>
  <option value="" disabled selected>Select school</option>
  <!-- Loop through an array of schools -->
  {#each schools as school}
    <option value="{school}">{school}</option>
  {/each}
</select>

<label for="eventType">*Type:</label>
<select id="eventType" bind:value={eventType} required>
  <option value="" disabled selected>Select type</option>
  <!-- Loop through an array of event types -->
  {#each eventTypes as type}
    <option value="{type}">{type}</option>
  {/each}
</select>

    <div>
      <button class="submit-button" type="submit">Submit</button>
    </div>
  </form>
</div>
