<script lang="ts">
    export let eventTitle: string;
    export let eventDateTime: string;
    export let hostOrganization: string;
    export let aboutEvent: string;
    export let location: string;
    export let imageUrl: string; // URL to the event image or flyer

    import { page } from '$app/stores';
    const { eventId } = $page.params;

  
    // Placeholder functions for button interactions
    const saveEvent = () => {
      console.log("Event saved");
    };
  
    const registerForEvent = () => {
      console.log("Registered for event");
    };

  </script>
  
  <style>
    .event-page-container {
      font-family: 'Arial', sans-serif;
      display: grid;
      grid-template-columns:2fr 1fr;
      gap: 20px;
    }
  
    .event-info {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
    .event-title {
      font-size: 2em;
      margin-bottom: 0.5em;
    }
  
    .event-datetime {
      margin-bottom: 2em;
      color: #666;
    }

    .google-map {
     padding-bottom: 50%;
     position: relative;
    }

    .google-map iframe {
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        position: absolute;
    }
  
   /* .map-view {
      width: 100%;
      height: 200px;
      background-color: #ccc;
      /* Placeholder for actual map view 
      text-align: center;
      line-height: 200px;
      margin-bottom: 20px;
    }*/

    .about-event,
    .location-info {
      margin-bottom: 1em;
    }
  
    .host-info {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
  
    .host-logo {
      width: 100px;
      height: 100px;
      background-color: #ccc;
      /* Placeholder for actual logo */
      margin-bottom: 20px;
    }
  
    .event-flyer {
      width: 100%;
      height: 300px;
      background-color: #eee;
      /* Placeholder for actual flyer image */
      margin-bottom: 20px;
    }
  
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 10px;
    }

    .save-button {
      background-color: white;
      color: #EC7524;
      border: 2px solid black;
      border-color: #EC7524;
    }
  
    .register-button {
      background-color: #EC7524;
      color: white;
    }
  </style>
  
  <div class="event-page-container">
    <div class="event-info">
      <div class="event-title">{eventTitle}</div>
      <div class="event-datetime">{eventDateTime}</div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <div class="google-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2344.131842429011!2d-96.75440184300965!3d32.98710984088319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21ff4fd32b6b%3A0x47bf5a0a77a83491!2sTI%20Auditorium!5e0!3m2!1sen!2sus!4v1713119821660!5m2!1sen!2sus" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="about-event">
        <strong>About the Event:</strong>
        <p>{aboutEvent}</p>
      </div>
      <div class="location-info">
        <strong>Location:</strong>
        <p>{location}</p>
      </div>
    </div>
  
    <div class="host-info">
      <div class="host-logo"></div>
      <div class="host-organization">{hostOrganization}</div>
      <button class="save-button" on:click={saveEvent}>Save Event</button>
      <button class="register-button" on:click={registerForEvent}>Register</button>
      <div class="event-flyer" style="background-image: url({imageUrl});">
        No image provided.
      </div>
    </div>
  </div>