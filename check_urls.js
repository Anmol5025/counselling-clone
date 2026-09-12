const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = new Set();
function findUrls(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) findUrls(p);
    else if (p.endsWith('.tsx')) {
      const content = fs.readFileSync(p, 'utf8');
      const matches = content.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?q=80&w=\d+(&auto=format&fit=crop)?/g) || [];
      matches.forEach(m => urls.add(m));
    }
  }
}
findUrls('src/components');

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(res.statusCode + ' ' + url);
  });
});
