<script lang="ts">
    import type { PageData } from '../$types'; 
    import { onMount } from 'svelte';
    import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
    import { db } from '../../firebaseConfig';
  
    export let data: PageData;
  
    let events: any[] = [];
    
    async function fetchEvents() {
      const eventsCollection = collection(db, 'events');
      const seminarQuery = query(eventsCollection, where("eventCategory", "==", "Seminar"));
      const eventSnapshot = await getDocs(seminarQuery);
      events = eventSnapshot.docs.map(doc => doc.data() as Event);
    }
    
    onMount(fetchEvents);
  </script>
  
  
  <!-- Display the events -->
<!-- Display the events -->
{#each events as event}
  <article class="event">
    <h2>{event.eventName}</h2>
    <p>{event.eventDescription}</p>
    <ul>
      <li>Category: {event.eventCategory}</li>
      <li>Type: {event.eventType}</li>
      <li>Date: {event.eventDate}</li>
      <li>Time: {event.eventTime}</li>
      <li>School: {event.eventSchool}</li>
      <li>Host: {event.eventHost}</li>
      <li>Location: {event.eventLocation}</li>
    </ul>
  </article>
{/each}


<style> 
    .event {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.event h2 {
  color: #333;
}

.event p, .event li {
  color: #666;
}

.event ul {
  list-style-type: none;
  padding: 0;
}

.details-button {
  display: inline-block;
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.details-button:hover {
  background-color: #0056b3;
}

</style>

Message #documentation
