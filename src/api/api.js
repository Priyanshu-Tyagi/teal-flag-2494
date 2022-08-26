import axios from "axios";

export function getAllActivewear(params = {}) {
  return axios.get(
    `https://nordstromrackproject.herokuapp.com/allactivewear?`,
    {
      params: {
        _page: params.page,
        _limit: params.limit,
        q: params.q,
        _sort: params.sort,
        _order: params.order,
      },
    }
  );
}

export function getCropsAndCapris(params = {}) {
  return axios.get(`https://nordstromrackproject.herokuapp.com/Crops&capris?`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      q: params.q,
      _sort: params.sort,
      _order: params.order,
    },
  });
}

export function getDressesAndSkirts(params = {}) {
  return axios.get(
    `https://nordstromrackproject.herokuapp.com/dresses&skirts?`,
    {
      params: {
        _page: params.page,
        _limit: params.limit,
        q: params.q,
        _sort: params.sort,
        _order: params.order,
      },
    }
  );
}

export function getJackets(params = {}) {
  return axios.get(`https://nordstromrackproject.herokuapp.com/jackets?`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      q: params.q,
      _sort: params.sort,
      _order: params.order,
    },
  });
}

export function getLeggings(params = {}) {
  return axios.get(`https://nordstromrackproject.herokuapp.com/leggings?`, {
    params: {
      _page: params.page,
      _limit: params.limit,
      q: params.q,
      _sort: params.sort,
      _order: params.order,
    },
  });
}
