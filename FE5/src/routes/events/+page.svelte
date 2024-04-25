import type { PageData } from '../$types'; 
import { onMount } from 'svelte';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';