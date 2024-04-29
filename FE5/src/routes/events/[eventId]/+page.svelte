<script lang="ts">
  export let eventTitle: string;
  export let eventDateTime: string; // Ensure this is in ISO format
  export let hostOrganization: string;
  export let aboutEvent: string;
  export let location: string;
  export let imageUrl: string;

  import { page } from '$app/stores';
  const { eventId } = $page.params;

  // Define the function outside of the reactive context
  function getEndTime(dateTime: string): string {
      const eventDate = new Date(dateTime);
      eventDate.setHours(eventDate.getHours() + 1);
      return eventDate.toISOString();
  }

  // Use a reactive declaration to recalculate eventEndTime when eventDateTime changes
  $: eventEndTime = eventDateTime ? getEndTime(eventDateTime) : '';

  const saveEvent = (): void => {
    console.log("Event saved");
  };

  const registerForEvent = (): void => {
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
      <div class="event-datetime">
        Start: {eventDateTime ? new Date(eventDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : 'TBA'}<br>
        End: {eventEndTime ? new Date(eventEndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : 'TBA'}
      </div>      
      <div class="google-map">
          <!-- Existing map iframe -->
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