import dayImg from '../assets/experience/day.webp';
import gomezImg from '../assets/experience/gomez-group.png'
import sylcomImg from '../assets/experience/sylcom.png'

import dptrImg from '../assets/projects/dptr-logo.png'
import ratingImg from '../assets/projects/rating_page.png'
import expenseTracker from '../assets/projects/expense_tracker.png'
import pythonAlarm from '../assets/projects/python_alarm.png'
import discordImg from '../assets/projects/discord-bot.png'
import daywebImg from '../assets/projects/day.png'

import cssImage from '../assets/techs/css3-original-wordmark.svg'
import gitImage from '../assets/techs/git.svg'
import htmlImage from '../assets/techs/html5-original-wordmark.svg'
import javaImage from '../assets/techs/java-original.svg'
import javascriptImage from '../assets/techs/javascript-original.svg'
import mysqlImage from '../assets/techs/mysql-original-wordmark.svg'
import postgresqlImage from '../assets/techs/postgresql-original-wordmark.svg'
import postmanImage from '../assets/techs/postman.svg'
import pythonImage from '../assets/techs/python-original.svg'
import reactImage from '../assets/techs/react-original-wordmark.svg'
import springbootImage from '../assets/techs/springboot.svg'
import tailwindImage from '../assets/techs/tailwind.svg'
import dockerImage from '../assets/techs/docker.svg'
import kotlinImage from '../assets/techs/kotlin.svg'
import flaskImage from '../assets/techs/flask.svg'
import wordpressImage from '../assets/techs/wordpress.svg'


export const ABOUT_ME_DATA = [
    {
        title: "Conocimiento",
        text: "Tengo conocimientos en Java, Python, JavaScript y Kotlin. En Java tengo algo mas que conocimientos basicos ya que he desarrollado pequeños backends con springboot. Con Python es un lenguaje que me intrigaba y empece aprenderlo con este he creado proyectos basicos, JavaScript lo he usado para hacer proyectos como este portfolio y por ultimo con Kotlin desarrolle una aplicacion movil para un TFG."
    },
    {
        title: "Herramientas",
        text: "He usado muchas herramientas para desarrollar diversos proyectos, como JetPack Compose de Kotlin para la aplicación móvil; Docker como contenedor para bases de datos; Git y GitHub para control de versiones; PostgreSQL para las bases de datos; y Postman para el testeo de APIs."
    },
    {
        title: "La Persona",
        text: "Para que me conozcas un poco más, hay muchas cosas que me gusta hacer, y tengo diversos hobbies, como hacer ejercicio y jugar videojuegos. También soy proactivo y siempre estoy abierto a aprender cosas nuevas."
    },
    {
        title: "Consejo",
        text: "¿Cómo aprendo a programar? Esto ya es algo que depende de ti. Mi primer contacto con código fue en el grado medio, y no fue gran cosa, solo pequeños scripts en Bash. Luego aprendí lo básico en el grado superior y empecé a investigar más por mi cuenta, que es cuando más he aprendido. Con esto quiero decir que tampoco es necesario tener un título para saber programar; hay un montón de tutoriales en internet donde puedes aprender."
    }
]

export const EXPERIENCE_DATA = [
    {
        img: dayImg,
        title: "Administrativo",
        date: "Abr 2024 - Jul 2024",
        text: "Desempeñe el rol de administrador ademas de actualizar la pagina web de la empresa, editar videos y crear campaña de marketing en LinkedIn"
    },
    {
        img: gomezImg,
        title: "Desarrollador full-stack",
        date: "Sep 2023 - Dic 2023",
        text: "Trabaje como desarrollador full-stack en la empresa Gomez Group, en la cual actualize un sistema y implementado de lectura inteligente de PDFs"
    },
    {
        img: sylcomImg,
        date: "Abr 2021 - Jun 2021",
        title: "Instalador de redes",
        text: "Desempeñe el trabajo de instalador de redes de fibra optica, redes inalambricas y cableado de red en la empresa Sylcom"
    }
]

export const TECHNOLOGIES_DATA = [
    {
        title: "Programación",
        tech: [
            pythonImage, javascriptImage, javaImage, htmlImage, cssImage
        ]
    },
    {
        title: "Frameworks",
        tech: [
            reactImage, springbootImage, flaskImage, tailwindImage
        ]
    },
    {
        title: "Bases de Datos",
        tech: [
            mysqlImage, postgresqlImage
        ]
    },
    {
        title: "Herramientas",
        tech: [
            gitImage, dockerImage, postmanImage
        ]
    }

]

export const PROJECTS_DATA = [
    {
        img: dptrImg,
        title: "Deportes TR",
        text: "Proyecto integrado del grado DAM para consultar información deportiva",
        techs: [kotlinImage, javaImage, postgresqlImage],
        projectLink: "https://github.com/Jatez95/DeportesTR"
    },
    {
        img: ratingImg,   
        title: "Rating game Page",
        text: "Proyecto personal en construccion de una página de valoracion de videojuegos.",
        techs: [javascriptImage, reactImage],
        projectLink: ""
    },
    {
        img: discordImg,
        title: "Bot de Discord",
        text: "Proyecto de bot que, además de ser mi primer proyecto en Python, es capaz de enviar mensajes y unirse a chats de voz",
        techs: [pythonImage],
        projectLink : ""
    },
    {
        img: expenseTracker,
        title: "Control de gastos",
        text: "Web app que conecta con las APIs de google para ver en web una tabla de google sheets en la que se pueden añadir gastos e ingresos. Tambien se puede descargar",
        techs: [javascriptImage, reactImage, pythonImage, flaskImage],
        projectLink : "https://github.com/Jatez95/expense-tracker"
    },
    {
        img: pythonAlarm,
        title: 'Alarma en Python',
        text: "Tipica alarma que reproduce un sonido al llegar un tiempo indicado, tambien tiene temporizador y te permite descargar sonidos",
        techs: [pythonImage],
        projectLink: "https://github.com/Jatez95/Jatez-alarm"
    },
    {
        img: daywebImg,
        title: 'DayApartment Landing',
        text: "Landing page de la empresa DayApartmentGroup hecha en wordpress",
        techs: [wordpressImage],
        projectLink: "https://www.apartamentosparaempresas.com/"
    }
]


export const ONLY_IMAGES = [pythonImage, javascriptImage, javaImage, htmlImage, cssImage, reactImage, springbootImage, flaskImage, tailwindImage, mysqlImage, postgresqlImage, gitImage, dockerImage, postmanImage]