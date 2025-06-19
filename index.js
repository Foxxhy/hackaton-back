import app from "./src/app.js";
import { config } from "./src/config/config.js";

// Démarrage du serveur
app.listen(config.port, () => {
  console.log(`🚀 Serveur démarré sur le port ${config.port}`);
  console.log(`📱 Mode: ${config.nodeEnv}`);
  console.log(`🌐 URL: http://localhost:${config.port}`);
  console.log(`📋 API Info: http://localhost:${config.port}/api/info`);
});
