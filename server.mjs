import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(process.cwd());
const contentType = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml' };
createServer(async (request, response) => {
  const requested = request.url === '/' ? 'index.html' : request.url.split('?')[0].replace(/^[/\\]+/, '');
  const file = join(root, normalize(requested).replace(/^([.]{2}[\\/])+/, ''));
  if (!file.startsWith(root)) return response.writeHead(403).end('Forbidden');
  let body;
  try { body = await readFile(file); }
  catch { return response.writeHead(404).end('Not found'); }
  response.writeHead(200, { 'Content-Type': contentType[extname(file)] || 'application/octet-stream' });
  response.end(body);
}).listen(4174, () => console.log('HOSSIFY site: http://localhost:4174'));
