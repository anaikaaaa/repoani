import { Contacto } from "./contactos";

const checkNewContact = (contacto: Contacto) => {
  if (contacto.first_name === "") {
    return false;
  }
  if (contacto.last_name === "") {
    return false;
  }
  return true;
};
export { checkNewContact };
