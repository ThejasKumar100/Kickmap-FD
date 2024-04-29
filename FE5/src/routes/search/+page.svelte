<script lang="ts">
  import type { PageData } from '../$types'; 
  import { onMount } from 'svelte'; 
  import { db } from '../../firebaseConfig';
  import { collection, query, where, getDocs } from 'firebase/firestore';


    export let data: PageData;
  // TypeScript script will go here
  let keyword: string = '';
  let selectedSchool: string = '';
  let selectedType: string = '';
  let selectedLocation: string = '';
  let selectedCategory: string = '';
  let events: any[] = [];

  // Function to handle the form submission
  const searchEvents = async () => {
    let q = query(collection(db, 'events'));
    if (keyword) {
      q = query(q, where("eventName", "==", keyword));
    }
    if (selectedSchool) {
      q = query(q, where("eventSchool", "==", selectedSchool));
    }
    if (selectedType) {
      q = query(q, where("eventType", "==", selectedType));
    }
    if (selectedLocation) {
      q = query(q, where("eventLocation", "==", selectedLocation));
    }
    if (selectedCategory) {
      q = query(q, where("eventCategory", "==", selectedCategory));
    }

    if (q == null) alert('Error submitting event.');

    const querySnapshot = await getDocs(q);
    events = querySnapshot.docs.map(doc => doc.data());
  };
</script>

<style>
  .event-search-container {
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
    background-color: #FFA500;
  }

  .dropbtn {
  background-color: #d2c8e0;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  width: 950px;
  height: 50px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 950px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #ff8c00;}


</style>

<div class="event-search-container">
  <div class="event-form-header">
    Search Events
  </div>

  <form on:submit|preventDefault={searchEvents}>
    <label for="keyword">Keyword:</label>
    <input id="keyword" type="text" bind:value={keyword}>

    <label for="school">School:</label>
    <select id="school" bind:value={selectedSchool}>
      <option value="">All Schools</option>
      <option value="University of Texas at Dallas">University of Texas at Dallas</option>
      <!-- Add other options here -->
    </select>

    <label for="type">Type:</label>
    <select id="type" bind:value={selectedType}>
      <option value="">All Types</option>
      <option value="Educational">Educational</option>
      <option value="Fundraiser">Fundraiser</option>
      <!-- Add other options here -->
    </select>

    <label for="location">Location:</label>
    <select id="location" bind:value={selectedLocation}>
      <option value="">All Locations</option>
      <option value="ECSS">ECSS</option>
      <option value="ECSW">ECSW</option>
      <option value="JSOM">JSOM</option>
      <!-- Add other options here -->
    </select>

    <label for="category">Category:</label>
    <select id="category" bind:value={selectedCategory}>
      <option value="">All Categories</option>
      <option value="CS">Computer Science</option>
      <option value="Business">Business</option>
      <!-- Add other options here -->
    </select>

    <button class="submit-button" type="submit">Search</button>
  </form>

  <!-- Display search results -->
  {#each events as event}
    <div>
      <h3>{event.eventName}</h3>
      <p>{event.eventDate}</p>
      <p>{event.eventLocation}</p>
      <p>{event.eventDescription}</p>
      <p>{event.eventCategory}</p>
      <p>{event.eventRSVPLink}</p>
      <p>{event.eventSchool}</p>
      <p>{event.eventTime}</p>
      <p>{event.eventType}</p>

    </div>
  {/each}
</div>
