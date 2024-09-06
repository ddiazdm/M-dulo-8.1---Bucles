import { pacientes, Pacientes, NumeroPacientesPorEspecialidad } from "./data";


const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(paciente => paciente.especialidad === "Pediatra");
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(paciente => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  if (pacientes.some(paciente => paciente.temperatura > 39)) {
    activarProctolo = true;
  }
  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce((acc, paciente) => {
    const especialidad = paciente.especialidad;
    if (especialidad === "Medico de familia") {
      acc.medicoDeFamilia++;
    } else if (especialidad === "Pediatra") {
      acc.pediatria++;
    } else if (especialidad === "Cardiólogo") {
      acc.cardiologia++;
    } else {
      console.log(`Especialidad no reconocida: ${especialidad}`);
    }
    return acc;
  }, { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 });
};

console.log(cuentaPacientesPorEspecialidad(pacientes));