# Personal Portfolio

This is my personal portfolio, developed using HTML5, CSS3, and JavaScript. I have also used the EmailJS library to implement the contact form.

## Features

- Modern and appealing design.
- Main sections: Home, Projects, About Me, Education, Skills, and Contact.
- Projects section with descriptions and links.
- Detailed information about my experience and skills.
- Contact form with EmailJS integration for sending messages.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- EmailJS

## Usage

1. Clone or download the repository to your local machine.
2. Open the index.html file in your web browser.

## EmailJS Configuration

If you want to use the contact form and receive messages in your own email, follow these steps:

1. Create an account on [EmailJS](https://www.emailjs.com/) if you don't have one.

    ```javascript
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <script type="text/javascript">
        emailjs.init('YOUR_PUBLIC_KEY')
      </script>
    ```

2. Add an email service
    ![Ejemplo 1](https://i.postimg.cc/kM2yhtw7/image.png)

3. Create an email template
    ![Ejemplo 2](https://i.postimg.cc/SKcB9v2t/image.png)
    ![Ejemplo 3](https://i.postimg.cc/7PpYSpfq/image.png)

4. Create an HTML form

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

5. Open the script.js file in a text editor.

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

## Contribution

If you want to contribute to this project, you can do so by following these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/nueva-funcionalidad`).
3. Make the desired changes and commit them (`git commit -am 'Agrega una nueva funcionalidad'`).
4. Push the changes to your remote repository (`git push origin feature/nueva-funcionalidad`).
5. Open a Pull Request in this repository.

## Support

If you encounter any issues or have any questions, feel free to [create an issue](https://github.com/rubenmantilladev/portfolio/issues) in this repository.
