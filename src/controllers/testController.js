import { getRenderedDOM } from "../services/dom/playwright.js";
import { readFileService } from "../services/file/read.js";
import { writeFileService } from "../services/file/write.js";
import { moveFileService } from "../services/file/move.js";
import { existsSync, mkdirSync } from "fs";
import path from "path";

export const getTestDOM = async (req, res) => {
  try {
    const url = "https://www.laposte.fr";

    const dom = await getRenderedDOM(url);

    res.json({
      success: true,
      message: "DOM de La Poste récupéré avec succès",
      data: {
        url,
        dom,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error(
      "❌ Erreur lors de la récupération du DOM de La Poste :",
      error
    );
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération du DOM de La Poste",
      error: error.message,
    });
  }
};

// Test du service de lecture de fichier
export const testReadFile = async (req, res) => {
  try {
    let { filePath } = req.body;

    if (!filePath) {
      // Créer un fichier de test par défaut si aucun chemin n'est fourni
      filePath = "./test-files/read-test.txt";
      const testContent = `Fichier de test pour la lecture
Créé automatiquement le ${new Date().toISOString()}
Contenu de test pour vérifier le service de lecture.
Ligne 1: Test de lecture
Ligne 2: Données de test
Ligne 3: Fin du fichier de test`;

      // Créer le dossier de test s'il n'existe pas
      if (!existsSync("./test-files")) {
        mkdirSync("./test-files", { recursive: true });
      }

      // Créer le fichier de test s'il n'existe pas
      if (!existsSync(filePath)) {
        await writeFileService(filePath, testContent);
      }
    }

    const content = await readFileService(filePath);

    res.json({
      success: true,
      message: "Lecture de fichier réussie",
      data: {
        filePath,
        content,
        contentLength: content.length,
        isTestFile: !req.body.filePath, // Indique si c'est un fichier de test créé automatiquement
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("❌ Erreur lors du test de lecture :", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du test de lecture de fichier",
      error: error.message,
    });
  }
};

// Test du service d'écriture de fichier
export const testWriteFile = async (req, res) => {
  try {
    let { filePath, content } = req.body;

    if (!filePath) {
      // Créer un chemin de test par défaut
      filePath = "./test-files/write-test.txt";
    }

    if (!content) {
      // Créer un contenu de test par défaut
      content = `Fichier de test pour l'écriture
Créé automatiquement le ${new Date().toISOString()}
Contenu de test pour vérifier le service d'écriture.
Ligne 1: Test d'écriture
Ligne 2: Données écrites automatiquement
Ligne 3: Fin du fichier de test écrit`;
    }

    // Créer le dossier de test s'il n'existe pas
    const testDir = path.dirname(filePath);
    if (!existsSync(testDir)) {
      mkdirSync(testDir, { recursive: true });
    }

    await writeFileService(filePath, content);

    res.json({
      success: true,
      message: "Écriture de fichier réussie",
      data: {
        filePath,
        content,
        contentLength: content.length,
        isTestFile: !req.body.filePath || !req.body.content, // Indique si c'est un fichier de test créé automatiquement
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("❌ Erreur lors du test d'écriture :", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du test d'écriture de fichier",
      error: error.message,
    });
  }
};

// Test du service de déplacement de fichier
export const testMoveFile = async (req, res) => {
  try {
    let { sourcePath, destinationPath } = req.body;

    if (!sourcePath || !destinationPath) {
      // Créer des chemins de test par défaut
      sourcePath = "./test-files/source-test.txt";
      destinationPath = "./test-files/destination-test.txt";

      // Créer le dossier de test s'il n'existe pas
      if (!existsSync("./test-files")) {
        mkdirSync("./test-files", { recursive: true });
      }

      // Créer le fichier source de test s'il n'existe pas
      if (!existsSync(sourcePath)) {
        const testContent = `Fichier source de test pour le déplacement
Créé automatiquement le ${new Date().toISOString()}
Contenu de test pour vérifier le service de déplacement.
Ligne 1: Test de déplacement
Ligne 2: Données à déplacer
Ligne 3: Fin du fichier source`;
        await writeFileService(sourcePath, testContent);
      }
    }

    // Créer le dossier de destination s'il n'existe pas
    const destDir = path.dirname(destinationPath);
    if (!existsSync(destDir)) {
      mkdirSync(destDir, { recursive: true });
    }

    await moveFileService(sourcePath, destinationPath);

    res.json({
      success: true,
      message: "Déplacement de fichier réussi",
      data: {
        sourcePath,
        destinationPath,
        isTestFile: !req.body.sourcePath || !req.body.destinationPath, // Indique si ce sont des fichiers de test créés automatiquement
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("❌ Erreur lors du test de déplacement :", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du test de déplacement de fichier",
      error: error.message,
    });
  }
};

// Test complet : écrire, lire et déplacer un fichier
export const testFileOperations = async (req, res) => {
  try {
    const testContent = `Test de contenu généré le ${new Date().toISOString()}
Ceci est un test des opérations de fichiers.
Ligne 1: Test d'écriture
Ligne 2: Test de lecture
Ligne 3: Test de déplacement
Ligne 4: Test complet des opérations
Ligne 5: Fin du fichier de test`;

    const originalPath = "./test-files/original-test.txt";
    const movedPath = "./test-files/moved-test.txt";

    // Créer le dossier de test
    if (!existsSync("./test-files")) {
      mkdirSync("./test-files", { recursive: true });
    }

    // 1. Écrire le fichier
    await writeFileService(originalPath, testContent);

    // 2. Lire le fichier
    const readContent = await readFileService(originalPath);

    // 3. Déplacer le fichier
    await moveFileService(originalPath, movedPath);

    // 4. Lire le fichier déplacé
    const movedContent = await readFileService(movedPath);

    res.json({
      success: true,
      message: "Test complet des opérations de fichiers réussi",
      data: {
        originalPath,
        movedPath,
        originalContent: readContent,
        movedContent,
        contentLength: testContent.length,
        isTestFile: true, // Toujours un fichier de test dans cette fonction
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("❌ Erreur lors du test complet :", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors du test complet des opérations de fichiers",
      error: error.message,
    });
  }
};
