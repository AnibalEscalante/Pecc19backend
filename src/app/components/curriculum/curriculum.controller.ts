import { Curriculum } from '../../models/curriculum.model';
import curriculumRepository from "./curriculum.repository";


async function getCurriculum(): Promise<Curriculum[]>{
  return curriculumRepository.getCurriculum();
}

function addCurriculum(curriculum: Curriculum): Promise<Curriculum>{
  curriculum.curriculum = curriculum.curriculum.toLowerCase();
  
  return curriculumRepository.addCurriculum(curriculum);
}

export default { addCurriculum, getCurriculum };