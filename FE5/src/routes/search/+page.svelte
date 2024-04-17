<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
  // TypeScript script will go here
  let eventName: string = '';
  let eventDate: string = '';
  let eventTime: string = '';
  let eventLocation: string = '';
  let eventDescription: string = '';
  let eventRSVPLink: string = '';
  
  // Function to handle the form submission
  const submitForm = () => {
    // Implement form submission logic here
    console.log('Form submitted');
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

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #ff8c00;}
</style>

<div class="event-search-container">
  <div class="event-form-header">
    Search Events
  </div>

  <form on:submit|preventDefault={submitForm}>
    <label for="eventName">Keyword:</label>
    <input id="eventName" type="text" bind:value={eventName} required>

  <label for="eventName">School:</label>
    <div class="dropdown">
        <button class="dropbtn">Select an option:</button>
        <div class="dropdown-content">
            <a href="#">University of Texas at Dallas</a>
        </div>
      </div>

  <label for="eventName">Type:</label>

  <div class="dropdown">
   <button class="dropbtn">Type</button>
    <div class="dropdown-content">
            <a href="#">Educational</a>
            <a href="#">Fundraiser</a>
        </div>
   </div>

  <label for="eventName">Location:</label>

  <div class="dropdown">
   <button class="dropbtn">Select an option:</button>
    <div class="dropdown-content">
            <a href="#">ECSS</a>
            <a href="#">ECSW</a>
            <a href="#">JSOM</a>
        </div>
   </div>

  <label for="eventName">Begin Time:</label>
  <div class="dropdown">
   <button class="dropbtn">Select an option:</button>
    <div class="dropdown-content">
            <a href="#">8:00 a.m.</a>
            <a href="#">9:00 a.m.</a>
            <a href="#">10:00 a.m.</a>
            <a href="#">11:00 a.m.</a>
            <a href="#">12:00 p.m.</a>
            <a href="#">1:00 p.m.</a>
            <a href="#">2:00 p.m.</a>
            <a href="#">3:00 p.m.</a>
            <a href="#">4:00 p.m.</a>
            <a href="#">5:00 p.m.</a>
            <a href="#">6:00 p.m.</a>
            <a href="#">7:00 p.m.</a>
            <a href="#">8:00 p.m.</a>
        </div>
 </div>

 <label for="eventName">End Time:</label>
  <div class="dropdown">
   <button class="dropbtn">Select an option:</button>
    <div class="dropdown-content">
            <a href="#">8:00 a.m.</a>
            <a href="#">9:00 a.m.</a>
            <a href="#">10:00 a.m.</a>
            <a href="#">11:00 a.m.</a>
            <a href="#">12:00 p.m.</a>
            <a href="#">1:00 p.m.</a>
            <a href="#">2:00 p.m.</a>
            <a href="#">3:00 p.m.</a>
            <a href="#">4:00 p.m.</a>
            <a href="#">5:00 p.m.</a>
            <a href="#">6:00 p.m.</a>
            <a href="#">7:00 p.m.</a>
            <a href="#">8:00 p.m.</a>
        </div>
 </div>

  <label for="eventName">Category:</label>
  <div class="dropdown">
        <button class="dropbtn">Select an option:</button>
        <div class="dropdown-content">
            <a href="#">CS</a>
            <a href="#">Business</a>
        </div>
    </div>
<br />
    <button class="submit-button" type="submit">Submit</button>
  </form>
</div>
