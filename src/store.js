import { writable } from 'svelte/store'
import { agents as mockAgents, ratings as mockRatings, missions as mockMissions } from './mockdata.js';

if(!window.localStorage.getItem('ratings')) window.localStorage.setItem('ratings', JSON.stringify(mockRatings));

const sidebarState = writable(false);

export {
  sidebarState
}