// ./src/index.js
import './index.html';
import './index.css';
import dva, { connect } from 'dva';

import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();

// 2. Model
app.model(require('./models/users.js'));

// 3. Router
app.router(require('./router'));

// 4. Start
app.start(document.getElementById('root'));
