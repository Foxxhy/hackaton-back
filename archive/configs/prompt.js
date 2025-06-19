export const getBasePrompt = (
  length,
  meta,
  body,
  feature,
  additionalPrompt
) => {
  const prompt = `
    awaitFormat: "Répondre uniquement dans le format demandé"
    awaitLength: "Répondre uniquement dans environ ${length} mots, pas d'ajout de commentaire"
    awaitTone: "Répondre de manière concise, efficace et naturelle"
    awaitFeature: ${feature}
    awaitAdditionalPrompt: ${additionalPrompt}
    searchOnNet: true
    url: ${meta.url}
    title: ${meta.title}
    description: ${meta.description}
    keywords: ${meta.keywords}
    language: ${meta.language}
    body: ${body}
  `;

  return prompt;
};
