import axios from 'axios'

const linux = axios.create({
    baseURL: `http://localhost:5000/lnx`
  });
const windows = axios.create({
    baseURL: `http://localhost:5000/win`
  });
const linuxReplic = axios.create({
    baseURL: `http://localhost:5000/lnx/replic`
  });
const windowsReplic = axios.create({
    baseURL: `http://localhost:5000/win/replic`
  });

export {
  linux,
  windows,
  linuxReplic,
  windowsReplic
}