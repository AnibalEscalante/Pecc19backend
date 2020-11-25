import { Curriculum } from '../../models/curriculum.model';
import curriculumSchema from "./curriculum.schema";

function addCurriculum(curriculum: Curriculum): Promise<Curriculum>{
  curriculum.curriculum = curriculum.curriculum.toLowerCase();
  return curriculumSchema.create<Curriculum>(curriculum);
}

async function getCurriculum(): Promise<Curriculum[]>{
  return curriculumSchema.find();
}

export default { addCurriculum, getCurriculum };