import http from 'axios';

const URL = '/command';

export default function sendCommand({ data }) {
  // b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  http.post(URL, data);
}
