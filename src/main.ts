import { pacientes, Pacientes, NumeroPacientesPorEspecialidad } from "./data";


const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pediatria = pacientes.filter(paciente => paciente.especialidad === "Pediatra");
  return pediatria;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pediatriaMenorDiezAnios = pacientes.filter(paciente => paciente.especialidad === "Pediatra" && paciente.edad < 10);
  return pediatriaMenorDiezAnios;
};



const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  if (pacientes.some(paciente => paciente.temperatura > 39)) {
    activarProctolo = true;
  }
  return activarProctolo;
};


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



const renderPacientesAsignadosAPediatria = (pacientes: Pacientes[]) => {

  const pacientesPediatriaList = document.getElementById("pacientes-pediatria-list");
  if (pacientesPediatriaList) {
    pacientesPediatriaList.innerHTML = pacientes.map(paciente => `
      
        Nombre: ${paciente.nombre} 
        Edad: ${paciente.edad} 
        Especialidad: ${paciente.especialidad} 
        Temperatura: ${paciente.temperatura}°C
      
    `).join("");
  }
};
let pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes)
renderPacientesAsignadosAPediatria(pacientesPediatria)



 

const renderPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]) => {
  const pacientesPediatriaMenorDiezAniosList = document.getElementById("pacientes-pediatria-menor-diez-anos-list");
  if (pacientesPediatriaMenorDiezAniosList) {
    pacientesPediatriaMenorDiezAniosList.innerText = pacientes.map(paciente => `
      
        Nombre: ${paciente.nombre} 
        Edad: ${paciente.edad} 
        Especialidad: ${paciente.especialidad} 
        Temperatura: ${paciente.temperatura}°C
      
    `).join("");
  }
}

let menoresDiez = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
renderPacientesAsignadosAPediatriaYMenorDeDiezAnios(menoresDiez)



const renderActivarProtocoloUrgencia = (pacientes: boolean) => {
  const activarProtocoloUrgencia1 = document.getElementById("activar-protocolo-urgencia");
  if (activarProtocoloUrgencia1) {
    activarProtocoloUrgencia1.innerHTML = pacientes ? "Activar protocolo de urgencia" : "No activar protocolo de urgencia";
};}
let urgencias = activarProtocoloUrgencia(pacientes);
renderActivarProtocoloUrgencia(urgencias);

const renderNumeroPacientesPorEspecialidad = (pacientes: NumeroPacientesPorEspecialidad) => {
  const numeroPacientesPorEspecialidad = document.getElementById("numero-pacientes-por-especialidad");

  if (numeroPacientesPorEspecialidad) {
    numeroPacientesPorEspecialidad.innerHTML = `
    Medico de familia: ${pacientes.medicoDeFamilia}
    Pediatria: ${pacientes.pediatria}
    Cardiologia: ${pacientes.cardiologia}
  `;
  }
};

let especialidad = cuentaPacientesPorEspecialidad(pacientes);
renderNumeroPacientesPorEspecialidad(especialidad);

