<script lang="ts">
  import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
  import { db } from '../../firebaseConfig';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let loginError = false;

  async function login() {
    try {
      const q = query(collection(db, 'accounts'), where('email', '==', email), where('password', '==', password));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        loginError = true; // No matching account found
      } else {
        // Handle successful login
        loginError = false;
        console.log('Login successful:', querySnapshot.docs.map(doc => doc.data()));
        goto('/createEvent');
      } 
    } catch (err) {
      loginError = true;
      console.error('Login failed:', err);
    }
  }

  onMount(() => {
    console.log("Login component mounted");
  });
</script>

<style>
  .login-form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .input-field {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .submit-button {
    padding: 10px 15px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }

  .error {
    color: red;
  }
</style>

<div class="login-form">
  <input type="email" class="input-field" bind:value={email} placeholder="Email">
  <input type="password" class="input-field" bind:value={password} placeholder="Password">
  <button on:click={login} class="submit-button">Log In</button>
  {#if loginError}
    <p class="error">Invalid email or password.</p>
  {/if}
</div>
