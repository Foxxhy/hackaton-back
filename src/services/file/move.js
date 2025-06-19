import { rename } from "fs/promises";

/**
 * Déplace un fichier d'un chemin à un autre
 * @param {string} source - Chemin source
 * @param {string} destination - Chemin de destination
 */
export const moveFileService = async (source, destination) => {
  try {
    await rename(source, destination);
  } catch (error) {
    console.error("❌ Erreur déplacement fichier :", error.message);
    throw error;
  }
};
