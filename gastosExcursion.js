import inquirer from "inquirer";
import { error } from "console";
import fs from "fs";

export async function nuevaExcursion() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "nombre_excursion",
      message: "Nombre de la excursion",
    },
    {
      type: "input",
      name: "costo_excursion",
      message: "Costo de la excursion",
    },
    {
      type: "input",
      name: "cantidad_personas",
      message: "para cuantas personas",
    },
  ]);
}

export const get = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, content) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(content));
    });
  });
};

export const guardarExcursionDatos = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(content), (error) => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  });
};
