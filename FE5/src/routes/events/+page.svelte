<script lang="ts">
    import type { PageData } from './$types'; 
    import { onMount } from 'svelte';
    import { initializeApp } from 'firebase/app';
    import { getFirestore, collection, getDocs } from 'firebase/firestore';
    import { db } from '../../firebaseConfig';
  
    interface Event {
    title: string;
    description: string;
    location: string;
  }

  export let data: PageData;

// TypeScript script will go here
  let keyword: string = '';
  let selectedSchool: string = '';
  let selectedType: string = '';
  let selectedLocation: string = '';
  let selectedCategory: string = '';
  let events: Event[] = [];

  let q = query(collection(db, 'events'));
  const querySnapshot = await getDocs(q);
  events = querySnapshot.docs.map(doc => doc.data());

  onMount(async () => {
    const eventsCol = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCol);
    events = eventSnapshot.docs.map(doc => doc.data() as Event);
  });
  </script>
  
  <!-- Styling -->
  <style>
    .events-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background-color: #FFF7E6; 
    }
    .event-card {
      background-color: white;
      border: 1px solid #FFA500;
      padding: 20px;
      margin: 10px;
      border-radius: 8px;
    }
    .button-primary {
      /* position: center; */
      margin: 0 auto;
      display: block;
      
      background-color: #FFA500;
      border: none;
      padding: 10px 20px;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  
  <!-- HTML Template -->
  <div class="events-container">
    {#each events as event}
      <div class="event-card">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <span>Location: {event.location}</span>
        <div>
          <button class="button-primary">More Details</button>
        </div>
      </div>
    {/each}
  </div>
