<script lang="ts">
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import { db } from '../../firebaseConfig';
    import { collection, addDoc } from 'firebase/firestore';
    
    export let data: PageData;
    let profileName = '';
    let profileEmail = '';
    let major = '';
    let year = '';
    let description = '';
    const years = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

    async function saveChanges() {
        const profileData = {
            name: profileName,
            email: profileEmail,
            major: major,
            year: year,
            description: description
        };
        try {
            await addDoc(collection(db, "student"), profileData);
            alert("Your information has been saved!");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to save data.");
        }
    };

</script>

<style>
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
            <label class="profile-label">Student Name:</label>
            <input class="info-box" bind:value={profileName} placeholder="Enter your name">
        </div>
        <div class="profile-info">
            <label class="profile-label">Student Email:</label>
            <input class="info-box" bind:value={profileEmail} type="email" placeholder="Enter your email">
        </div>
        <div class="profile-info">
            <label class="profile-label">Major:</label>
            <input class="info-box" bind:value={major} placeholder="Enter your major">
        </div>
        <div class="profile-info">
            <label class="profile-label">Year:</label>
            <select class="info-box" bind:value={year}>
                {#each years as y}
                    <option value={y}>{y}</option>
                {/each}
            </select>
        </div>
        <div class="profile-info">
            <label class="profile-label">Description:</label>
            <textarea class="profile-description" bind:value={description}></textarea>
        </div>
        
        <button id="saveChangesButton" on:click={saveChanges}>Save Changes</button>
    </div>
    </body>
