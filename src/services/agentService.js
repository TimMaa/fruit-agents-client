import { get } from 'svelte/store';

import { agents } from '../store.js';
import { env } from '../environment.js';
import { errorHandler } from './errorService.js';
import query from './graphql.js';

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