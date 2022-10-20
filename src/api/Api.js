import { Delete, Get, Post, Put, PostToken } from './https';

const GET_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const CLIENT_ID = '4d0c8d78204a43ca8883a2f07cf65eb8';
const CLIENT_SECRET = '51b1b9b95192415a80fbc4f705e73647';
const URL = 'https://api.spotify.com/v1';

const GetAccessToken = () => {
  let url = GET_TOKEN_URL;
  return PostToken(url, CLIENT_ID, CLIENT_SECRET);
};

export const GetRecommendations = async (code, limit) => {
  let url = `${URL}/recommendations`;
  const token = await GetAccessToken();

  let params = {
    seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
    seed_genres: 'country',
    seed_tracks: '0c6xIDDpzE81m2q797ordA',
    market: code,
    limit: limit,
  };
  return Get(token?.data?.access_token, url, params);
};

export const GetAlbumTracks = async id => {
  let url = `${URL}/albums/${id}/tracks`;
  const token = await GetAccessToken();
  return Get(token?.data?.access_token, url);
};

export const GetArtistsPopularity = async id => {
  let url = `${URL}/albums/${id}`;
  const token = await GetAccessToken();
  return Get(token?.data?.access_token, url);
};

export const GetTrack = async id => {
  let url = `${URL}/tracks/${id}`;
  const token = await GetAccessToken();
  return Get(token?.data?.access_token, url);
};
