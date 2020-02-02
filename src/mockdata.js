import moment from "moment"

export const agents = [
  { id: '1', name: 'Player One', avgRating: 2.5 },
  { id: '2', name: 'Player Two', avgRating: 5 },
  { id: '3', name: 'Player Three', avgRating: null },
  { id: '8', name: 'Player Eight', avgRating: 4.2 },
  { id: '42', name: 'Player Fortytwo', avgRating: 4.2 },
  { id: '73', name: 'Player Seventythree', avgRating: 4.2 },
  { id: '1000', name: 'Player Onethousand', avgRating: 4.2 },
  { id: '0', name: 'Player Zero', avgRating: 4.2 },
]

export const ratings = [
  { id: '3', date: moment(), rating: 3 },
  { id: '2', date: moment(), rating: 4 },
]

export const missions = [
  { id: '1', agentId: '1', start: moment().subtract(14, 'd'), end: moment().subtract(7, 'd') },
  { id: '2', agentId: '3', start: moment().subtract(7, 'd'), end: moment() },
  { id: '3', agentId: '8', start: moment(), end: moment().subtract(7, 'd') },
]