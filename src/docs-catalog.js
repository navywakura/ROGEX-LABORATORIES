// Shared by the documentation reader and the footer site map, so both list
// the same pages with the same titles in every language.
export const DOC_GROUPS = {
  lab: { es: "El laboratorio", en: "The laboratory", ca: "El laboratori" },
  echoai: { es: "echoAI", en: "echoAI", ca: "echoAI" },
  echos: { es: "echOS", en: "echOS", ca: "echOS" },
  prisma: { es: "PRISMA", en: "PRISMA", ca: "PRISMA" },
};

export const DOC_CATALOG = [
  { id: "lab/ecosistema", title: { es: "Tres líneas", en: "Three lines", ca: "Tres línies" } },
  { id: "echoai/que-es", title: { es: "Qué es", en: "What it is", ca: "Què és" } },
  { id: "echoai/piezas", title: { es: "Arquitectura", en: "Architecture", ca: "Arquitectura" } },
  { id: "echoai/echo1", title: { es: "ECHO-1", en: "ECHO-1", ca: "ECHO-1" } },
  { id: "echoai/echo2", title: { es: "ECHO-2", en: "ECHO-2", ca: "ECHO-2" } },
  { id: "echoai/resultados", title: { es: "Resultados", en: "Results", ca: "Resultats" } },
  { id: "echoai/proceso", title: { es: "Cómo se construyó", en: "How it was built", ca: "Com es va construir" } },
  { id: "echoai/ruta", title: { es: "ECHO-3", en: "ECHO-3", ca: "ECHO-3" } },
  { id: "echoai/echo4", title: { es: "ECHO-4 · roadmap oficial", en: "ECHO-4 · official roadmap", ca: "ECHO-4 · full de ruta oficial" } },
  { id: "echoai/relation", title: { es: "RELATION-A · historia relacional", en: "RELATION-A · relational history", ca: "RELATION-A · història relacional" } },
  { id: "echoai/transfer", title: { es: "TRANSFER-3", en: "TRANSFER-3", ca: "TRANSFER-3" } },
  { id: "echoai/drone3", title: { es: "DRONE-3", en: "DRONE-3", ca: "DRONE-3" } },
  { id: "echoai/hardware", title: { es: "Hardware previsto", en: "Planned hardware", ca: "Maquinari previst" } },
  { id: "echoai/limites", title: { es: "Siguiente frontera", en: "Next frontier", ca: "Frontera següent" } },
  { id: "echos/que-es", title: { es: "Qué es", en: "What it is", ca: "Què és" } },
  { id: "echos/guia", title: { es: "Guía de uso", en: "User guide", ca: "Guia d'ús" } },
  { id: "echos/arquitectura", title: { es: "Arquitectura", en: "Architecture", ca: "Arquitectura" } },
  { id: "echos/evidencia", title: { es: "Evidencia 3.0", en: "3.0 evidence", ca: "Evidència 3.0" } },
  { id: "echos/galeria", title: { es: "Galería", en: "Gallery", ca: "Galeria" } },
  { id: "echos/limites", title: { es: "Límites", en: "Limitations", ca: "Límits" } },
  { id: "echos/superficie", title: { es: "Superficie", en: "Surface", ca: "Superfície" } },
  { id: "echos/comandos", title: { es: "Comandos", en: "Commands", ca: "Ordres" } },
  { id: "prisma/resumen", title: { es: "Resumen", en: "Overview", ca: "Resum" } },
  { id: "prisma/tecnico", title: { es: "Técnico", en: "Technical", ca: "Tècnic" } },
  { id: "prisma/eeg-dron", title: { es: "Intención → dron", en: "Intent → drone", ca: "Intenció → dron" } },
];

export function docGroupKey(id) {
  return id.split("/")[0];
}

export function docCatalog(language = "es") {
  return DOC_CATALOG.map((doc) => ({
    id: doc.id,
    group: DOC_GROUPS[docGroupKey(doc.id)][language],
    groupKey: docGroupKey(doc.id),
    title: doc.title[language],
  }));
}
