document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Show loading message
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.success-message').style.display = 'none';
    document.querySelector('.error-message').style.display = 'none';

    // Format message for Discord webhook
    const webhookBody = {
        embeds: [{
            title: "New Contact Form Submission",
            color: 0x7289DA, // Discord blue color
            fields: [
                {
                    name: "Firstname",
                    value: firstname,
                    inline: true
                },
                {
                    name: "Lastname",
                    value: lastname,
                    inline: true
                },
                {
                    name: "Email",
                    value: email,
                    inline: true
                },
                {
                    name: "Subject",
                    value: subject
                },
                {
                    name: "Message",
                    value: message
                }
            ],
            footer: {
                text: "Contact Form Submission • " + new Date().toLocaleString()
            }
        }]
    };

    // Replace this URL with your Discord webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1299752274804871240/pQY34FwQyU8txuuOFChF-WrCu-o8LOvYtLGclnINhHHHl5FWH870eMUzLceZQVNgVNCX';

    // Send to Discord webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody)
    })
    .then(response => {
        if (response.ok) {
            document.querySelector('.success-message').style.display = 'block';
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        document.querySelector('.error-message').style.display = 'block';
        console.error('Error:', error);
    })
    .finally(() => {
        document.querySelector('.loading').style.display = 'none';
    });
});