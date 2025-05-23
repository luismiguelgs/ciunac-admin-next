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
import PrintIcon from '@mui/icons-material/Print';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Groups2Icon from '@mui/icons-material/Groups2';
import SchoolIcon from '@mui/icons-material/School';

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
			segment: 'constancias',
			title: 'Constancias',
			icon: <HistoryEduIcon />
		},
        {
          segment: 'ubicacion',
          title: 'Examen de Ubicación',
          icon: <TranslateIcon />,
        },
		{
			segment: 'becas',
			title: 'Becas CIUNAC',
			icon: <SchoolIcon />
		},
      ],
    },
    {
      segment: 'certificados',
      title: 'Certificados',
      icon: <CardMembershipIcon />,
      children: [
        {
            segment: './',
            title: 'Certificados Nuevos',
            icon: <LayersIcon />,
        },
		{
			segment: 'impresos',
			title: 'Certificados Impresos',
			icon: <PrintIcon />
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
		segment: 'constancias',
		title: 'Constancias',
		icon: <HistoryEduIcon />,
		children: [
			{
				segment: './',
				title: 'Constancias Nuevas',
				icon: <LayersIcon />,
			},
			{
				segment: 'impresas',
				title: 'Constancias Impresas',
				icon: <PrintIcon />
			},
			{
				segment: 'nuevo',
				title: 'Nueva Constancia',
				icon: <AddBoxIcon />,
			},
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
                segment: 'participantes',
                title: 'Participantes',
                icon: <Groups2Icon />
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