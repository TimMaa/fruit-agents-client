import { writable } from 'svelte/store'
import { agents as mockAgents, ratings as mockRatings, missions as mockMissions } from './mockdata.js';

if(!window.localStorage.getItem('ratings')) window.localStorage.setItem('ratings', JSON.stringify(mockRatings));

const sidebarState = writable(false);
const agents = writable(mockAgents);
const ratings = writable(JSON.parse(window.localStorage.getItem('ratings') || []));
const missions = writable(mockMissions);


export {
  agents,
  missions,
  ratings,
  sidebarState
}