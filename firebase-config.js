// ============================================================
//  CONFIGURACION DE FIREBASE  -  control-comidas-pim3
// ============================================================
//  Claves del proyecto Firebase de Josdarwin (CVM PIM III).
//  Ya estan cargadas. No necesitas editar nada aqui.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCfVFYFCivEoYMIdNCNNSI7htWT5dDQ9uc",
  authDomain: "control-comidas-pim3.firebaseapp.com",
  databaseURL: "https://control-comidas-pim3-default-rtdb.firebaseio.com",
  projectId: "control-comidas-pim3",
  storageBucket: "control-comidas-pim3.firebasestorage.app",
  messagingSenderId: "255446818357",
  appId: "1:255446818357:web:6a50bb128ab94c7cf21b7c"
};

// No edites debajo de esta linea -----------------------------
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
