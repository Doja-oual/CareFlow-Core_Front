export enum UserRole {
  ADMIN = 'ADMIN',
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  PATIENT = 'PATIENT',
  PHARMACIST = 'PHARMACIST',
  LAB_STAFF = 'LAB_STAFF',
}

export const roleLabels: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'Administrateur',
  [UserRole.DOCTOR]: 'Médecin',
  [UserRole.NURSE]: 'Infirmier',
  [UserRole.PATIENT]: 'Patient',
  [UserRole.PHARMACIST]: 'Pharmacien',
  [UserRole.LAB_STAFF]: 'Laboratoire',
}