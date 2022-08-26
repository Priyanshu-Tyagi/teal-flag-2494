import axios from "axios";

// export function addtobag(datas = {}) {
//   return axios.post("https://630489f8761a3bce77e9dd0f.mockapi.io/bag", {
//     minprice: datas.minprice,
//     off: datas.off,
//     maxprice: datas.maxprice,
//     review: datas.review,
//     media: datas.media,
//     head: datas.head,
//     name: datas.name,
//   });
// }

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
