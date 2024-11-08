import DashboardIcon from '@mui/icons-material/Dashboard';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LayersIcon from '@mui/icons-material/Layers';
import type { Navigation } from '@toolpad/core/AppProvider';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TranslateIcon from '@mui/icons-material/Translate';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import HandymanIcon from '@mui/icons-material/Handyman';
import PeopleIcon from '@mui/icons-material/People';

const NAVIGATION: Navigation = [
    {
      kind: 'header',
      title: 'General',
    },
    {
      segment: '',
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Gestión',
    },
    {
      segment: 'solicitudes',
      title: 'Solicitudes',
      icon: <AllInboxIcon />,
      children: [
        {
            segment: 'nuevo',
            title: 'Nueva Solicitud',
            icon: <AddBoxIcon />,
        },
        {
          segment: 'certificados',
          title: 'Certificados',
          icon: <CardMembershipIcon />,
        },
        {
          segment: 'ubicacion',
          title: 'Examen de Ubicación',
          icon: <TranslateIcon />,
        },
      ],
    },
    {
      segment: 'certificados',
      title: 'Certificados',
      icon: <CardMembershipIcon />,
      children: [
        {
            segment: '/',
            title: 'Lista de Certificados',
            icon: <LayersIcon />,
        },
        {
            segment: 'nuevo',
            title: 'Nuevo Certificado',
            icon: <AddBoxIcon />,
        },
        {
            segment: 'proceso',
            title: 'Proceso de Certificado',
            icon: <AccountTreeIcon />
        }
      ]
    },
    {
        segment: 'examen-ubicacion',
        title: 'Examen de Ubicación',
        icon: <TranslateIcon />,
        children: [
            {
                segment: '/',
                title: 'Lista de Examenes',
                icon: <LayersIcon />,
            },
            {
                segment: 'nuevo',
                title: 'Nuevo Examen',
                icon: <AddBoxIcon />,
            },
            {
                segment: 'prospectos',
                title: 'Prospectos',
                icon: <FaceRetouchingNaturalIcon />
            },
            {
                segment: 'configuracion',
                title: 'Configuración',
                icon: <SettingsApplicationsIcon />
            }

        ]
    },
    {
        segment: 'reportes',
        title: 'Reportes',
        icon: <SummarizeIcon />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Mantenimiento',
    },
    {
        segment: 'opciones',
        title: 'Opciones',
        icon: <SettingsIcon />,
    },
    {
        segment: 'mantenimiento',
        title: 'Mantenimiento',
        icon: <HandymanIcon />,
    },
    {
        segment: 'usuarios',
        title: 'Usuarios',
        icon: <PeopleIcon />,
    },

  ];
export default NAVIGATION