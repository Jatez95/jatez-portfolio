import dayImg from '../assets/experience/day.webp';
import gomezImg from '../assets/experience/gomez-group.png'
import sylcomImg from '../assets/experience/sylcom.png'

import dptrImg from '../assets/projects/dptr-logo.png'
import ratingImg from '../assets/projects/rating-page.png'
import discordImg from '../assets/projects/discord-bot.png'
import moneyIcon from '../assets/projects/money_icon.ico'


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

export const PROJECTS_DATA = [
    {
        img: dptrImg,
        title: "Deportes TR",
        text: "Proyecto integrado del grado DAM para consultar información deportiva en tiempo real, incluyendo resultados, noticias, estadísticas y más.",
        projectLink: "https://github.com/Jatez95/DeportesTR"
    },
    {
        img: ratingImg,   
        title: "Rating game Page",
        text: "Proyecto personal de una página para registrar los videojuegos que he jugado, junto con sus puntuaciones y mi opinión sobre ellos. [En Proceso]",
        projectLink: ""
    },
    {
        img: discordImg,
        title: "Bot de Discord",
        text: "Proyecto de bot que, además de ser mi primer proyecto en Python, es capaz de enviar mensajes y unirse a chats de voz",
        projectLink : ""
    },
    {
        img: moneyIcon,
        title: "Control de gastos",
        text: "Web app que conecta con las APIs de google para ver en web una tabla de google sheets en la que se pueden añadir gastos e ingresos. Tambien se puede descargar",
        projectLink : "https://github.com/Jatez95/expense-tracker"
    }
]