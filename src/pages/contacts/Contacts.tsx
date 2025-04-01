import React from 'react'
import { useFormik, FormikHelpers } from 'formik'
import emailjs from '@emailjs/browser'

import LinkComponent from '../../components/links/LinkComponent'
import { basicSchema } from '../../schemas'

import './contacts.css'

type ContactValues = {
    name: string
    email: string
    message: string
}

const onSubmit = async (
    values: ContactValues,
    actions: FormikHelpers<ContactValues>
) => {
    try {
        await emailjs.send(
            'service_8j6hgsd',
            'template_8fvi0rw',
            {
                from_name: values.name,
                to_name: 'Roman',
                from_email: values.email,
                to_email: 'popadinets.roman1@gmail.com',
                message: values.message,
            },
            'gf_X0ljaMYjZ4cGqf'
        )
        alert('Your message has been sent!')
    } catch (e) {
        console.log(e)
    }
    actions.resetForm()
}

const Contacts: React.FC = () => {
    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleBlur,
        handleChange,
        isSubmitting,
    } = useFormik<ContactValues>({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    return (
        <>
            <div className="contact-main-block">
                <div className="contact-talk-container">
                    <h3>Let&#39;s talk</h3>
                    <p>
                        If you&#39;re looking for a new developer to join your
                        team, or have any questions, don&#39;t hesitate to
                        contact me!
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    autoComplete={'off'}
                    className="contact-form-body">
                    <label className="form-label">
                        <span>Full Name</span>
                        <input
                            type="text"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="John Doe"
                            className={`form-control ${errors.name && touched.name ? 'error' : ''}`}
                        />
                        {errors.name && touched.name ? (
                            <span style={{ color: 'tomato' }}>
                                {errors.name}
                            </span>
                        ) : null}
                    </label>
                    <label className="form-label">
                        <span>Email</span>
                        <input
                            type="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            placeholder="johndoe@gmail.com"
                            className={`form-control ${errors.email && touched.email ? 'error' : ''}`}
                        />
                        {errors.email && touched.email ? (
                            <span style={{ color: 'tomato' }}>
                                {errors.email}
                            </span>
                        ) : null}
                    </label>
                    <label className="form-label">
                        <span>Your message</span>
                        <textarea
                            id="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            rows={5}
                            placeholder="Hi, I wanna give you a job..."
                            className={`form-control textarea ${errors.message && touched.message ? 'error' : ''}`}
                        />
                        {errors.message && touched.message ? (
                            <span style={{ color: 'tomato' }}>
                                {errors.message}
                            </span>
                        ) : null}
                    </label>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="form-btn">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                <LinkComponent style={{ justifyContent: 'center' }} />
            </div>
        </>
    )
}
export { Contacts }
