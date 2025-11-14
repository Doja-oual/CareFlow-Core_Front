import { UserRole } from './roles'

export interface MenuItem {
  to: string
  icon: string
  label: string
  badge?: number
  roles: UserRole[]
}

export const menuItems: MenuItem[] = [
  {
    to: '/dashboard',
    icon: '',
    label: 'Tableau de bord',
    roles: [
      UserRole.ADMIN,
      UserRole.DOCTOR,
      UserRole.NURSE,
      UserRole.PATIENT,
      UserRole.PHARMACIST,
      UserRole.LAB_STAFF,
    ],
  },
  {
    to: '/appointments',
    icon: '',
    label: 'Rendez-vous',
    roles: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.PATIENT],
  },
  {
    to: '/patients',
    icon: '',
    label: 'Patients',
    roles: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.NURSE],
  },
  {
    to: '/prescriptions',
    icon: '',
    label: 'Prescriptions',
    roles: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT, UserRole.PHARMACIST],
  },
  {
    to: '/lab-orders',
    icon: '🧪',
    label: 'Analyses',
    roles: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT, UserRole.LAB_STAFF],
  },
  {
    to: '/documents',
    icon: '',
    label: 'Documents',
    roles: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.NURSE, UserRole.PATIENT],
  },
  {
    to: '/users',
    icon: '',
    label: 'Utilisateurs',
    roles: [UserRole.ADMIN],
  },
  {
    to: '/reports',
    icon: '',
    label: 'Rapports',
    roles: [UserRole.ADMIN, UserRole.DOCTOR],
  },
  {
    to: '/settings',
    icon: '',
    label: 'Paramètres',
    roles: [UserRole.ADMIN],
  },
]

export const getMenuItemsByRole = (role: UserRole): MenuItem[] => {
  return menuItems.filter((item) => item.roles.includes(role))
}