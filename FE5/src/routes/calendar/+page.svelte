<script lang="ts">
    import { onMount } from 'svelte';
    let currentDate = new Date();
    let selectedDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

    function incrementMonth(): void {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
    }

    function decrementMonth(): void {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
    }

    function daysInMonth(month: number, year: number): number {
        return new Date(year, month + 1, 0).getDate();
    }

    function startDayOfMonth(month: number, year: number): number {
        return new Date(year, month, 1).getDay();
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

    .navbar button {
    background-color: orange;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 5px;
}

.navbar button:hover {
    background-color: darkorange;
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

    .day:hover, .day.selected {
        background-color: #EC7524;
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

<div class="navbar">
    <div>Calendar Events</div>
    <div>
        <button on:click="{decrementMonth}">Prev</button>
        <span>{monthNames[currentMonth]} {currentYear}</span>
        <button on:click="{incrementMonth}">Next</button>
    </div>
</div>

<div class="calendar-container">
    <div class="calendar">
        {#each dayNames as dayName}
            <div>{dayName}</div>
        {/each}
        {#each Array(startDayOfMonth(currentMonth, currentYear)) as _, i}
            <div class="day"></div> <!-- Empty cells for days before the first of the month -->
        {/each}
        {#each Array(daysInMonth(currentMonth, currentYear)) as _, day (day)}
            <div class="day" class:selected={formatDate(new Date(currentYear, currentMonth, day + 1)) === formatDate(selectedDate)}
                 on:click={() => selectDate(formatDate(new Date(currentYear, currentMonth, day + 1)))}
                 on:keydown={event => handleKeyDown(event, formatDate(new Date(currentYear, currentMonth, day + 1)))}
                 tabindex="0">
                {day + 1}
            </div>
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
