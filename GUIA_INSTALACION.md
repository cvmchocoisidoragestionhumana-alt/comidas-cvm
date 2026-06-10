# Guía de instalación — Sistema de Control de Comidas (Firebase)

Sistema de control de entregas de comidas para CVM PIM III Chocó-Isidora. Funciona con Firebase (base de datos en la nube) y se publica en GitHub Pages, igual que tu sistema de EPP. Los datos quedan permanentes y se acceden desde cualquier equipo.

Vas a hacer 6 pasos. Toma unos 20-30 minutos la primera vez.

---

## Archivos del proyecto

- `index.html` — el sistema principal (login + las 6 pestañas).
- `firebase-config.js` — donde pegas tus claves de Firebase. **Lo editas tú.**
- `nomina-data.js` — los 991 trabajadores con su grupo rotativo (ya cargados).
- `crear-usuarios.html` — página para crear los usuarios RRHH y contrata (se usa una vez).
- `database.rules.json` — reglas de seguridad de la base de datos.
- `GUIA_INSTALACION.md` — este archivo.

---

## Paso 1 — Crear el proyecto en Firebase

1. Entra a https://console.firebase.google.com y inicia sesión con tu cuenta de Google.
2. Clic en "Agregar proyecto". Ponle un nombre, por ejemplo `comidas-cvm`. (Es un proyecto NUEVO, separado del de EPP.)
3. Puedes desactivar Google Analytics (no hace falta). Crea el proyecto.

## Paso 2 — Activar la base de datos y el login

1. En el menú izquierdo: **Realtime Database** → "Crear base de datos".
   - Elige la ubicación que te ofrezca.
   - Empieza en "modo bloqueado" (locked). Las reglas las cargamos en el paso 5.
2. En el menú izquierdo: **Authentication** → "Comenzar" → pestaña "Sign-in method" → habilita **Correo electrónico/contraseña** → Guardar.

## Paso 3 — Obtener tus claves y pegarlas

1. Clic en el engranaje (arriba izquierda) → "Configuración del proyecto".
2. Baja hasta "Tus apps" → clic en el icono **</>** (Web) → registra la app (cualquier apodo).
3. Firebase te muestra un bloque `firebaseConfig` con apiKey, authDomain, etc.
4. Abre `firebase-config.js` con un editor de texto y **reemplaza cada `PEGA_AQUI...`** por el valor correspondiente. Guarda el archivo.

## Paso 4 — Cargar la nómina inicial

1. En Realtime Database, clic en los tres puntos (⋮) → "Importar JSON".
2. Necesitas un archivo con la nómina en el formato de la base. Para generarlo:
   - Abre el sistema una vez (paso 6) como RRHH; o
   - Pídele a quien te entregó esto el archivo `nomina_import.json` ya listo para importar.
   - (La nómina también está embebida en `nomina-data.js`, el sistema la usa directamente para mostrar la lista; este import es opcional y solo si quieres tenerla también en la base.)

> Nota: el sistema funciona aunque no importes la nómina a la base, porque `nomina-data.js` ya la trae. El import a la base es útil solo si más adelante quieres editarla desde la nube.

## Paso 5 — Cargar las reglas de seguridad

1. En Realtime Database → pestaña "Reglas".
2. Borra lo que haya y pega el contenido completo de `database.rules.json`.
3. Clic en "Publicar".

Estas reglas garantizan que: solo usuarios con sesión entran; solo RRHH puede autorizar, excluir, cargar eventuales/seguridad y guardar cierres; la contrata solo puede marcar entregado y observación.

## Paso 6 — Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `comidas-cvm`), igual que hiciste con el EPP.
2. Sube estos archivos: `index.html`, `firebase-config.js`, `nomina-data.js`, `crear-usuarios.html`.
   (No subas `GUIA_INSTALACION.md` ni `database.rules.json` si no quieres; no afectan.)
3. En el repo: Settings → Pages → Source: rama `main`, carpeta `/root` → Save.
4. Espera 1-2 minutos. GitHub te da una URL tipo `https://tuusuario.github.io/comidas-cvm/`.

## Paso 7 — Crear los usuarios (una sola vez)

1. Abre `https://tuusuario.github.io/comidas-cvm/crear-usuarios.html`.
2. Crea el usuario de RRHH: correo, contraseña, rol = RRHH. Clic en "Crear usuario".
3. Crea el usuario de la contrata: correo, contraseña, rol = CONTRATA.
4. **Por seguridad, después borra `crear-usuarios.html` del repositorio.** Así nadie más puede crear usuarios.

## Listo

Abre `https://tuusuario.github.io/comidas-cvm/` → inicia sesión con el usuario RRHH o el de la contrata. Cada uno verá solo lo que le corresponde.

---

## Cómo se usa el día a día

- **RRHH**, cada día: pestaña 1, autoriza la lista de cada comida (cuadra cantidades por gerencia), excluye reposos/vacaciones, carga eventuales y cuerpos de seguridad.
- **Contrata**, al servir: pestaña 2, marca Entregado y deja observación si hace falta. No puede tocar nada más.
- **RRHH**, cuando quiera: pestaña 3 (conciliación del día) y pestaña Cierre mensual.
- **Cada 01 de mes**: en Cierre mensual, revisa el consolidado del mes anterior y pulsa "Guardar cierre en histórico". Queda permanente: en julio puedes volver y ver enero.

## Notas

- Los datos viven en TU Firebase. Mientras no borres el proyecto, los cierres quedan para siempre.
- Plan gratuito de Firebase (Spark): suficiente para este uso. Si algún día crece mucho, se puede subir de plan.
- El sistema y tu sistema de EPP son independientes: este usa su propio Firebase y su propio repositorio. No se afectan entre sí.
- Si cambias trabajadores de la nómina, se actualiza regenerando `nomina-data.js`.
