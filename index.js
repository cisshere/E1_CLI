import inquirer from "inquirer";
import {
  nuevaExcursion,
  guardarExcursionDatos,
  get,
} from "./gastosExcursion.js";

const main = async () => {
  let run = true;

  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chossen",
        message: "Lista de excursiones",
        choices: [
          {
            value: 1,
            name: "crear excursion",
          },
          {
            value: 2,
            name: "lista de excursions",
          },
          {
            value: 3,
            name: "salir",
          },
        ],
      },
    ]);

    switch (action.chossen) {
      case 1:
        await crearNuevaExcursion();
        break;
      case 2:
        await imprimirListaExcursiones();
        break;
      case 3:
        run = false;
      default:
        run = false;
        break;
    }
  }
};

main();

async function crearNuevaExcursion() {
  const nuevoGastoExcursion = await nuevaExcursion();

  console.log("Datos de la excursion", nuevoGastoExcursion);

  const excursion = await get("excursiones.json");

  excursion.push(nuevoGastoExcursion);

  await guardarExcursionDatos("excursiones.json", excursion);
}

async function imprimirListaExcursiones() {
  const excursion = await get("excursiones.json");

  console.log(excursion);
}
