import { writeFile } from "fs/promises";

/**
 * Écrit du contenu dans un fichier (créé ou écrasé)
 * @param {string} filePath - Chemin du fichier
 * @param {string} content - Contenu à écrire
 */
export const writeFileService = async (filePath, content) => {
  try {
    await writeFile(filePath, content, "utf-8");
  } catch (error) {
    console.error("❌ Erreur écriture fichier :", error.message);
    throw error;
  }
};
