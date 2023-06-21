# Portafolio Personal

Este es mi portafolio personal, desarrollado utilizando HTML5, CSS3 y JavaScript. También he utilizado la librería EmailJS para implementar el formulario de contacto.

## Características

- Diseño moderno y atractivo.
- Páginas principales: Inicio, Proyectos, Acerca de mí y Contacto.
- Sección de proyectos con descripciones y enlaces.
- Información detallada sobre mi experiencia y habilidades.
- Formulario de contacto con integración de EmailJS para enviar mensajes.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- EmailJS

## Uso

1. Clona o descarga el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.

## Configuración de EmailJS

Si deseas utilizar el formulario de contacto y recibir mensajes en tu propio correo electrónico, debes seguir los siguientes pasos:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/) si aún no tienes una.
2. Obtén tus credenciales de EmailJS (User ID, Template ID y Service ID).
3. Abre el archivo `script.js` en un editor de texto.
4. Reemplaza los valores de las variables `emailjsUserId`, `emailjsTemplateId` y `emailjsServiceId` con tus propias credenciales de EmailJS.

```javascript
  // EmailJS configuration
  const emailjsUserId = 'TU_USER_ID';
  const emailjsTemplateId = 'TU_TEMPLATE_ID';
  const emailjsServiceId = 'TU_SERVICE_ID';
```

## Contribución

Si deseas contribuir a este proyecto, puedes hacerlo siguiendo estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios deseados y realiza commits (`git commit -am 'Agrega una nueva funcionalidad'`).
4. Sube los cambios a tu repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Abre una Pull Request en este repositorio.

## Soporte

Si encuentras algún problema o tienes alguna pregunta, no dudes en [crear un issue](https://github.com/rubenmantilladev/portfolio/issues) en este repositorio.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).
