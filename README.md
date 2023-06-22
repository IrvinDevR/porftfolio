# Portafolio Personal

Este es mi portafolio personal, desarrollado utilizando HTML5, CSS3 y JavaScript. También he utilizado la librería EmailJS para implementar el formulario de contacto.

## Características

- Diseño moderno y atractivo.
- Secciones principales: Inicio, Proyectos, Sobre mi, Educación, Skills y Contacto.
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

    ```javascript
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <script type="text/javascript">
        emailjs.init('YOUR_PUBLIC_KEY')
      </script>
    ```

2. Agregar un servicio de correo electrónico
    ![Ejemplo 1](https://i.postimg.cc/kM2yhtw7/image.png)

3. Crear una plantilla de correo electrónico
    ![Ejemplo 2](https://i.postimg.cc/SKcB9v2t/image.png)
    ![Ejemplo 3](https://i.postimg.cc/7PpYSpfq/image.png)

4. Crear un formulario HTML

    ```html
     <form id="contact-form">
         <input type="hidden" name="contact_number">
         <label>Name</label>
         <input type="text" name="user_name">
         <label>Email</label>
         <input type="email" name="user_email">
         <label>Message</label>
         <textarea name="message"></textarea>
         <input type="submit" value="Send">
     </form>
    ```

5. Abre el archivo `script.js` en un editor de texto.

    ```javascript
      // EmailJS configuration
      window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(e) {
          e.preventDefault();
          // generate a five digit number for the contact_number variable
          this.contact_number.value = Math.random() * 100000 | 0;
          // these IDs from the previous steps
          emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        });
      }
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
