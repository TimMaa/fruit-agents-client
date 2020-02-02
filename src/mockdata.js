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
  { id: '3', date: new Date(), rating: 3 },
  { id: '2', date: new Date(), rating: 4 },
]

export const missions = [
  { id: '1', agentId: '1', start: new Date(), end: new Date() },
  { id: '2', agentId: '3', start: new Date(), end: new Date() },
  { id: '3', agentId: '8', start: new Date(), end: new Date() },
]