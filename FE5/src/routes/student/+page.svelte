<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    let profileName = 'student';
    let profileEmail = 'student@example.com';
    let major = 'Computer Science';
    let year = 'Junior';
    let description = 'Brief bio or description goes here...';

    function saveChanges() {
        // You can add code here to save the changes
        alert('Changes saved successfully!');
    }

</script>

<style>
    /* Add your CSS styles here */
    .navbar {
        background-color: #EC7524;
        padding: 20px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: white; /* Set background color to white */
    }

    .burger-menu {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .bar {
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 3px 0;
    }

    .page-name {
        font-size: 20px;
        font-weight: bold;
        margin: 0 auto;
    }

    .profile-container {
        background: #fff;
        padding: 80px;
        margin: 0 auto;
        width: 300px;
    }

    .profile-photo {
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
    }

    .profile-photo img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }

    .profile-info {
        margin-bottom: 20px;
    }

    .profile-label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
        color: #333;
    }

    .info-box {
        border: 1px solid #ccc;
        padding: 10px;
        background-color: #f9f9f9;
        color: #555;
        display: block;
    }

    .profile-description {
        width: 100%;
        height: 120px;
        border: 1px solid #ccc;
        padding: 10px;
        box-sizing: border-box;
        background-color: #f9f9f9;
        color: #555;
        margin-bottom: 20px;
        resize: vertical;
    }

    #saveChangesButton {
        background-color: #EC7524; /* Orange color */
        color: white; /* Text color */
        border: none; /* Remove default button border */
        padding: 10px 20px; /* Add padding for better appearance */
        border-radius: 4px; /* Add rounded corners */
        cursor: pointer; /* Change cursor on hover */
        display: block; /* Ensure the button takes up full width */
        margin: 20px auto; /* Center the button horizontally */
    }
</style>

<body>
<div class="navbar">
    <div class="burger-menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <div class="page-name">Student Profile</div>
</div>

<div class="profile-container">
    <div class="profile-photo">
        <img src="https://research.utdallas.edu/app/themes/utdresearchtheme/assets/images/logo.png?last_modified=1667557382" alt="Profile Photo">
    </div>
    <div class="profile-info">
        <div class="profile-label">Student Name:</div>
        <div class="info-box">{profileName}</div>
    </div>
    <div class="profile-info">
        <div class="profile-label">Student Email:</div>
        <div class="info-box">{profileEmail}</div>
    </div>
    <div class="profile-info">
        <div class="profile-label">Major:</div>
        <div class="info-box">{major}</div>
    </div>
    <div class="profile-info">
        <div class="profile-label">Year:</div>
        <div class="info-box">{year}</div>
    </div>
    <div class="profile-info">
        <div class="profile-label">Description:</div>
        <textarea class="profile-description" bind:value={description}></textarea>
    </div>
    
    
</div>
</body>

