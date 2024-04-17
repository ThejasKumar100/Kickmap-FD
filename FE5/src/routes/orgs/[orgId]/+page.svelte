<script lang="ts">
    // import type { PageData } from './$types';
    // export let data: PageData;

    import { page } from '$app/stores';
    // const { orgId } = $page.params.orgId;
    const { orgId } = $page.params;
    let profileName = 'org';
    let profileEmail = 'org@example.com';
    let profileYrEst = '2016';
    let profileDescription = 'Brief bio or description goes here...';

    function saveChanges() {
        alert('Changes saved successfully!');
    }

</script>

<!-- Testing accessing the ID: -->
<!-- <h1>This is org ID: {orgId}</h1> -->

<style>
    
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: white; 
    }

    .navbar {
        background-color: #EC7524;
        padding: 20px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* .burger-menu {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    } */

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
        background-color: #EC7524; 
        color: white; 
        border: none; 
        padding: 10px 20px; 
        border-radius: 4px; 
        cursor: pointer; 
        display: block; 
        margin: 20px auto; 
    }
</style>

<div class="navbar">
    <!-- <div class="burger-menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div> -->
    <div class="page-name">Organization Profile</div>
</div>

<div class="profile-container">
    <div class="profile-info">
        <div class="profile-label">Organization Name:</div>
        <div class="info-box" contenteditable="true">{orgId}</div>
    </div>
    <div class="profile-info">
        <div class="profile-label">Email:</div>
        <div class="info-box" contenteditable="true">{profileEmail}</div>
    </div>
    <div class="profile-info">
        <div class="profile-label">Year Established:</div>
        <div class="info-box" contenteditable="true">{profileYrEst}</div>
    </div>
    <div class="profile-info">
        <div class="profile-label">Description of org:</div>
        <textarea class="profile-description" bind:value={profileDescription}></textarea>
    </div>

    <button id="saveChangesButton" on:click={saveChanges}>Save Changes</button>
</div>