import { readFile } from "fs/promises";

/**
 * Lit le contenu d'un fichier
 * @param {string} filePath - Chemin du fichier à lire
 * @returns {Promise<string>} - Contenu du fichier
 */
export const readFileService = async (filePath) => {
  try {
    const data = await readFile(filePath, "utf-8");
    return data;
  } catch (error) {
    console.error("❌ Erreur lecture fichier :", error.message);
    throw error;
  }
};
