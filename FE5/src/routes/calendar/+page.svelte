<script lang="ts">
    import { onMount } from 'svelte';
    let currentDate = new Date();
    let selectedDate = new Date();

    type Events = {
        [key: string]: string[];
    };

    const events: Events = {
        '2024-04-18': ['ACM workshop @ 6 pm - Location: ECSW', 'Free Pizza @ 3pm - Location: HH'],
        '2024-04-20': ['Coffee & Internships @ 4 pm - Location: JSOM', 'Smoothie Food Truck @ 2 pm - Location: Plinth'],
    };

    function formatDate(date: Date): string {
        return date.toISOString().slice(0, 10);
    }

    function selectDate(date: string): void {
        selectedDate = new Date(date);
    }

    function handleKeyDown(event: KeyboardEvent, date: string): void {
        if (event.key === 'Enter') {
            selectDate(date);
        }
    }
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
        background-color: white;
    }

    .calendar-container {
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .calendar {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        width: 70%;
        margin-bottom: 20px;
    }

    .day {
        padding: 10px;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        cursor: pointer;
    }

    .day:hover {
        background-color: #f0f0f0;
    }

    button.day {
        border: none;
        background: none;
        cursor: pointer;
    }

    .events {
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 20px;
        width: 70%;
    }

    .event {
        margin: 5px 0;
        padding: 10px;
        background-color: #e8e8e8;
        border-left: 5px solid #EC7524;
    }
</style>

<body>
<div class="navbar">
    <div>Calendar Events</div>
</div>

<div class="calendar-container">
    <div class="calendar">
        {#each Array(30) as _, i}
            <button class="day" 
                    on:click={() => selectDate(formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), i+1)))} 
                    on:keydown={(event) => handleKeyDown(event, formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), i+1)))}
                    tabindex="0">
                {i+1}
            </button>
        {/each}
    </div>
    <div class="events">
        <h2>Events on {formatDate(selectedDate)}</h2>
        {#if events[formatDate(selectedDate)]}
            {#each events[formatDate(selectedDate)] as event}
                <div class="event">{event}</div>
            {/each}
        {:else}
            <p>No events today.</p>
        {/if}
    </div>
</div>
</body>
