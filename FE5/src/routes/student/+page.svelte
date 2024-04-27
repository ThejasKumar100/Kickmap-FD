<script lang="ts">
    import { getFirestore, collection, query, where, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
    import { db } from '../../firebaseConfig';
    import { onMount } from 'svelte';
    import { isLoggedIn, userDocId } from '$lib/stores/userStore'; // Import the stores

    let email = '';
    let password = '';
    let newPassword = '';
    let loginError = false;
  
    async function login() {
      try {
        const q = query(collection(db, 'accounts'), where('email', '==', email), where('password', '==', password));
        const querySnapshot = await getDocs(q);
  
        if (querySnapshot.empty) {
          loginError = true;
          isLoggedIn.set(false);
          userDocId.set(null);
        } else {
          loginError = false;
          isLoggedIn.set(true);
          userDocId.set(querySnapshot.docs[0].id);
          console.log('Login successful:', querySnapshot.docs.map(doc => doc.data()));
          // TODO: Redirect
        }
      } catch (err) {
        loginError = true;
        isLoggedIn.set(false);
        console.error('Login failed:', err);
      }
    }

    async function changePassword() {
      const id = $userDocId;
      if (!id) {
        console.error('No user logged in');
        return;
      }
      const userDocRef = doc(db, 'accounts', id);
      await updateDoc(userDocRef, {
        password: newPassword
      });
      console.log('Password changed successfully');
    }

    async function deleteAccount() {
      const id = $userDocId;
      if (!id) {
        console.error('No user logged in');
        return;
      }
      await deleteDoc(doc(db, 'accounts', id));
      console.log('Account deleted successfully');
      isLoggedIn.set(false); // Log the user out after account deletion
      userDocId.set(null);
      // TODO: Redirect or handle post-deletion UI
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
  
    .input-field, .new-password-field {
      margin-bottom: 10px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .submit-button, .password-button, .delete-button {
      padding: 10px 15px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .submit-button:hover, .password-button:hover, .delete-button:hover {
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
    {#if loggedIn}
      <input type="password" class="new-password-field" bind:value={newPassword} placeholder="New Password">
      <button on:click={changePassword} class="password-button">Change Password</button>
      <button on:click={deleteAccount} class="delete-button">Delete Account</button>
    {/if}
    {#if loginError}
      <p class="error">Invalid email or password.</p>
    {/if}
  </div>
  
  