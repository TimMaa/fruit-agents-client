import { get } from 'svelte/store';

import { agents } from '../store.js';
import { env } from '../environment.js';
import { errorHandler } from './errorService.js';

const addAgent = agentData => {
  fetch(`${env.apiUrl}/agents`, {
    method: 'POST',
    body: agentData
  })
    .then(res => res.json())
    .then(newAgent => agents.set([ ...get(agents), newAgent ]))
    .catch(errorHandler);
}

const deleteAgent = id => {
  fetch(`${env.apiUrl}/agents/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(() => agents.set(get(agents).filter(agent => agent.id !== id)))
    .catch(errorHandler);
}

/**
 * Returns the list of all agents currently registered
 * @returns {Array<{id: string, name: string, avgRating: number, }>} Array of all agents
 */
const getAgents = () => {
  fetch(`${env.apiUrl}/agents`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(agentList => agents.set(agentList))
    .catch(errorHandler);
}

const updateAgent = agentData => {
  fetch(`${env.apiUrl}/agents/${id}`, {
    method: 'PUT',
    body: agentData
  })
    .then(res => res.json())
    .then(() => {
      const agentList = get(agents);
      const modifiedAgentIdx = agentList.findIndex(agent => agent.id === id);
      agentList[modifiedAgentIdx] = agentData;
      agents.set(agentList);
    })
    .catch(errorHandler);
}

export default agentService = {
  addAgent,
  deleteAgent,
  getAgents,
  updateAgent
}