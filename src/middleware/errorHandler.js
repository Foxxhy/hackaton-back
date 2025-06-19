// Middleware pour gérer les erreurs 404
export const notFound = (req, res) => {
  res.status(404).json({
    error: "Route non trouvée",
    message: `La route ${req.originalUrl} n'existe pas`,
  });
};

// Middleware pour gérer les erreurs globales
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Erreur interne du serveur",
    message: err.message,
  });
};

export default {
  notFound,
  errorHandler,
};
