# Contact Form

The Portfolio Sidebar project includes a contact form on the Contact page that uses EmailJS for sending emails without a backend server.

## Setup

The contact form is implemented in the `Contact.jsx` component. It uses the EmailJS library to send emails directly from the client-side.

### EmailJS Configuration

The project uses environment variables to store EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These variables are accessed in the code using `import.meta.env`:

```jsx
emailjs
  .send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: name,
      from_email: email,
      message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
```

## Form State Management

The form uses React's `useState` hook to manage form data and validation states:

```jsx
const [formData, setFormData] = useState({ name: "", email: "", message: "" });
const [error, setError] = useState("");
const [success, setSuccess] = useState(false);

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

## Form Validation

The form includes validation for required fields and email format:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, message } = formData;

  if (!name || !email || !message) {
    setError(t("contact.errorRequired"));
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError(t("contact.errorInvalidEmail"));
    return;
  }

  // Proceed with form submission
  // ...
};
```

## Form Submission

The form submission process uses EmailJS to send the email:

```jsx
emailjs
  .send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: name,
      from_email: email,
      message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(
    () => {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    },
    () => {
      setError(t("contact.errorSubmission"));
    }
  );
```

## Success Message

After successful form submission, a success message is displayed using a modal:

```jsx
{success && (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    role="dialog"
    aria-modal="true"
    aria-labelledby="success-title"
  >
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 id="success-title" className="text-2xl font-bold">{t("contact.successMessageTitle")}</h2>
      <p className="mt-4">{t("contact.successMessageBody")}</p>
      <button
        className="mt-6 px-4 py-2 bg-black text-white rounded-lg hover:bg
