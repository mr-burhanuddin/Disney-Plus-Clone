const API_KEY = "ac196e696b2a13ab500b109e3278d0a5";
const requests = {
  fetchDisney: `/list/5905?page=1&api_key=${API_KEY}`,
  fetchPixar: `/list/9095?page=1&api_key=${API_KEY}`,
  fetchMarvel: `/list/9387?page=1&api_key=${API_KEY}`,
  fetchNational: `/discover/tv?api_key=${API_KEY}&with_network=43`,
};

export default requests;
