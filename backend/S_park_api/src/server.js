const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const app = require('./app');

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`\n🚀 S-Park API running in ${ENV.toUpperCase()} mode`);
  console.log(`   Port: ${PORT}`);
  console.log(`   Swagger Docs: http://localhost:${PORT}/api/docs`);
  console.log(`   Health check: http://localhost:${PORT}/\n`);
  
  // Mostrar token automático para pruebas en Swagger (solo en dev)
  if (ENV === 'development') {
    require('./utils/token-helper');
  }
});
