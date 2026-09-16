const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('สวัสดีครับ! นี่คือเซิร์ฟเวอร์ของฉัน');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'เซิร์ฟเวอร์ทำงานปกติ' });
});

app.listen(port, () => {
  console.log(`เซิร์ฟเวอร์รันอยู่ที่พอร์ต ${port}`);
});