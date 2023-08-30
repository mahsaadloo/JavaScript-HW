// importers:
import {submitButton,showDrawer,closeDrawer} from "./src/importer.js";
// Events:
import {showDrawerHandler, closeDrawerHandler, submitButtonHandler} from "./src/events.js"

// main:
submitButton?.addEventListener("click", submitButtonHandler);
// Drawer:
showDrawer?.addEventListener("click", showDrawerHandler);
closeDrawer?.addEventListener("click", closeDrawerHandler);