import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 5 },
    { duration: '10s', target: 2 },
    { duration: '1s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://localhost:7296/Categoria');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}