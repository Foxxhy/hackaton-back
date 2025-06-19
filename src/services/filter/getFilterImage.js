export const getFilterImage = async (page) => {
  try {
    const images = await page.evaluate(() => {
      return Array.from(document.images).map((img) => img.src);
    });
    return images;
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des images :", error);
    throw error;
  }
};
