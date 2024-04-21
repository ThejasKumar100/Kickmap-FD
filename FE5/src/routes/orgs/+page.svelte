<script lang="ts">
    import { onMount } from 'svelte';
    import { initializeApp } from 'firebase/app';
    import { getFirestore, collection, getDocs } from 'firebase/firestore';
    import { db } from '../../firebaseConfig';
  
    interface Event {
    title: string;
    description: string;
    //date: string;
    location: string;
  }

  let events: Event[] = [];
  
  onMount(async () => {
    const eventsCol = collection(db, 'orgs');
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
        <span>{event.location}</span>
        <button class="button-primary">More Details</button>
      </div>
    {/each}
  </div>
  