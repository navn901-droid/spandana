export type Language = 'en' | 'te';

export interface FacultyMember {
  id: string;
  name: string;
  nameTe: string;
  designation: string;
  designationTe: string;
  subject: string;
  subjectTe: string;
  qualification: string;
  specialization: string;
  experience: string;
  classesHandled: string;
  philosophy: string;
  philosophyTe: string;
  photo: string;
  isDemo: boolean;
}

export interface AcademicProgram {
  id: 'primary' | 'middle' | 'high';
  category: string;
  categoryTe: string;
  title: string;
  titleTe: string;
  grades: string;
  description: string;
  descriptionTe: string;
  features: string[];
  featuresTe: string[];
  image: string;
}

export interface CampusItem {
  id: string;
  title: string;
  titleTe: string;
  category: string;
  categoryTe: string;
  description: string;
  descriptionTe: string;
  image: string;
  aspect: 'tall' | 'wide' | 'standard';
}
